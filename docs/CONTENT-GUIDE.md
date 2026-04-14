# Руководство по обновлению контента

Этот файл — шпаргалка: как найти и изменить любой текст или блок сайта без лишних поисков.

Все изменения делаются в одном файле: `index.html`.  
После правки — сохранить, сделать `git push`, изменения появятся на сайте через 1–2 минуты.

---

## Быстрая навигация по файлу

Файл разбит на именованные блоки-комментарии. Ищи по `Ctrl+F`:

| Ищи | Найдёшь |
|---|---|
| `NAV` | Навигация |
| `HERO` | Первый экран |
| `STATS BAR` | Пиллары доверия под Hero |
| `SERVICES` | Карточки услуг |
| `PORTFOLIO` | Портфолио |
| `ABOUT` | Блок "О себе" |
| `PROCESS` | Как я работаю |
| `FAQ` | Частые вопросы |
| `CONTACTS` | Форма и контакты |
| `FOOTER` | Подвал |
| `JAVASCRIPT` | Скрипты |

---

## Частые правки

### Изменить статус доступности

Строка в Hero (под фото):
```html
Открыта для новых проектов · Старт в мае
```

Строка в Контактах:
```html
Сейчас открыта для проектов — старт в мае 2026
```

Найти через `Ctrl+F`: `Старт в мае`

---

### Изменить фразы typewriter (Hero)

Найти через `Ctrl+F`: `phrases`

```js
const phrases = [
  'Создаю сайты под ключ',
  'Внедряю AI-автоматизацию',
  'Освобождаю бизнес от рутины',
  'Запускаю за 2 недели'
];
```

Можно добавить, убрать или изменить любую фразу.

---

### Заменить фото

**Фото в Hero и "О себе":** файл `images/victoria.png`  
Просто замени файл с тем же именем. Рекомендуемое соотношение сторон: 3:4 (вертикальный портрет).

```html
<!-- Hero -->
<img src="images/victoria.png" alt="Виктория Полтавченко">

<!-- О себе — аватар -->
<img src="images/victoria.png" alt="Виктория Полтавченко">
```

---

### Изменить цены в FAQ

Найти через `Ctrl+F`: `от 25 000`

```html
Ориентиры: лендинг — от 25 000 ₽, корпоративный сайт — от 50 000 ₽, AI-агент — от 20 000 ₽.
```

---

### Изменить контакты

**Telegram:**
```html
<a href="https://t.me/viktoriapoltavchenko" ...>
  <div class="contact-val">@viktoriapoltavchenko</div>
```

**Email:**
```html
<a href="mailto:vikavka1970@gmail.com" ...>
  <div class="contact-val">vikavka1970@gmail.com</div>
```

Найти через `Ctrl+F`: `vikavka1970`

---

## Добавить карточку в Портфолио

Структура карточки (обычная, не wide):

```html
<div class="portfolio-card glass fade-up">
  <div class="mockup">
    <div class="mockup-bar">
      <div class="mockup-dot"></div>
      <div class="mockup-dot"></div>
      <div class="mockup-dot"></div>
      <div class="mockup-url">название-сайта.ru</div>
    </div>
    <div class="mockup-screen" style="padding:0;overflow:hidden;">
      <img src="images/ИМЯ-ФАЙЛА.png" alt="Описание">
    </div>
  </div>
  <div class="card-header">
    <span class="card-type">Сайт под ключ</span>
    <span class="card-status card-status--done">✓ Завершён</span>
  </div>
  <h3>Название проекта</h3>
  <p>Описание задачи и решения.</p>
  <div class="stack-tags">
    <span class="tag">HTML</span>
    <span class="tag">CSS</span>
  </div>
</div>
```

**Статусы карточки:**
- `<span class="card-status">В разработке</span>` — серый
- `<span class="card-status card-status--done">✓ Завершён</span>` — зелёный

**Скриншот:** положи PNG в папку `images/` и укажи путь в `src`.

---

## Добавить вопрос в FAQ

Найти блок `FAQ` и скопировать структуру:

```html
<div class="faq-item">
  <button class="faq-q" onclick="toggleFaq(this)">
    Твой вопрос здесь?
    <span class="faq-icon">+</span>
  </button>
  <div class="faq-a">
    <div class="faq-a-inner">
      Ответ на вопрос. Можно несколько предложений.
    </div>
  </div>
</div>
```

---

## Добавить отзыв

Когда появятся реальные клиенты — добавь секцию отзывов перед FAQ. Структура одной карточки:

```html
<div class="glass" style="padding:28px 32px; border-radius:20px;">
  <p style="font-size:16px; line-height:1.7; color:var(--muted); margin-bottom:20px;">
    "Текст отзыва. Конкретный результат, не просто 'спасибо'."
  </p>
  <div style="display:flex; align-items:center; gap:12px;">
    <img src="images/client-name.jpg" 
         style="width:44px; height:44px; border-radius:50%; object-fit:cover;">
    <div>
      <div style="font-weight:600; font-size:14px;">Имя Фамилия</div>
      <div style="font-size:13px; color:var(--muted);">Должность, Компания</div>
    </div>
  </div>
</div>
```

> **Важно:** Не добавляй выдуманные отзывы. Только реальные клиенты с реальными именами.

---

## Обновить ключ Web3Forms

Найти через `Ctrl+F`: `ЗАМЕНИ_НА_СВОЙ_КЛЮЧ`

```js
data.append('access_key', 'ЗАМЕНИ_НА_СВОЙ_КЛЮЧ_WEB3FORMS');
```

Заменить значение на ключ, полученный на https://web3forms.com

---

## Деплой после изменений

```bash
git add index.html
git commit -m "Коротко: что изменил"
git push origin master
```

Сайт обновится через 1–2 минуты.

---

## Что не трогать без понимания

- Блок `<style>` в начале файла — CSS всего сайта
- Блок `<script>` в конце — анимации, форма, курсор
- `@keyframes` — анимации (spin, pulse, float)
- `@media (max-width: ...)` — адаптивность под телефон
