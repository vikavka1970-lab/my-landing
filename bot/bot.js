require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const VICTORIA_CHAT_ID = process.env.VICTORIA_CHAT_ID;
const MINI_APP_URL = 'https://vp-brief-bot.vercel.app';

bot.command('start', async (ctx) => {
  const payload = ctx.message.text.split(' ')[1];
  const isFromApp = payload === 'from_app';

  const text = isFromApp
    ? 'Ваш промокод −10% будет отправлен отдельно после первого проекта.\n\nА пока — заполните бриф:'
    : 'Привет! Заполните короткий бриф — это займёт 2 минуты. Виктория изучит заявку и свяжется с вами:';

  await ctx.reply(text, Markup.inlineKeyboard([
    Markup.button.webApp('📋 Заполнить бриф', MINI_APP_URL)
  ]));
});

bot.on('web_app_data', async (ctx) => {
  try {
    const data = JSON.parse(ctx.webAppData.data);

    const lines = [
      '📋 Новая заявка из Mini App',
      '',
      `👤 Имя: ${data.name}${data.username ? ` (@${data.username})` : ''}`,
      `🎯 Проект: ${data.type}`,
      `⏰ Срок: ${data.timeline}`,
      `💰 Бюджет: ${data.budget}`,
      `⭐ Важно: ${data.priorities}`,
    ];

    if (data.contact) lines.push(`📞 Контакт: ${data.contact}`);
    if (data.details) lines.push(`💬 Детали: ${data.details}`);

    await bot.telegram.sendMessage(VICTORIA_CHAT_ID, lines.join('\n'));
    await ctx.reply('✅ Заявка отправлена! Виктория свяжется с вами в ближайшее время.');
  } catch (e) {
    console.error('Ошибка web_app_data:', e);
    await ctx.reply('Что-то пошло не так. Попробуйте ещё раз.');
  }
});

bot.launch();
console.log('Бот запущен');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
