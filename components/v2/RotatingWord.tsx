"use client";

import { useEffect, useState } from "react";

const WORDS = ["брендов", "бизнеса", "экспертов"];
// дублируем первое слово в конце для бесшовной прокрутки без пустого кадра
const LIST = [...WORDS, WORDS[0]];

export default function RotatingWord() {
  const [i, setI] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimate(true);
      setI((v) => v + 1);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  // после мгновенного снапа к началу — вернуть анимацию на следующий кадр
  useEffect(() => {
    if (animate) return;
    const r = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(r);
  }, [animate]);

  // доехали до дубля первого слова — снап к началу ровно в конце перехода
  const handleTransitionEnd = () => {
    if (i >= WORDS.length) {
      setAnimate(false);
      setI(0);
    }
  };

  return (
    <span className="relative inline-flex h-[1.25em] flex-col overflow-hidden align-middle text-accent">
      <span
        onTransitionEnd={handleTransitionEnd}
        className="flex flex-col will-change-transform"
        style={{
          transform: `translate3d(0, -${i * 1.25}em, 0)`,
          transition: animate ? "transform 0.55s cubic-bezier(0.65,0,0.35,1)" : "none",
        }}
      >
        {LIST.map((w, idx) => (
          <span key={idx} className="flex h-[1.25em] items-center whitespace-nowrap leading-none">
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
