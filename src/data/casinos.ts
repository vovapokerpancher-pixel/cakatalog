export interface Casino {
  id: number;
  name: string;
  slug: string;
  rating: number;
  bonus: string;
  minDeposit: string;
  wager: string;
  year: number;
  license: string;
  link: string;
  tags: string[];
  payments: string;
  description: string;
  features: string[];
  bonuses: { type: string; title: string; value: string; desc: string; wager: string }[];
  reviews: { name: string; rating: number; text: string; date: string }[];
}

export const casinos: Casino[] = [
  {
    id: 1, name: "Fugu", slug: "fugu",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 4.7, bonus: "125% на первый депозит + 500 FS на второй", minDeposit: "€10", wager: "x35",
    year: 2020, license: "Curacao", tags: ["fast"], payments: "Visa, МИР, Crypto",
    description: "Fugu Casino — 10 000+ слотов с мгновенными выплатами. Лицензия Curacao, поддержка криптовалют и фиата. При регистрации — бездеп 50 FS, а первый депозит удваиваем.",
    features: ["10 000+ игр от Amatic и других", "Лицензия Curacao", "Бездеп 50-100 FS при регистрации", "Мгновенные выплаты на крипту", "Русскоязычный интерфейс", "Кешбэк каждую неделю"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "125% на первый депозит", desc: "Максимальный бонус до €500", wager: "x35" },
      { type: "deposit", title: "Второй депозит", value: "500 FS", desc: "На второй депозит", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "Сразу после регистрации", wager: "x40" },
    ],
    reviews: [
      { name: "Александр", rating: 4, text: "Хороший выбор игр, выплаты быстрые.", date: "Сегодня" },
      { name: "Мария", rating: 5, text: "Много слотов, интерфейс удобный, всем довольна.", date: "2 дня назад" }
    ]
  },
  {
    id: 2, name: "Daddy", slug: "daddy",
    link: "https://molten-emberpath.com/slgrevwsw",
    rating: 4.5, bonus: "Индивидуальные условия", minDeposit: "Низкий", wager: "x35",
    year: 2021, license: "—", tags: ["exclusive", "fast"], payments: "Visa, МИР, USDT, Crypto",
    description: "Daddy Casino — моментальные выплаты на крипту и рекордная верификация за 2-3 часа. VIP-сервис, индивидуальные бонусы и до 100 FS по промокоду. Идеально для тех, кто ценит скорость.",
    features: ["Верификация за 2-3 часа", "Моментальные выплаты на USDT/Crypto", "Индивидуальные бонусы под игрока", "До 100 FS по промокоду", "VIP-поддержка 24/7", "Персональный менеджер"],
    bonuses: [
      { type: "welcome", title: "VIP-пакет", value: "Индивидуальные условия", desc: "Обсуждается с менеджером", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "До 100 FS", desc: "По промокоду CAKATALOG", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельно до 15%", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Игорь", rating: 5, text: "Верификация за 2 часа — рекорд. Выплаты на USDT мгновенные!", date: "3 дня назад" }]
  },
  {
    id: 3, name: "Joy Casino", slug: "joy-casino",
    link: "https://52288.call2me.pro/ru/registration?partner=p52288p3326933p5988",
    rating: 4.7, bonus: "200% до $50 + 200 FS", minDeposit: "€1", wager: "x20",
    year: 2014, license: "Лицензия Curacao", tags: ["top", "fast"], payments: "Visa, МИР, Crypto, Skrill",
    description: "Joy Casino — легендарный бренд с 2014 года и отличной репутацией. Приветственный бонус 200% до $50 + 200 FS, бездеп до 200 FS, низкий вейджер x20 и 70 дней на отыгрыш.",
    features: ["Работает с 2014 года", "Бездеп до 200 FS при регистрации", "Низкий вейджер x20", "Срок бонуса 70 дней", "Skrill, Neteller, Crypto", "Проверенный бренд"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "200% до $50 + 200 FS", desc: "Депозит от €1", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "До 200 FS", desc: "Сразу после регистрации", wager: "x30" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Без вейджера", wager: "x1" },
    ],
    reviews: [
      { name: "Сергей", rating: 5, text: "Лучшее казино. Играю годами — всё честно и надёжно.", date: "Вчера" },
      { name: "Анна", rating: 5, text: "Вейджер x20 — это сказка. Легко отыгрывается.", date: "5 дней назад" }
    ]
  },
  {
    id: 4, name: "JOOZ", slug: "jooz",
    link: "https://jozz-promo1.com/alt/jozz10_ru/?46c7a198427be61f57fa1e50e6c4c6ea",
    rating: 4.7, bonus: "100% до 50 000 + 95 FS", minDeposit: "1 000 ₽", wager: "x35",
    year: 2019, license: "Лицензия Curacao", tags: ["fast"], payments: "Visa, МИР, Piastrix",
    description: "JOOZ (Jozz) — топ-казино с кешбэком до 10% и еженедельными турнирами на $750. Бездеп 50 FS по промокоду при регистрации. Приветственный пакет — 100% до 50 000 + 95 FS.",
    features: ["Кешбэк до 10% каждую неделю", "Турниры с призовым фондом $750", "Бездеп 50 FS по промокоду", "Максимальный бонус $1 000", "Русскоязычная поддержка 24/7", "Мгновенные выплаты"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% до 50 000 ₽ + 95 FS", desc: "На первый депозит", wager: "x35" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "По промокоду CAKATALOG", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "До 10% еженедельно", desc: "Автоматически", wager: "x10" },
    ],
    reviews: [{ name: "Дмитрий", rating: 5, text: "Турниры каждую неделю с реальными призами. Лучшее!", date: "2 дня назад" }]
  },
  {
    id: 5, name: "Play Fortuna", slug: "play-fortuna",
    link: "https://fortuna-promo.com/alt/pf_wheel_of_fortune_ru/?9555eb5ac06da8bcf090a2cbdd91067b",
    rating: 4.6, bonus: "100% до $ + до 50 FS", minDeposit: "$10", wager: "x25",
    year: 2013, license: "Лицензия Curacao", tags: ["top", "exclusive"], payments: "Visa, МИР, Crypto",
    description: "Play Fortuna — проверенное казино с 2013 года. Welcome package до $1000 + 200 FS, бездеп 50 FS при регистрации. Вейджер x25 — один из самых низких на рынке. Идеально для новичков.",
    features: ["Работает с 2013 года", "Welcome package $1000 + 200 FS", "Бездеп 50 FS при регистрации", "Низкий вейджер x25", "Криптовалюты принимаем", "Лицензия Curacao"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + до 50 FS", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "Сразу после регистрации", wager: "x35" },
      { type: "deposit", title: "Welcome package", value: "До $1000 + 200 FS", desc: "На первые 4 депозита", wager: "x20" },
    ],
    reviews: [{ name: "Елена", rating: 5, text: "Лучшее для новичков — простые условия, понятный интерфейс.", date: "Вчера" }]
  },
  {
    id: 6, name: "BEEF", slug: "beef",
    link: "https://megaways6.com/c1af8b10d",
    rating: 4.2, bonus: "$900 + 600 FS", minDeposit: "1 000 ₽", wager: "x35",
    year: 2022, license: "Лицензия Curacao", tags: ["new"], payments: "Visa, МИР, Crypto",
    description: "BEEF Casino — свежий проект 2022 года с удобной регистрацией через Google или Telegram. Огромный приветственный пакет $900 + 600 FS и бездеп 50 FS за регистрацию.",
    features: ["Регистрация через Google/Telegram", "Бездеп 50 FS при регистрации", "$900 + 600 FS на старт", "Множество live-игр", "Быстрые выплаты", "Русскоязычный интерфейс"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "$900 + 600 FS", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "Сразу после регистрации", wager: "x30" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Максим", rating: 4, text: "Удобно заходить через Telegram. Слоты топ.", date: "1 неделю назад" }]
  },
  {
    id: 7, name: "Casino-X", slug: "casino-x",
    link: "https://52288.gameshere.xyz/ru/registration?partner=p52288p3326934pb1c1",
    rating: 4.6, bonus: "200% + 100% + 50% + 25% на депозиты", minDeposit: "$5", wager: "x35",
    year: 2015, license: "Лицензия Curacao", tags: ["top", "fast"], payments: "Visa, МИР, Skrill, Neteller",
    description: "Casino-X — премиум-казино с многоуровневым бонусом (200%+100%+50%+25%) и кешбэком до 15% для VIP. Бездеп $25 или 10-20 FS по промокодам. Быстрые выводы через криптовалюты.",
    features: ["Многоуровневый бонус: 200%+100%+50%+25%", "Кешбэк до 15% для VIP", "Бездеп $25 / 10-20 FS", "Skrill, Neteller, Crypto", "Мгновенные выводы", "Премиум-поддержка 24/7"],
    bonuses: [
      { type: "welcome", title: "Приветственный пакет", value: "200% + 100% + 50% + 25%", desc: "На 4 первых депозита", wager: "x35" },
      { type: "free", title: "Бездепозитный", value: "$25 / 10-20 FS", desc: "По промокодам", wager: "x35" },
      { type: "cashback", title: "VIP-кешбэк", value: "До 15%", desc: "Для постоянных игроков", wager: "x10" },
    ],
    reviews: [{ name: "Ольга", rating: 5, text: "VIP-кешбэк 15% реально лучший на рынке. Играю 3 года!", date: "3 дня назад" }]
  },
  {
    id: 8, name: "Flagman", slug: "flagman",
    link: "https://flagmanway1.com/c1c531713",
    rating: 4.5, bonus: "150% до €600 + 100 FS", minDeposit: "€20", wager: "x35",
    year: 2021, license: "Лицензия Curacao", tags: ["exclusive"], payments: "Visa, МИР, Crypto",
    description: "Flagman Casino — 4 уровня лояльности: от IRON до DIAMOND. Welcome package 225% до €900 + 500 FS. Бездеп 50-100 FS за регистрацию. Программа лояльности с реальными привилегиями.",
    features: ["Программа лояльности: IRON→DIAMOND", "Welcome 225% до €900 + 500 FS", "Бездеп 50-100 FS при регистрации", "Эксклюзивные бонусы для VIP", "Мгновенные выплаты", "Персональный менеджер"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "150% до €600 + 100 FS", desc: "На первый депозит от €20", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "После регистрации", wager: "x35" },
      { type: "deposit", title: "Welcome package", value: "225% до €900 + 500 FS", desc: "На первые 3 депозита", wager: "x30" },
    ],
    reviews: [{ name: "Артем", rating: 5, text: "Система уровней затягивает. Иду к DIAMOND!", date: "4 дня назад" }]
  },
  {
    id: 9, name: "CatCasino", slug: "catcasino",
    link: "https://catchthecatthree.com/sr9mvw3hd",
    rating: 4.5, bonus: "100% + 100 FS до C$300", minDeposit: "C$10", wager: "x30",
    year: 2024, license: "Лицензия Curacao", tags: ["new"], payments: "Visa, МИР, Piastrix, Crypto",
    description: "CatCasino — новое казино 2024 года с низким вейджером и щедрыми промокодами. PROMO101 даёт 100 FS без депозита, PROMO111 — 75% + 100 FS. Один из лучших стартовых пакетов.",
    features: ["Новое казино (2024)", "Бонусы с низким вейджером", "PROMO101: 100 FS без депозита", "PROMO111: 75% + 100 FS", "Современный интерфейс", "Быстрая регистрация"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 100 FS до C$300", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Промокод PROMO101", value: "100 FS", desc: "Без депозита", wager: "x30" },
      { type: "deposit", title: "Промокод PROMO111", value: "75% + 100 FS", desc: "На депозит", wager: "x25" },
    ],
    reviews: [{ name: "Ксения", rating: 5, text: "Новое, но очень достойное. Низкий вейджер — редкость!", date: "Вчера" }]
  },
  {
    id: 10, name: "Ton Play", slug: "ton-play",
    link: "https://t.me/tonplay?start=hUWcg4b88IyC15",
    rating: 4.5, bonus: "375% + 200 FS на первые 4 депозита", minDeposit: "10 TON", wager: "x35",
    year: 2023, license: "Crypto", tags: ["new", "crypto"], payments: "TON, USDT, Crypto",
    description: "Ton Play — крипто-казино на блокчейне TON. Приветственный бонус 375% + 200 FS на 4 депозита, ежедневное колесо Ducky Wheel до $777 и +7% ежедневно на депозиты в TON.",
    features: ["Казино на блокчейне TON", "Ducky Wheel до $777 ежедневно", "+7% ежедневно в TON", "375% + 200 FS на старт", "Анонимная игра", "Мгновенные переводы TON"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "375% + 200 FS", desc: "На первые 4 депозита", wager: "x35" },
      { type: "free", title: "Ducky Wheel", value: "До $777 ежедневно", desc: "Крути каждый день", wager: "x35" },
      { type: "crypto", title: "TON-бонус", value: "+7% ежедневно", desc: "На депозит в TON", wager: "x25" },
    ],
    reviews: [{ name: "Влад", rating: 5, text: "TON платежи мгновенные. Ducky Wheel каждый день — кайф!", date: "2 дня назад" }]
  },
  {
    id: 11, name: "R7 Casino", slug: "r7-casino",
    link: "https://cosmos-flight.com/sugcijrr9",
    rating: 3.8, bonus: "100% + 210 FS", minDeposit: "€1.5", wager: "x35",
    year: 2022, license: "Лицензия Curacao", tags: ["fast"], payments: "Visa, МИР, Crypto",
    description: "R7 Casino — 3 000+ игр от 53 провайдеров с минимальным депозитом всего €1.5. Welcome package 300% + 225 FS на 3 депозита. Отличный выбор для тех, кто хочет начать с малого.",
    features: ["3 000+ игр от 53 провайдеров", "Мин. депозит всего €1.5", "Welcome 300% + 225 FS", "Быстрые выплаты", "Удобная мобильная версия", "Русскоязычная поддержка"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 210 FS", desc: "На первый депозит от €1.5", wager: "x30" },
      { type: "deposit", title: "Welcome package", value: "300% + 225 FS", desc: "На первые 3 депозита", wager: "x20" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Автоматически", wager: "x10" },
    ],
    reviews: [{ name: "Никита", rating: 4, text: "53 провайдера — глаза разбегаются. Есть всё!", date: "Вчера" }]
  },
  {
    id: 12, name: "Kent", slug: "kent",
    link: "https://holo-neonrun.com/saikakxwa",
    rating: 4.5, bonus: "50% до €150 + 50 FS", minDeposit: "€5", wager: "x45",
    year: 2021, license: "Лицензия Curacao", tags: ["fast"], payments: "Visa, МИР, Piastrix",
    description: "Kent Casino — лицензированное казино с VIP-обслуживанием. Альтернативный бонус 100% до 500 EUR + 40 FS. Промокод PROMO101 активирует 100 FS без депозита, PROMO111 — 100% + 100 FS.",
    features: ["Лицензия Curacao", "Мин. депозит €5", "PROMO101: 100 FS без депозита", "PROMO111: 100% + 100 FS", "VIP-поддержка 24/7", "Большой выбор слотов"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "50% до €150 + 50 FS", desc: "На первый депозит от €5", wager: "x25" },
      { type: "deposit", title: "Альтернатива", value: "100% до 500 € + 40 FS", desc: "На первый депозит", wager: "x30" },
      { type: "free", title: "Промокод PROMO101", value: "100 FS", desc: "Без депозита", wager: "x35" },
    ],
    reviews: [{ name: "Алиса", rating: 5, text: "VIP-обслуживание на высшем уровне. Всё быстро и чётко.", date: "3 дня назад" }]
  },
  {
    id: 13, name: "Kometa Casino", slug: "kometa",
    link: "https://ignited-lavapass.com/srglifi7d",
    rating: 4.5, bonus: "255% до 45 000 + до 500 FS", minDeposit: "500 ₽", wager: "x35",
    year: 2023, license: "Лицензия Curacao", tags: ["new"], payments: "Visa, МИР, Crypto",
    description: "Kometa Casino — моментальные выплаты, кешбэк до 30 000 и эксклюзивный VIP-клуб. Приветственный бонус 255% до 45 000 + до 500 FS. Регулярные турниры с крупными призами.",
    features: ["Моментальные выплаты", "Кешбэк до 30 000 еженедельно", "VIP-клуб с привилегиями", "Бонус 255% до 45 000 + 500 FS", "Турниры каждую неделю", "Криптовалюты принимаем"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "255% до 45 000 ₽ + 500 FS", desc: "На первый депозит", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "До 30 000 еженедельно", desc: "Автоматические выплаты", wager: "x8" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Без дополнительных условий", wager: "x10" },
    ],
    reviews: [{ name: "Павел", rating: 4, text: "Турниры с крутыми призами. Захожу каждый день.", date: "1 неделю назад" }]
  },
  {
    id: 14, name: "Gama", slug: "gama",
    link: "https://preesiader.com/svarwcffk",
    rating: 4.5, bonus: "100% + 100 FS", minDeposit: "€15", wager: "x45",
    year: 2022, license: "Лицензия Curacao", tags: ["fast"], payments: "Visa, МИР, Skrill",
    description: "Gama Casino — казино и ставки на спорт в одном аккаунте. Welcome package до €$1500 + 450 FS. Максимальный кэшаут до 20x от суммы бонуса. Удобное мобильное приложение.",
    features: ["Казино + ставки на спорт", "Welcome package €1500 + 450 FS", "Мин. депозит €15", "Макс. кэшаут 20x", "Удобное приложение", "Skrill, Neteller, Visa"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 100 FS", desc: "На первый депозит от €15", wager: "x30" },
      { type: "deposit", title: "Welcome package", value: "До €1500 + 450 FS", desc: "На первые 4 депозита", wager: "x20" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Роман", rating: 5, text: "Всё в одном: и казино, и ставки. Очень удобно.", date: "5 дней назад" }]
  },
  {
    id: 15, name: "Arkada", slug: "arkada",
    link: "https://prismed-cyberlane.com/sxb1sdfna",
    rating: 4.5, bonus: "150% на 1-й депозит до 2100 FS", minDeposit: "500 ₽", wager: "x35",
    year: 2021, license: "Лицензия Curacao", tags: ["exclusive"], payments: "Visa, МИР, Crypto",
    description: "Arkada — казино с уникальной системой достижений и бездепом 100 FS по промокоду BETSLIVE или PROMO101. Приветственный бонус 150% на первый депозит до 2100 FS. Зарабатывай достижения и получай награды.",
    features: ["Уникальная система достижений", "Бездеп 100 FS по промокоду", "150% на первый депозит", "До 2100 FS на старте", "Эксклюзивные бонусы", "Мгновенные выплаты"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "150% на первый депозит", desc: "Макс. до 2100 FS", wager: "x25" },
      { type: "free", title: "Промокод BETSLIVE", value: "100 FS", desc: "Без депозита", wager: "x30" },
      { type: "free", title: "Промокод PROMO101", value: "100 FS", desc: "Без депозита", wager: "x30" },
    ],
    reviews: [{ name: "Светлана", rating: 5, text: "Достижения — супер! Сидишь и выполняешь квесты.", date: "2 дня назад" }]
  },
  {
    id: 16, name: "1WIN", slug: "1win",
    link: "https://one-vv893.com/?open=register&p=f6hm",
    rating: 4.6, bonus: "500% до $1 025", minDeposit: "150 ₽", wager: "x35",
    year: 2016, license: "Лицензия Curacao", tags: ["top", "exclusive"], payments: "Visa, МИР, Crypto, Skrill",
    description: "1WIN — гигант индустрии с бонусом 500% до $1 025. Распределение: 200% на первый + последующие депозиты. Крипто-интеграция, мобильное приложение быстрее сайта. Бездеп до 70 FS.",
    features: ["Бонус 500% до $1 025", "Крипто-интеграция", "Приложение работает быстрее сайта", "Бездеп до 70 FS", "Ставки на спорт + казино", "Мгновенные выплаты"],
    bonuses: [
      { type: "welcome", title: "Мега-бонус", value: "500% до $1 025", desc: "На несколько депозитов", wager: "x35" },
      { type: "deposit", title: "Первый депозит", value: "200%", desc: "Макс. до $500", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "До 70 FS", desc: "Сразу после регистрации", wager: "x35" },
    ],
    reviews: [
      { name: "Григорий", rating: 5, text: "500% бонус реально работает. Забрал крупный куш!", date: "Вчера" },
      { name: "Татьяна", rating: 5, text: "Огромный выбор — и казино, и ставки. Не соскучишься!", date: "3 дня назад" }
    ]
  },
  {
    id: 17, name: "Ramen Bet", slug: "ramen-bet",
    link: "https://52288.call2me.xyz/ru/registration?partner=p52288p3326935p1669",
    rating: 3.6, bonus: "200% + 250 FS", minDeposit: "€10", wager: "x35",
    year: 2022, license: "Лицензия Curacao", tags: ["new"], payments: "Visa, МИР, Piastrix",
    description: "Ramen Bet — азиатская тематика и welcome package до €2000. Варианты бонуса под любой депозит: 200% (€10-49), 150% (€50-499). VIP Club с еженедельными фриспинами и кешбэком.",
    features: ["Азиатская тематика и слоты", "Welcome package до €2000", "VIP Club с привилегиями", "Weekly free spins", "Кешбэк для всех игроков", "Уникальные азиатские слоты"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "200% + 250 FS", desc: "Депозит €10-49", wager: "x30" },
      { type: "deposit", title: "Для крупных", value: "150%", desc: "Депозит €50-499", wager: "x25" },
      { type: "deposit", title: "Welcome package", value: "До €2000", desc: "На первые депозиты", wager: "x20" },
    ],
    reviews: [{ name: "Юрий", rating: 4, text: "Азиатские слоты — необычно и интересно.", date: "4 дня назад" }]
  },
  {
    id: 18, name: "7K Casino", slug: "7k-casino",
    link: "https://7kpromotionsfastpartners.com/l/6999fce75550ecf6a30685f2",
    rating: 4.5, bonus: "827% до 320 000 + 527 FS", minDeposit: "500 ₽", wager: "x35",
    year: 2023, license: "Лицензия Curacao", tags: ["new"], payments: "Visa, МИР, Crypto",
    description: "7K Casino — рекордный бонус 827% до 320 000 ₽ + 527 FS. Быстрые выплаты, огромный выбор слотов. Вейджер средний, но сумма бонуса покрывает всё с головой.",
    features: ["Бонус 827% до 320 000 + 527 FS", "Быстрые выплаты", "Огромный выбор слотов", "Регулярные турниры", "Криптовалюты принимаем", "Круглосуточная поддержка"],
    bonuses: [
      { type: "welcome", title: "Гига-бонус", value: "827% до 320 000 ₽ + 527 FS", desc: "На несколько депозитов", wager: "x25" },
      { type: "deposit", title: "Второй депозит", value: "Продолжение бонуса", desc: "Суммарно 827%", wager: "x25" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Автоматически", wager: "x10" },
    ],
    reviews: [{ name: "Марина", rating: 4, text: "Бонус реально огромный. Отыгрывать нужно время.", date: "Вчера" }]
  },
  {
    id: 19, name: "Jetton", slug: "jetton",
    link: "https://t.me/tonplay?start=hUWcg4b88IyC15",
    rating: 4.5, bonus: "100% + 100 FS", minDeposit: "$10", wager: "x35",
    year: 2023, license: "Crypto", tags: ["new", "crypto"], payments: "TON, USDT, Crypto",
    description: "Jetton Games Casino — 6 000+ игр с интеграцией TON-кошелька. Welcome package до 200% на 4 депозита + 250 FS. Lucky Wheel с бездепозитными выигрышами до $1000. Анонимная игра через TON.",
    features: ["6 000+ игр", "Интеграция TON-кошелька", "Lucky Wheel до $1000", "Welcome 200% на 4 депозита + 250 FS", "Анонимная игра", "Мин. депозит $10"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 100 FS", desc: "На первый депозит от $10", wager: "x35" },
      { type: "free", title: "Lucky Wheel", value: "До $1000", desc: "Без депозита", wager: "x35" },
      { type: "deposit", title: "Welcome package", value: "До 200% на 4 депозита + 250 FS", desc: "На первые депозиты", wager: "x30" },
    ],
    reviews: [{ name: "Андрей", rating: 5, text: "TON + Jetton — идеально. Анонимно, быстро, удобно.", date: "3 дня назад" }]
  },
  {
    id: 20, name: "Lucky Bear", slug: "lucky-bear",
    link: "https://t.me/Salvexio_bot/app?startapp=27yH5W",
    rating: 4.0, bonus: "360% на 4 депозита + 250 FS", minDeposit: "10 TON", wager: "x35",
    year: 2023, license: "Crypto", tags: ["new", "crypto"], payments: "TON, USDT, Crypto",
    description: "Lucky Bear — Telegram-казино с еженедельными турнирами на $4 000. Приветственный бонус 360% на 4 депозита + 250 FS. Полностью анонимная игра через TON-кошелёк.",
    features: ["Telegram-казино", "Турниры $4 000 еженедельно", "360% на 4 депозита + 250 FS", "Анонимная игра через TON", "Мгновенные выплаты", "Компактный интерфейс"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "360% на 4 депозита + 250 FS", desc: "На первые депозиты", wager: "x30" },
      { type: "deposit", title: "Бонус на депозит", value: "360% + 250 FS", desc: "Суммарно на 4 депозита", wager: "x25" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Кирилл", rating: 4, text: "Турниры каждую неделю с приличными призами. Класс!", date: "5 дней назад" }]
  },
  {
    id: 21, name: "BOOI!", slug: "booi",
    link: "https://booipromo1.com/alt/booi_wheel_v2_ru/?e30cca41664b8489bc583c90ae60bd2e",
    rating: 4.7, bonus: "200% на первый депозит", minDeposit: "$20", wager: "x35",
    year: 2019, license: "Лицензия Curacao", tags: ["top"], payments: "Visa, МИР, Skrill, Neteller",
    description: "BOOI! — топ-казино с лицензией Curacao. Оператор Globonet B.V. / Netglobe Services Limited. Рейтинг 4.7/5. Приветственный бонус 200% на первый депозит, бездеп 50 FS за регистрацию.",
    features: ["Лицензия Curacao (Globonet B.V.)", "Рейтинг 4.7/5", "Бонус 200% на первый депозит", "Бездеп 50 FS при регистрации", "Skrill, Neteller, Visa/МИР", "Надёжный оператор с историей"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "200% на первый депозит", desc: "От $20", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "Сразу после регистрации", wager: "x30" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Автоматически", wager: "x10" },
    ],
    reviews: [{ name: "Людмила", rating: 5, text: "Лицензированное, проверенное. Бонусы отличные.", date: "Вчера" }]
  },
  {
    id: 22, name: "Get X", slug: "get-x",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 4.7, bonus: "360% на первые депозиты", minDeposit: "$10", wager: "x35",
    year: 2022, license: "Лицензия Curacao", tags: ["new"], payments: "Visa, МИР, Crypto, USDT",
    description: "Get X Casino — уникальные бонусы за подписку в Telegram и ВК. 360% на первые депозиты, до 50% каждые 3 дня для постоянных. GetX Премиум с эксклюзивными предложениями.",
    features: ["Бонус 100 от Telegram", "Бонус 50 от ВК", "До 50% каждые 3 дня", "360% на первые депозиты", "GetX Премиум", "Криптовалюты и USDT"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "360% на первые депозиты", desc: "На стартовые депозиты", wager: "x35" },
      { type: "telegram", title: "Telegram-бонус", value: "100 FS", desc: "За подписку на канал", wager: "x20" },
      { type: "vk", title: "ВК-бонус", value: "50 FS", desc: "За подписку на VK", wager: "x20" },
    ],
    reviews: [{ name: "Денис", rating: 4, text: "Для новичка идеально. Всё понятно, бонусы капают.", date: "1 неделю назад" }]
  },
  {
    id: 23, name: "Покердом", slug: "pokerdom",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 5.0, bonus: "1 000 FS + 100% на депозит + 100% покерный", minDeposit: "500 ₽", wager: "x35",
    year: 2014, license: "Лицензия Curacao", tags: ["top", "fast"], payments: "Visa, МИР, Skrill, Neteller, Crypto",
    description: "Покердом — лучшее казино и покер-рум в РФ с рейтингом 5.0. Динамические джекпоты, ежедневные турниры. Промокод POKERDOM7777 или VABANK для максимального бонуса. Мин. депозит 500 ₽.",
    features: ["Рейтинг 5.0/5", "Казино + покер-рум в одном", "Динамические джекпоты", "Ежедневные турниры", "Промокод POKERDOM7777", "Мин. депозит 500 ₽"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "1 000 FS + 100%", desc: "На первый депозит от 500 ₽", wager: "x30" },
      { type: "poker", title: "Покерный бонус", value: "100% до 50 000 ₽", desc: "На первый депозит в покер", wager: "x25" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Автоматически на счёт", wager: "x10" },
    ],
    reviews: [
      { name: "Иван", rating: 5, text: "Лучший покер-рум в РФ. Казино тоже на уровне!", date: "Вчера" },
      { name: "Наталья", rating: 5, text: "Турниры каждый день. Никогда не скучно!", date: "2 дня назад" }
    ]
  },
  {
    id: 24, name: "Mostbet", slug: "mostbet",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 4.6, bonus: "125% + 250 FS", minDeposit: "500 ₽", wager: "x35",
    year: 2009, license: "Лицензия Curacao", tags: ["top"], payments: "Visa, МИР, Piastrix, Crypto",
    description: "Mostbet — старейший бренд с 2009 года. Бездеп FS или free bet в Aviator. Приветственный бонус 125% + 250 FS. Срок активации бонуса 7 дней. Мин. депозит 500-15 000 ₽.",
    features: ["Работает с 2009 года", "Бездеп FS / free bet в Aviator", "Бонус 125% + 250 FS", "7 дней на активацию", "Казино + ставки на спорт", "Мин. депозит от 500 ₽"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "125% + 250 FS", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "FS в Aviator", desc: "Free bet или фриспины", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный", desc: "Автоматически", wager: "x10" },
    ],
    reviews: [{ name: "Олег", rating: 5, text: "Играю с 2009 года. За 15 лет ни разу не подвели.", date: "3 дня назад" }]
  },
  {
    id: 25, name: "SlotGames", slug: "slotgames",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 4.8, bonus: "100% + 100 FS", minDeposit: "$5", wager: "x35",
    year: 2021, license: "Лицензия Curacao", tags: ["fast"], payments: "Visa, МИР, Skrill",
    description: "SlotGames — рейтинг 4.8/5. Welcome package 400% + 213 FS, эксклюзивный бонус 70 FS. Выплаты до 45 минут — одни из самых быстрых. Промокод на 100 FS + 100% в The Dog House.",
    features: ["Рейтинг 4.8/5", "Выплаты до 45 минут", "Welcome 400% + 213 FS", "Эксклюзив 70 FS", "Промокод на 100 FS + 100%", "Мин. депозит $5"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 100 FS", desc: "На первый депозит от $5", wager: "x35" },
      { type: "deposit", title: "Welcome package", value: "400% + 213 FS", desc: "На несколько депозитов", wager: "x20" },
      { type: "exclusive", title: "Эксклюзив", value: "70 FS", desc: "Только для CAKATALOG", wager: "x30" },
    ],
    reviews: [{ name: "Евгений", rating: 5, text: "Любитель слотов найдёт здесь всё. Выплаты за 45 минут!", date: "Вчера" }]
  }
];
