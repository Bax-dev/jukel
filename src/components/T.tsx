import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

interface TProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const T = ({ children, as: Tag, className }: TProps) => {
  const { lang, translate, cache } = useLang();
  const [text, setText] = useState(children);

  useEffect(() => {
    if (lang === "en") {
      setText(children);
      return;
    }

    const key = children.trim();
    if (cache[key]) {
      setText(cache[key]);
      return;
    }

    translate(children).then(setText);
  }, [lang, children, translate, cache]);

  if (Tag) {
    return <Tag className={className}>{text}</Tag>;
  }

  return <>{text}</>;
};

export default T;
