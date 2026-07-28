"use client";

import { useEffect, useState } from "react";

const WORDS = ["брендов", "бизнеса", "экспертов"];

export default function RotatingWord() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setI((prev) => (prev + 1) % WORDS.length);
        setVisible(true);
      }, 350);
      return () => clearTimeout(swap);
    }, 2200);
    return () => clearInterval(tick);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden align-baseline">
      <span
        className={`inline-block text-accent transition-all duration-300 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {WORDS[i]}
      </span>
    </span>
  );
}
