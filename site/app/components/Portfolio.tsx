"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    type: "Сайт под ключ",
    title: "Цифровые инструменты риелтора",
    desc: "Лендинг + цифровая визитка для агента по продаже загородной недвижимости в Подмосковье. Галерея, калькулятор рассрочки, видео с экскурсии.",
    stack: ["HTML", "CSS", "JavaScript"],
    color: "accent",
    status: "В разработке",
  },
  {
    type: "AI-инструмент",
    title: "Калькулятор доходов и расходов",
    desc: "Умный инструмент для анализа финансов, разработанный на платформе AI Studio. Автоматизирует расчёты и помогает принимать решения.",
    stack: ["AI Studio", "Автоматизация"],
    color: "cyan",
    status: "В разработке",
  },
];

export default function Portfolio() {
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
    <section ref={sectionRef} id="portfolio" className="py-24 md:py-32 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up text-center mb-16">
          <span className="text-sm font-display font-semibold text-cyan uppercase tracking-widest">
            Проекты
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3 tracking-tight">
            Работы
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="fade-up glass rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Type + Status */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-display font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                    project.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-cyan/10 text-cyan"
                  }`}
                >
                  {project.type}
                </span>
                <span className="text-xs text-text-muted border border-surface rounded-full px-3 py-1">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-text-muted border border-surface/80 rounded-lg px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="fade-up text-center">
          <p className="text-text-muted text-sm">
            Больше кейсов и отзывы клиентов — скоро
          </p>
        </div>
      </div>
    </section>
  );
}
