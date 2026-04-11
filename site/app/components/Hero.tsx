"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-hidden" id="hero">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
        <div
          ref={ref}
          className="fade-up max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-slow" />
            Открыта для новых проектов
          </div>

          {/* Name */}
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-4">
            Виктория
            <br />
            <span className="text-gradient">Полтавченко</span>
          </h1>

          {/* Positioning */}
          <p className="font-display text-xl md:text-2xl text-text-muted font-semibold mb-6">
            Создаю сайты и внедряю AI-автоматизацию для бизнеса
          </p>

          {/* Subheadline */}
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Берёте у меня сайт — получаете готовый инструмент продаж.
            <br />
            Внедряете AI-агента — освобождаете команду от рутины.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacts"
              className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-display font-semibold text-base transition-all duration-300 hover:bg-accent/90"
            >
              Написать мне
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-accent/30 text-text-primary font-display font-semibold text-base transition-all duration-300 hover:border-accent/60 hover:bg-accent/5"
            >
              Посмотреть услуги
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs">
        <span>Скролл</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}
