"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Сайты под ключ",
    description:
      "Лендинги, корпоративные сайты, интернет-магазины. От брифа до запуска — без технических головных болей с вашей стороны.",
    bullets: [
      "Дизайн под вашу аудиторию",
      "Быстрая загрузка и мобильная версия",
      "Готов к старту в сжатые сроки",
    ],
    color: "accent",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>
      </svg>
    ),
    title: "ИИ-агенты и автоматизация",
    description:
      "Автоматизирую рутинные задачи — ответы клиентам, обработку заявок, генерацию контента, внутренние процессы.",
    bullets: [
      "Работает 24/7 без вашего участия",
      "Интегрируется с CRM, мессенджерами, таблицами",
      "Экономит часы работы каждую неделю",
    ],
    color: "cyan",
  },
];

export default function Services() {
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
    <section ref={sectionRef} id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="fade-up mb-16 text-center">
          <span className="text-sm font-display font-semibold text-cyan uppercase tracking-widest">
            Услуги
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3 tracking-tight">
            Что я делаю
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="fade-up glass rounded-2xl p-8 group hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl mb-6 ${
                  service.color === "accent"
                    ? "bg-accent/10 text-accent"
                    : "bg-cyan/10 text-cyan"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm text-text-muted">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        service.color === "accent" ? "bg-accent" : "bg-cyan"
                      }`}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
