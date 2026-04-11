"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="fade-up">
            <div className="relative">
              <div className="w-full aspect-[4/5] max-w-sm mx-auto md:mx-0 rounded-2xl glass flex items-center justify-center overflow-hidden">
                <div className="text-center text-text-muted">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-4 opacity-30">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                  <p className="text-sm opacity-50">Фото</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border border-accent/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl border border-cyan/20 -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="fade-up space-y-6">
            <div>
              <span className="text-sm font-display font-semibold text-cyan uppercase tracking-widest">
                О себе
              </span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3 tracking-tight">
                Привет, я Виктория
              </h2>
            </div>

            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Я эксперт в области AI и цифровых технологий. Помогаю бизнесу
                создавать сайты, которые продают, и внедрять AI-инструменты,
                которые освобождают команду от рутины.
              </p>
              <p>
                Я выбрала это направление, потому что вижу, как технологии
                меняют способ работы — и хочу помочь бизнесу использовать их
                возможности по максимуму, без лишней сложности.
              </p>
              <p>
                Работаю в тесном контакте с клиентами: задаю вопросы, погружаюсь
                в задачу и предлагаю решение, которое реально работает. Без воды
                и технического жаргона.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Прозрачность", desc: "Понятные сроки и стоимость" },
                { label: "Результат", desc: "Не процесс, а готовый продукт" },
                { label: "Погружение", desc: "Изучаю вашу задачу изнутри" },
                { label: "Поддержка", desc: "На связи после запуска" },
              ].map((v) => (
                <div key={v.label} className="glass rounded-xl p-4">
                  <div className="font-display font-semibold text-sm text-accent mb-1">
                    {v.label}
                  </div>
                  <div className="text-xs text-text-muted">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
