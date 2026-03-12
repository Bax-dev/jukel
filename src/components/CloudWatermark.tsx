import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface CloudWatermarkProps {
  variant?: "clouds" | "grid" | "circuit";
}

const CloudWatermark = ({ variant = "clouds" }: CloudWatermarkProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const layer1X = useTransform(mouseX, [0, 1], [-15, 15]);
  const layer1Y = useTransform(mouseY, [0, 1], [-10, 10]);
  const layer2X = useTransform(mouseX, [0, 1], [10, -10]);
  const layer2Y = useTransform(mouseY, [0, 1], [8, -8]);
  const layer3X = useTransform(mouseX, [0, 1], [-8, 8]);
  const layer3Y = useTransform(mouseY, [0, 1], [-6, 6]);

  if (variant === "grid") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto">
        <motion.svg
          style={{ x: layer1X, y: layer1Y }}
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/[0.18]"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </motion.svg>
        <motion.svg
          style={{ x: layer2X, y: layer2Y }}
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Floating nodes */}
          {[
            { cx: "15%", cy: "20%", r: 3 },
            { cx: "80%", cy: "15%", r: 2.5 },
            { cx: "60%", cy: "70%", r: 3.5 },
            { cx: "25%", cy: "80%", r: 2 },
            { cx: "90%", cy: "50%", r: 3 },
            { cx: "45%", cy: "40%", r: 2.5 },
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              className="fill-primary/[0.25]"
              animate={{ r: [node.r, node.r + 1, node.r], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.svg>
      </div>
    );
  }

  if (variant === "circuit") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto">
        <motion.svg
          style={{ x: layer1X, y: layer1Y }}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circuit paths */}
          <g className="text-primary/[0.2]" fill="none" stroke="currentColor" strokeWidth="1">
            <motion.path
              d="M 50 100 L 200 100 L 200 250 L 350 250"
              animate={{ pathLength: [0, 1], opacity: [0, 0.3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              strokeDasharray="8 4"
            />
            <motion.path
              d="M 600 50 L 600 200 L 450 200 L 450 350"
              animate={{ pathLength: [0, 1], opacity: [0, 0.3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
              strokeDasharray="8 4"
            />
            <motion.path
              d="M 100 400 L 300 400 L 300 500 L 500 500"
              animate={{ pathLength: [0, 1], opacity: [0, 0.3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 2 }}
              strokeDasharray="8 4"
            />
            <motion.path
              d="M 700 300 L 550 300 L 550 150 L 400 150"
              animate={{ pathLength: [0, 1], opacity: [0, 0.3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
              strokeDasharray="8 4"
            />
          </g>
          {/* Junction nodes */}
          {[
            { x: 200, y: 100 },
            { x: 350, y: 250 },
            { x: 600, y: 200 },
            { x: 450, y: 350 },
            { x: 300, y: 400 },
            { x: 500, y: 500 },
            { x: 550, y: 300 },
            { x: 400, y: 150 },
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="4"
              className="fill-primary/[0.25]"
              animate={{ r: [3, 5, 3], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.svg>
        <motion.svg
          style={{ x: layer3X, y: layer3Y }}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cloud outlines */}
          <motion.path
            d="M 650 80 C 630 60 600 60 590 80 C 570 65 545 75 545 95 C 530 95 520 110 530 120 L 670 120 C 685 110 680 95 665 95 C 670 80 660 70 650 80Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/[0.18]"
            animate={{ y: [0, -8, 0], opacity: [0.12, 0.25, 0.12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 150 450 C 135 435 110 435 102 450 C 87 438 67 447 67 462 C 55 462 47 475 55 483 L 165 483 C 177 475 173 462 160 462 C 165 450 157 442 150 450Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/[0.18]"
            animate={{ y: [0, -6, 0], opacity: [0.12, 0.25, 0.12] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.svg>
      </div>
    );
  }

  // Default: clouds variant
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto">
      {/* Layer 1 - Large background clouds */}
      <motion.svg
        style={{ x: layer1X, y: layer1Y }}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 120 200 C 100 170 60 170 50 200 C 25 180 -5 195 -5 220 C -25 220 -35 240 -20 255 L 145 255 C 165 240 158 220 140 220 C 150 200 138 185 120 200Z"
          className="fill-primary/[0.15]"
          animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 700 150 C 680 125 645 125 635 150 C 615 135 590 148 590 168 C 572 168 562 185 575 198 L 725 198 C 743 185 737 168 720 168 C 728 150 718 137 700 150Z"
          className="fill-primary/[0.12]"
          animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          d="M 400 420 C 385 400 355 400 348 420 C 330 405 310 418 310 435 C 295 435 288 450 298 460 L 420 460 C 435 450 430 435 415 435 C 422 420 413 408 400 420Z"
          className="fill-primary/[0.13]"
          animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.svg>

      {/* Layer 2 - Medium accent clouds */}
      <motion.svg
        style={{ x: layer2X, y: layer2Y }}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 550 350 C 540 335 520 335 515 350 C 505 340 490 348 490 358 C 480 358 475 368 482 375 L 560 375 C 570 368 567 358 557 358 C 562 350 555 342 550 350Z"
          className="fill-primary/[0.18]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M 200 100 C 192 88 175 88 170 100 C 162 92 150 98 150 107 C 142 107 138 115 143 120 L 208 120 C 216 115 213 107 205 107 C 210 100 204 93 200 100Z"
          className="fill-primary/[0.15]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.svg>

      {/* Layer 3 - Small floating dots (data particles) */}
      <motion.svg
        style={{ x: layer3X, y: layer3Y }}
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[
          { cx: "10%", cy: "30%", delay: 0 },
          { cx: "85%", cy: "25%", delay: 1.2 },
          { cx: "70%", cy: "65%", delay: 0.8 },
          { cx: "30%", cy: "75%", delay: 2 },
          { cx: "50%", cy: "15%", delay: 0.5 },
          { cx: "20%", cy: "55%", delay: 1.8 },
          { cx: "92%", cy: "45%", delay: 1 },
          { cx: "40%", cy: "90%", delay: 0.3 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="2"
            className="fill-primary/[0.25]"
            animate={{
              r: [1.5, 3, 1.5],
              opacity: [0.12, 0.3, 0.12],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default CloudWatermark;
