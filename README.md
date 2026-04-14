# Личный сайт — Виктория Полтавченко

Лендинг-портфолио веб-разработчика и AI-специалиста.  
**Живой сайт:** https://vikavka1970-lab.github.io/my-landing/

---

## Что это

Одностраничный лендинг для B2B-клиентов. Цель — знакомство с услугами и генерация заявок через форму или Telegram.

**Секции на сайте:**
- Hero с фото и typewriter-эффектом
- Пиллары доверия (stats bar)
- Услуги (3 карточки)
- Портфолио (2 кейса)
- О себе (аватар + цитата + ценности)
- Как я работаю (4 шага)
- FAQ с ценами
- Контакты (форма + Telegram + Email)

---

## Стек

| Технология | Использование |
|---|---|
| HTML / CSS / JavaScript | Весь сайт — один файл `index.html` |
| Google Fonts | Syne (заголовки) + DM Sans (текст) + Syne Mono |
| Web3Forms | Обработка формы обратной связи |
| GitHub Pages | Хостинг (ветка `master`, папка `/`) |

Фреймворки не используются. Зависимостей нет. Открыть `index.html` — и сайт работает.

---

## Структура файлов

```
my-landing/
├── index.html          ← весь сайт (HTML + CSS + JS)
├── images/
│   ├── victoria.png    ← фото для Hero и блока "О себе"
│   ├── portfolio-realty.png  ← скриншот первого кейса
│   ├── tikhie-lugi.png       ← доп. изображение кейса
│   └── favicon.svg     ← иконка вкладки (SVG с "ВП")
├── brief.md            ← требования и контент-план проекта
├── research.md         ← анализ конкурентов и рынка
├── specs/
│   └── personal-site-spec.md ← подробная спецификация дизайна
└── docs/
    └── CONTENT-GUIDE.md ← как обновлять контент
```

---

## Запуск локально

Сайт — статический HTML-файл. Никакой сборки не нужно.

```bash
# Вариант 1: просто открыть в браузере
open index.html

# Вариант 2: локальный сервер (если нужны корректные пути)
npx serve .
# или
python -m http.server 8080
```

---

## Деплой на GitHub Pages

Сайт автоматически публикуется при пуше в ветку `master`.

```bash
git add index.html images/
git commit -m "описание изменений"
git push origin master
```

Через 1–2 минуты изменения появляются на https://vikavka1970-lab.github.io/my-landing/

**Настройки Pages:** `Settings → Pages → Source: master, / (root)`

---

## Настройка формы (Web3Forms)

Форма реально отправляет данные на `vikavka1970@gmail.com` через Web3Forms.

**Для активации:**
1. Зайди на https://web3forms.com
2. Введи `vikavka1970@gmail.com` → получишь ключ на почту
3. В `index.html` найди строку:
   ```js
   data.append('access_key', 'ЗАМЕНИ_НА_СВОЙ_КЛЮЧ_WEB3FORMS');
   ```
4. Замени `ЗАМЕНИ_НА_СВОЙ_КЛЮЧ_WEB3FORMS` на полученный ключ
5. Сохрани и запушь

---

## Цветовая палитра

```css
--bg:      #0F172A   /* фон страницы */
--surface: #1E293B   /* карточки, блоки */
--border:  #334155   /* границы элементов */
--accent:  #6366F1   /* кнопки, ссылки (indigo) */
--cyan:    #06B6D4   /* иконки, акценты (cyan) */
--text:    #F1F5F9   /* основной текст */
--muted:   #94A3B8   /* второстепенный текст */
```

---

## Шрифты

```
Syne       → все заголовки (H1–H3, nav, кнопки)
DM Sans    → основной текст, параграфы
Syne Mono  → метки (label), теги стека
```

Подключены через Google Fonts, ссылка в `<head>`.

---

## Контакты и ссылки

| | |
|---|---|
| Telegram | [@viktoriapoltavchenko](https://t.me/viktoriapoltavchenko) |
| Email | vikavka1970@gmail.com |
| GitHub | [vikavka1970-lab](https://github.com/vikavka1970-lab) |
| Сайт | [vikavka1970-lab.github.io/my-landing](https://vikavka1970-lab.github.io/my-landing/) |

---

## Что планируется добавить

- [ ] Ключ Web3Forms (форма уже готова, нужен только ключ)
- [ ] Отзывы — когда появятся реальные клиенты
- [ ] Скриншот готового сайта риелтора (не фото интерьера)
- [ ] OG-теги для шеринга в соцсетях (уже в head, уточнить картинку)
