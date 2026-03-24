import { createContext, useContext, useState, useCallback, useRef, ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  translate: (text: string) => Promise<string>;
  cache: Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const API_URL = "https://api.mymemory.translated.net/get";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const cacheRef = useRef<Record<string, string>>({});
  const [, forceUpdate] = useState(0);

  const translate = useCallback(async (text: string): Promise<string> => {
    if (!text || !text.trim()) return text;

    const key = text.trim();
    if (cacheRef.current[key]) return cacheRef.current[key];

    try {
      const res = await fetch(
        `${API_URL}?q=${encodeURIComponent(key)}&langpair=en|ar`
      );
      const data = await res.json();
      const translated = data?.responseData?.translatedText || key;
      cacheRef.current[key] = translated;
      forceUpdate((n) => n + 1);
      return translated;
    } catch {
      return key;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLang, translate, cache: cacheRef.current }}
    >
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
