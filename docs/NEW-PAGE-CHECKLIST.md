# Чеклист новой страницы

Когда создаётся новая `.html`-страница, она должна выглядеть единым целым с остальным сайтом. Для этого копируй блоки из существующей страницы (проще всего — из `pricing.html`).

## Минимальный чеклист

- [ ] CSS-переменные (`--bg`, `--surface`, `--border`, `--accent`, `--cyan`, `--text`, `--muted`)
- [ ] Google Fonts: Syne + DM Sans + Syne Mono
- [ ] Grain texture overlay (`#grain` + `@keyframes grain`)
- [ ] Кастомный курсор (`.cursor-dot` + `.cursor-ring` + скрипт в конце файла)
- [ ] Прогресс-бар скролла (`#scroll-progress`)
- [ ] Fade-up анимации (`.fade-up` + `IntersectionObserver` в скрипте)
- [ ] Навигация: логотип «ВП» → `index.html`, кнопка «Обсудить проект» → `index.html#contacts`
- [ ] Адаптивность: `@media` для `640px`, `860px`, `1024px`
- [ ] `<title>` и OG-теги (`og:title`, `og:description`, `og:image`)

## Скриншоты для портфолио

```
npm run screenshot -- <url> <имя-файла>
npm run screenshot -- https://example.com realty-site
npm run screenshot -- https://example.com realty-site --all   # десктоп + мобайл
```

Файл сохраняется в `images/`. Скрипт: `scripts/screenshot.js`.

Подробности — в `README.md`.
