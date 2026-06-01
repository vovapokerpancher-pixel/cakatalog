import { Telegraf, Markup } from "telegraf";
import { HttpsProxyAgent } from "https-proxy-agent";
import { SocksProxyAgent } from "socks-proxy-agent";

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("❌ BOT_TOKEN not set");
  process.exit(1);
}

let bot;
const proxy = process.env.BOT_PROXY;

if (proxy) {
  const agent = proxy.startsWith("socks")
    ? new SocksProxyAgent(proxy)
    : new HttpsProxyAgent(proxy);
  bot = new Telegraf(token, { telegram: { agent } });
  console.log("🔌 Using proxy:", proxy);
} else {
  bot = new Telegraf(token);
}

const WEBAPP_URL = "https://cakatalog.online";
const PHOTO_URL = `${WEBAPP_URL}/cakatalog-logo.png`;

bot.start((ctx) => {
  const caption = [
    "🎰 *Добро пожаловать в CAKATALOG!*",
    "",
    "Топ онлайн-казино 2026 с проверенными брендами, эксклюзивными бонусами и быстрыми выплатами.",
    "",
    "🔥 Используй промокод *CAKATALOG* при регистрации и получай увеличенные бонусы!",
    "",
    "👇 Нажми *Открыть*, чтобы перейти в каталог",
  ].join("\n");

  return ctx.replyWithPhoto(PHOTO_URL, {
    caption,
    parse_mode: "Markdown",
    ...Markup.inlineKeyboard([
      Markup.button.webApp("🚀 Открыть", WEBAPP_URL),
    ]),
  });
});

bot.launch(() => console.log("✅ Bot started @Cakatalog24_bot"));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
