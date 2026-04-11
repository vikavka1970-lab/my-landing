"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Бриф / звонок",
    desc: "Обсуждаем задачу, я задаю вопросы и погружаюсь в ваш бизнес",
  },
  {
    number: "02",
    title: "Предложение",
    desc: "Получаете чёткий план, сроки и стоимость — без сюрпризов",
  },
  {
    number: "03",
    title: "Разработка",
    desc: "Итерации, живые превью, ваша обратная связь на каждом шаге",
  },
  {
    number: "04",
    title: "Запуск",
    desc: "Передаю готовый продукт с инструкцией и остаюсь на связи",
  },
];

export default function Process() {
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
    <section ref={sectionRef} id="process" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="fade-up text-center mb-16">
          <span className="text-sm font-display font-semibold text-cyan uppercase tracking-widest">
            Процесс
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3 tracking-tight">
            Как мы работаем
          </h2>
          <p className="text-text-muted mt-4 max-w-md mx-auto">
            Четыре шага — от первого звонка до готового продукта
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="fade-up relative">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-28px)] h-px bg-gradient-to-r from-accent/40 to-cyan/40" />
              )}

              <div className="glass rounded-2xl p-6 h-full">
                {/* Number */}
                <div className="font-display font-extrabold text-4xl text-gradient mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
