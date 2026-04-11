export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-surface/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-sm">
          <span className="text-gradient">Виктория Полтавченко</span>
        </div>
        <p className="text-text-muted text-xs">
          © {new Date().getFullYear()} · Сайты и AI-автоматизация для бизнеса
        </p>
      </div>
    </footer>
  );
}
