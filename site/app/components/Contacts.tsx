"use client";

import { useEffect, useRef, useState } from "react";

export default function Contacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Здесь подключить Formspree или Resend
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  return (
    <section ref={sectionRef} id="contacts" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="fade-up space-y-6">
            <div>
              <span className="text-sm font-display font-semibold text-cyan uppercase tracking-widest">
                Контакты
              </span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3 tracking-tight">
                Давай обсудим
                <br />
                <span className="text-gradient">твою задачу</span>
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed">
              Отвечаю в течение 24 часов. Расскажи о своём проекте — и я
              предложу, как могу помочь.
            </p>

            {/* Contact links */}
            <div className="space-y-3">
              <a
                href="https://t.me/username"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">Telegram</div>
                  <div className="text-text-muted text-sm">@username</div>
                </div>
              </a>

              <a
                href="mailto:email@domain.ru"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-cyan/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan group-hover:bg-cyan/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">Email</div>
                  <div className="text-text-muted text-sm">email@domain.ru</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="fade-up">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label className="block text-sm font-display font-semibold mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Как вас зовут?"
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-surface/80 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-display font-semibold mb-2">
                  Email или Telegram
                </label>
                <input
                  type="text"
                  required
                  placeholder="email@domain.ru или @username"
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-surface/80 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-display font-semibold mb-2">
                  Коротко о задаче
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Расскажите, что нужно сделать..."
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-surface/80 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-glow w-full py-4 rounded-xl bg-accent text-white font-display font-semibold text-base transition-all duration-300 hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "idle" && "Отправить"}
                {status === "sending" && "Отправляю..."}
                {status === "sent" && "Отправлено ✓"}
                {status === "error" && "Ошибка — попробуйте ещё раз"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
