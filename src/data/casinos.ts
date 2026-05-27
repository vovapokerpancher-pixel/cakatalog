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
    description: "Fugu Casino — казино с 10 000+ игр от Amatic и других провайдеров. Бездепозитный бонус 50-100 FS за регистрацию.",
    features: ["10 000+ игр", "Провайдеры Amatic и другие", "Бездеп 50-100 FS", "Лицензия Curacao"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "125% на первый депозит", desc: "На первый депозит", wager: "x35" },
      { type: "deposit", title: "На второй депозит", value: "500 FS", desc: "На второй депозит", wager: "x30" },
      { type: "deposit", title: "На третий депозит", value: "125%", desc: "На третий депозит", wager: "x25" },
    ],
    reviews: [
      { name: "Александр", rating: 3, text: "Неплохой выбор игр, но бонусы так себе.", date: "Вчера" },
      { name: "Мария", rating: 4, text: "Много игр, но интерфейс устаревший.", date: "2 дня назад" }
    ]
  },
  {
    id: 2, name: "Daddy", slug: "daddy",
    link: "https://molten-emberpath.com/slgrevwsw",
    rating: 4.5, bonus: "Индивидуальные условия", minDeposit: "Низкий", wager: "x35",
    year: 2021, license: "—", tags: ["exclusive", "fast"], payments: "Visa, МИР, USDT, Crypto",
    description: "Daddy Casino — казино с быстрой верификацией (2-3 часа) и моментальными выплатами на криптовалюту. Индивидуальный подход к каждому игроку.",
    features: ["Быстрая верификация 2-3 часа", "Быстрые выплаты на крипту", "Индивидуальные бонусы", "До 100 FS по промокоду"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "Индивидуальные условия", desc: "На первый депозит", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "До 100 FS", desc: "По промокоду", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Игорь", rating: 5, text: "Верификация за 2 часа — это рекорд. Выплаты мгновенные!", date: "3 дня назад" }]
  },
  {
    id: 3, name: "Joy Casino", slug: "joy-casino",
    link: "https://52288.call2me.pro/ru/registration?partner=p52288p3326933p5988",
    rating: 4.7, bonus: "200% до $50 + 200 FS", minDeposit: "1", wager: "x20",
    year: 2014, license: "Есть", tags: ["top", "fast"], payments: "Visa, МИР, Crypto, Skrill",
    description: "Joy Casino — один из старейших брендов с отличной репутацией. Приветственный бонус 200% до $50 + 200 FS, бездеп до 200 FS, вейджер x20 и срок действия 70 дней.",
    features: ["Старейший бренд", "Бездеп до 200 FS", "Вейджер x20", "Срок бонуса 70 дней"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "200% до $50 + 200 FS", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "До 200 FS", desc: "За регистрацию", wager: "x30" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [
      { name: "Сергей", rating: 5, text: "Играю здесь годами. Всегда честно и надежно.", date: "Вчера" },
      { name: "Анна", rating: 4, text: "Отличные слоты, но хотелось бы больше live-игр.", date: "5 дней назад" }
    ]
  },
  {
    id: 4, name: "JOOZ", slug: "jooz",
    link: "https://jozz-promo1.com/alt/jozz10_ru/?46c7a198427be61f57fa1e50e6c4c6ea",
    rating: 4.7, bonus: "100% до 50 000 + 95 FS", minDeposit: "—", wager: "x35",
    year: 2019, license: "—", tags: ["fast"], payments: "Visa, МИР, Piastrix",
    description: "JOOZ (Jozz) — казино с рейтингом 4.7/5. Кешбэк до 10%, турниры с призами 750 USD и бездепозитный бонус 50 FS по промокоду. Максимальный бонус $1 000.",
    features: ["Кешбэк до 10%", "Турниры с призами $750", "Бездеп 50 FS по промокоду", "Макс. бонус $1 000"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% до 50 000 + 95 FS", desc: "На первый депозит", wager: "x35" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "По промокоду", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Дмитрий", rating: 5, text: "Кешбэк радует, турниры интересные. Одно из лучших!", date: "2 дня назад" }]
  },
  {
    id: 5, name: "Play Fortuna", slug: "play-fortuna",
    link: "https://fortuna-promo.com/alt/pf_wheel_of_fortune_ru/?9555eb5ac06da8bcf090a2cbdd91067b",
    rating: 4.6, bonus: "100% до $ + до 50 FS", minDeposit: "—", wager: "x25",
    year: 2013, license: "Есть", tags: ["top", "exclusive"], payments: "Visa, МИР, Crypto",
    description: "Play Fortuna — проверенное казино с хорошей репутацией. Welcome package до $1000 + 200 FS, бездеп 50 FS при регистрации. Вейджер x25.",
    features: ["Welcome package $1000 + 200 FS", "Бездеп 50 FS", "Вейджер x25", "Лицензировано"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% до $ + до 50 FS", desc: "На первый депозит", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "При регистрации", wager: "x35" },
      { type: "deposit", title: "Welcome package", value: "До $1000 + 200 FS", desc: "На первые депозиты", wager: "x20" },
    ],
    reviews: [{ name: "Елена", rating: 5, text: "Лучшее казино для новичков, простые условия отыгрыша.", date: "Вчера" }]
  },
  {
    id: 6, name: "BEEF", slug: "beef",
    link: "https://megaways6.com/c1af8b10d",
    rating: 4.0, bonus: "$900 + 600 FS", minDeposit: "1 000 ₽", wager: "x35",
    year: 2022, license: "—", tags: ["new"], payments: "Visa, МИР, Crypto",
    description: "BEEF Casino — новое казино с регистрацией через Google или Telegram. Вейджер выше среднего (35x+). Бездепозитный бонус 50 FS за регистрацию.",
    features: ["Регистрация через Google/Telegram", "Бездеп 50 FS", "$900 + 600 FS приветственный", "Вейджер 35x+"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "$900 + 600 FS", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "За регистрацию", wager: "x30" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Максим", rating: 4, text: "Крутые слоты, удобно через Telegram заходить.", date: "1 неделю назад" }]
  },
  {
    id: 7, name: "Casino-X", slug: "casino-x",
    link: "https://52288.gameshere.xyz/ru/registration?partner=p52288p3326934pb1c1",
    rating: 4.6, bonus: "200% + 100% + 50% + 25% на депозиты", minDeposit: "$5", wager: "x35",
    year: 2015, license: "Есть", tags: ["top", "fast"], payments: "Visa, МИР, Skrill, Neteller",
    description: "Casino-X — премиальное казино с многоуровневым приветственным бонусом (200%+100%+50%+25%). Кешбэк до 15% для VIP, быстрые выводы через крипто, бездеп $25/10-20 FS по промокодам.",
    features: ["Многоуровневый бонус 200%+100%+50%+25%", "Кешбэк до 15% для VIP", "Быстрый вывод через крипто", "Бездеп $25/10-20 FS"],
    bonuses: [
      { type: "welcome", title: "Приветственный пакет", value: "200% + 100% + 50% + 25%", desc: "На несколько депозитов", wager: "x35" },
      { type: "free", title: "Бездепозитный", value: "$25, 10-20 FS", desc: "По промокодам", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "До 15%", desc: "Для VIP-игроков", wager: "x10" },
    ],
    reviews: [{ name: "Ольга", rating: 5, text: "Проверено годами. VIP-кешбэк 15% — лучший на рынке.", date: "3 дня назад" }]
  },
  {
    id: 8, name: "Flagman", slug: "flagman",
    link: "https://flagmanway1.com/c1c531713",
    rating: 4.5, bonus: "150% до €600 + 100 FS", minDeposit: "€20", wager: "x35",
    year: 2021, license: "Есть", tags: ["exclusive"], payments: "Visa, МИР, Crypto",
    description: "Flagman — казино с 4-уровневой программой лояльности (IRON, SILVER, PLATINUM, DIAMOND). Welcome package 225% до €900 + 500 FS. Бездепозитный бонус 50-100 FS.",
    features: ["4 уровня лояльности: IRON/PLATINUM/DIAMOND", "Welcome package 225% до €900 + 500 FS", "Бездеп 50-100 FS", "Вейджер 40x"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "150% до €600 + 100 FS", desc: "На первый депозит", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "50-100 FS", desc: "За регистрацию", wager: "x35" },
      { type: "deposit", title: "Welcome package", value: "225% до €900 + 500 FS", desc: "На первые депозиты", wager: "x30" },
    ],
    reviews: [{ name: "Артем", rating: 5, text: "Система уровней затягивает. Хочу DIAMOND!", date: "4 дня назад" }]
  },
  {
    id: 9, name: "CatCasino", slug: "catcasino",
    link: "https://catchthecatthree.com/sr9mvw3hd",
    rating: 4.5, bonus: "100% + 100 FS до C$300", minDeposit: "—", wager: "x30",
    year: 2024, license: "—", tags: ["new"], payments: "Visa, МИР, Piastrix, Crypto",
    description: "CatCasino — новое казино (2024) с большим количеством бонусов и низким вейджером. Промокод PROMO101 на 100 FS без депозита, PROMO111 на 75% + 100 FS.",
    features: ["Новое 2024", "Бонусы с низким вейджером", "Промокод PROMO101 (100 FS)", "Промокод PROMO111 (75% + 100 FS)"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 100 FS до C$300", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "100 FS", desc: "По промокоду PROMO101", wager: "x30" },
      { type: "deposit", title: "На депозит", value: "75% + 100 FS", desc: "По промокоду PROMO111", wager: "x25" },
    ],
    reviews: [{ name: "Ксения", rating: 5, text: "Новое казино с отличными бонусами. Низкий вейджер — редкость!", date: "Вчера" }]
  },
  {
    id: 10, name: "Ton Play", slug: "ton-play",
    link: "https://t.me/tonplay?start=hUWcg4b88IyC15",
    rating: 4.5, bonus: "375% + 200 FS на первые 4 депозита", minDeposit: "—", wager: "x35",
    year: 2023, license: "—", tags: ["new", "crypto"], payments: "TON, USDT, Crypto",
    description: "Ton Play — крипто-казино на TON Coin. Приветственный бонус 375% + 200 FS на 4 депозита. Ежедневно до $777 в Ducky Wheel. +7% ежедневно в TON.",
    features: ["Казино на TON Coin", "Ducky Wheel до $777 ежедневно", "+7% ежедневно в TON", "375% + 200 FS на 4 депозита"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "375% + 200 FS", desc: "На первые 4 депозита", wager: "x35" },
      { type: "free", title: "Ducky Wheel", value: "До $777 ежедневно", desc: "Колесо удачи", wager: "x35" },
      { type: "crypto", title: "Бонус в TON", value: "+7% ежедневно", desc: "На депозит в TON", wager: "x25" },
    ],
    reviews: [{ name: "Влад", rating: 5, text: "TON платежи работают мгновенно. Ducky Wheel каждый день!", date: "2 дня назад" }]
  },
  {
    id: 11, name: "R7 Casino", slug: "r7-casino",
    link: "https://cosmos-flight.com/sugcijrr9",
    rating: 3.8, bonus: "100% + 210 FS", minDeposit: "€1.5", wager: "x35",
    year: 2022, license: "—", tags: ["fast"], payments: "Visa, МИР, Crypto",
    description: "R7 Casino — ~3 000 игр от 53+ провайдеров. Welcome package 300% + 225 FS на 3 депозита. Минимальный депозит всего €1.5, рейтинг 3.8-3.9/5.",
    features: ["~3 000 игр", "53+ провайдера", "Мин. депозит €1.5", "Welcome 300% + 225 FS на 3 депозита"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 210 FS", desc: "На первый депозит", wager: "x30" },
      { type: "deposit", title: "Welcome package", value: "300% + 225 FS", desc: "На первые 3 депозита", wager: "x20" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Никита", rating: 4, text: "Много провайдеров, есть из чего выбрать.", date: "Вчера" }]
  },
  {
    id: 12, name: "Kent", slug: "kent",
    link: "https://holo-neonrun.com/saikakxwa",
    rating: 4.5, bonus: "50% до €150 + 50 FS", minDeposit: "€5", wager: "x45",
    year: 2021, license: "Лицензировано", tags: ["fast"], payments: "Visa, МИР, Piastrix",
    description: "Kent Casino — лицензированное казино. Альтернативный бонус 100% до 500 EUR + 40 FS. Промокоды: PROMO101 (100 FS без депа), PROMO111 (100% + 100 FS). Вейджер 45x.",
    features: ["Лицензировано", "Мин. депозит €5", "Промокод PROMO101 (100 FS)", "Альтернатива: 100% до 500 EUR + 40 FS"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "50% до €150 + 50 FS", desc: "На первый депозит", wager: "x25" },
      { type: "deposit", title: "Альтернатива", value: "100% до 500 EUR + 40 FS", desc: "На первый депозит", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "100 FS", desc: "По промокоду PROMO101", wager: "x35" },
    ],
    reviews: [{ name: "Алиса", rating: 5, text: "VIP-обслуживание на высшем уровне. Спасибо!", date: "3 дня назад" }]
  },
  {
    id: 13, name: "Kometa Casino", slug: "kometa",
    link: "https://ignited-lavapass.com/srglifi7d",
    rating: 4.5, bonus: "255% до 45 000 + до 500 FS", minDeposit: "—", wager: "x35",
    year: 2023, license: "—", tags: ["new"], payments: "Visa, МИР, Crypto",
    description: "Kometa Casino — быстрые выплаты, кешбэк до 30 000 и VIP-клуб. Приветственный бонус 255% до 45 000 + до 500 FS.",
    features: ["Быстрые выплаты", "Кешбэк до 30 000", "VIP-клуб", "255% до 45 000 + 500 FS"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "255% до 45 000 + до 500 FS", desc: "На первый депозит", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "До 30 000", desc: "Еженедельно", wager: "x8" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Павел", rating: 4, text: "Турниры с крутыми призами. Захожу каждый день.", date: "1 неделю назад" }]
  },
  {
    id: 14, name: "Gama", slug: "gama",
    link: "https://preesiader.com/svarwcffk",
    rating: 4.5, bonus: "100% + 100 FS", minDeposit: "€15", wager: "x45",
    year: 2022, license: "—", tags: ["fast"], payments: "Visa, МИР, Skrill",
    description: "Gama Casino — welcome package до €$1500 + 450 FS. Вейджер 45x, максимальный кэшаут 15x-20x от суммы бонуса. Минимальный депозит €15.",
    features: ["Welcome package €1500 + 450 FS", "Мин. депозит €15", "Макс. кэшаут 15x-20x", "Вейджер 45x"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 100 FS", desc: "На первый депозит", wager: "x30" },
      { type: "deposit", title: "Welcome package", value: "До €$1500 + 450 FS", desc: "На первые депозиты", wager: "x20" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Роман", rating: 4, text: "Удобно и казино, и ставки в одном месте.", date: "5 дней назад" }]
  },
  {
    id: 15, name: "Arkada", slug: "arkada",
    link: "https://prismed-cyberlane.com/sxb1sdfna",
    rating: 4.5, bonus: "150% на 1-й депозит до 2100 FS", minDeposit: "—", wager: "x35",
    year: 2021, license: "—", tags: ["exclusive"], payments: "Visa, МИР, Crypto",
    description: "Arkada — казино с бездепозитным бонусом 100 FS по промокоду (BETSLIVE или PROMO101). Приветственный бонус 150% на 1-й депозит, макс. до 2100 FS.",
    features: ["Бездеп 100 FS по промокоду", "150% на 1-й депозит", "Макс. до 2100 FS", "Промокоды BETSLIVE/PROMO101"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "150% на 1-й депозит", desc: "Макс. до 2100 FS", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "100 FS", desc: "По промокоду BETSLIVE или PROMO101", wager: "x30" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Светлана", rating: 5, text: "Достижения добавляют интереса. Крутая идея!", date: "2 дня назад" }]
  },
  {
    id: 16, name: "1WIN", slug: "1win",
    link: "https://one-vv893.com/?open=register&p=f6hm",
    rating: 4.6, bonus: "500% до $1 025 (или до $700)", minDeposit: "150 ₽", wager: "x35",
    year: 2016, license: "Крипто-казино", tags: ["top", "exclusive"], payments: "Visa, МИР, Crypto, Skrill",
    description: "1WIN — гигант индустрии с бонусом 500% до $1 025. Распределение: 200% на 1-й + последующие. Бездеп до 70 FS. Крипто-интеграция, приложение работает лучше сайта.",
    features: ["500% до $1 025", "Крипто-интеграция", "Приложение лучше сайта", "Бездеп до 70 FS"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "500% до $1 025", desc: "На первый депозит", wager: "x35" },
      { type: "deposit", title: "Распределение", value: "200% (1-й) + последующие", desc: "На несколько депозитов", wager: "x30" },
      { type: "free", title: "Бездепозитный", value: "До 70 FS", desc: "За регистрацию", wager: "x35" },
    ],
    reviews: [
      { name: "Григорий", rating: 5, text: "500% бонус реально работает! Забрал крупный куш.", date: "Вчера" },
      { name: "Татьяна", rating: 5, text: "Огромный выбор всего. Не соскучишься.", date: "3 дня назад" }
    ]
  },
  {
    id: 17, name: "Ramen Bet", slug: "ramen-bet",
    link: "https://52288.call2me.xyz/ru/registration?partner=p52288p3326935p1669",
    rating: 3.6, bonus: "200% + 250 FS", minDeposit: "€10", wager: "x35",
    year: 2022, license: "—", tags: ["new"], payments: "Visa, МИР, Piastrix",
    description: "Ramen Bet — рейтинг 63.4/100 (АРС), 60/100 (пользователи). Welcome package до €2000. Варианты: 200% (€10-49), 150% (€50-499). VIP Club, weekly free spins, cashback.",
    features: ["Welcome package до €2000", "VIP Club", "Weekly free spins", "Кешбэк"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "200% + 250 FS", desc: "На первый депозит (€10-49)", wager: "x30" },
      { type: "deposit", title: "Вариант", value: "150%", desc: "На депозит €50-499", wager: "x25" },
      { type: "deposit", title: "Welcome package", value: "До €2000", desc: "На первые депозиты", wager: "x20" },
    ],
    reviews: [{ name: "Юрий", rating: 4, text: "Интересные азиатские слоты, необычный опыт.", date: "4 дня назад" }]
  },
  {
    id: 18, name: "7K Casino", slug: "7k-casino",
    link: "https://7kpromotionsfastpartners.com/l/6999fce75550ecf6a30685f2",
    rating: 4.5, bonus: "827% до 320 000 + 527 FS", minDeposit: "—", wager: "x35",
    year: 2023, license: "Нет в РФ", tags: ["new"], payments: "Visa, МИР, Crypto",
    description: "7K Casino — гигантский бонус 827% до 320 000 + 527 FS. Быстрые выплаты, хорошие бонусы. Недостатки: сложный отыгрыш, долгий вывод.",
    features: ["827% до 320 000 + 527 FS", "Быстрые выплаты", "Недостатки: сложный отыгрыш", "Нет лицензии в РФ"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "827% до 320 000 + 527 FS", desc: "На первый депозит", wager: "x25" },
      { type: "deposit", title: "На депозит", value: "827% до 320 000 + 527 FS", desc: "На второй депозит", wager: "x25" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Марина", rating: 4, text: "Бонус огромный, но отыгрыш сложноват.", date: "Вчера" }]
  },
  {
    id: 19, name: "Jetton", slug: "jetton",
    link: "https://t.me/tonplay?start=hUWcg4b88IyC15",
    rating: 4.5, bonus: "100% + 100 FS", minDeposit: "$10", wager: "x35",
    year: 2023, license: "—", tags: ["new", "crypto"], payments: "TON, USDT, Crypto",
    description: "Jetton Games Casino — 6000+ игр. Welcome package до 200% на 4 депозита + 250 FS. Бездеп до $1000 в Lucky Wheel. Минимальный депозит $10.",
    features: ["6 000+ игр", "Lucky Wheel до $1000", "Welcome 200% на 4 депозита + 250 FS", "Мин. депозит $10"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 100 FS", desc: "На первый депозит", wager: "x35" },
      { type: "free", title: "Lucky Wheel", value: "До $1000", desc: "Бездепозитный бонус", wager: "x35" },
      { type: "deposit", title: "Welcome package", value: "До 200% на 4 депозита + 250 FS", desc: "На первые 4 депозита", wager: "x30" },
    ],
    reviews: [{ name: "Андрей", rating: 5, text: "TON кошелек + Jetton = идеальная комбинация.", date: "3 дня назад" }]
  },
  {
    id: 20, name: "Lucky Bear", slug: "lucky-bear",
    link: "https://t.me/Salvexio_bot/app?startapp=27yH5W",
    rating: 4.0, bonus: "360% на 4 депозита + 250 FS", minDeposit: "—", wager: "x35",
    year: 2023, license: "—", tags: ["new", "crypto"], payments: "Crypto, TON",
    description: "Lucky Bear — $4 000 каждую неделю в турнирах. Приветственный бонус 360% на 4 депозита + 250 FS. Нет публичных welcome бонусов по некоторым данным.",
    features: ["Турниры $4 000 еженедельно", "360% на 4 депозита + 250 FS", "Telegram-казино"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "360% на 4 депозита + 250 FS", desc: "На первые 4 депозита", wager: "x30" },
      { type: "deposit", title: "На депозит", value: "360% на 4 депозита + 250 FS", desc: "На второй депозит", wager: "x25" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Кирилл", rating: 4, text: "Турниры каждую неделю с приличными призами.", date: "5 дней назад" }]
  },
  {
    id: 21, name: "BOOI!", slug: "booi",
    link: "https://booipromo1.com/alt/booi_wheel_v2_ru/?e30cca41664b8489bc583c90ae60bd2e",
    rating: 4.7, bonus: "200% на первый депозит", minDeposit: "$20", wager: "x35",
    year: 2019, license: "Curacao", tags: ["top"], payments: "Visa, МИР, Skrill, Neteller",
    description: "BOOI! — казино с рейтингом 4.7/5. Лицензия Curacao, оператор Globonet B.V. / Netglobe Services Limited. Приветственный бонус 200%, бездеп 50 FS за регистрацию. Мин. депозит $20.",
    features: ["Лицензия Curacao", "Рейтинг 4.7/5", "200% на первый депозит", "Бездеп 50 FS"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "200% на первый депозит", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "50 FS", desc: "За регистрацию", wager: "x30" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Людмила", rating: 5, text: "Лицензированное, надежное, бонусы отличные.", date: "Вчера" }]
  },
  {
    id: 22, name: "Get X", slug: "get-x",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 4.7, bonus: "360% на первые депозиты", minDeposit: "—", wager: "x35",
    year: 2022, license: "—", tags: ["new"], payments: "Visa, МИР, Crypto",
    description: "Get X Casino (GetX) — рейтинг 4.7/5. Бонусы: 100 от Telegram, 50 от ВК, до 50% каждые 3 дня. GetX Премиум с частыми бонусами.",
    features: ["Бонус 100 от Telegram", "Бонус 50 от ВК", "До 50% каждые 3 дня", "GetX Премиум"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "360% на первые депозиты", desc: "На первые депозиты", wager: "x35" },
      { type: "telegram", title: "Telegram-бонус", value: "100", desc: "Бонус от Telegram", wager: "x20" },
      { type: "vk", title: "ВК-бонус", value: "50", desc: "Бонус от ВК", wager: "x20" },
    ],
    reviews: [{ name: "Денис", rating: 4, text: "Для новичка — идеально. Все понятно с первого взгляда.", date: "1 неделю назад" }]
  },
  {
    id: 23, name: "Покердом", slug: "pokerdom",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 5.0, bonus: "1 000 FS + 100% на депозит + 100% покерный", minDeposit: "500 ₽", wager: "x35",
    year: 2014, license: "Есть", tags: ["top", "fast"], payments: "Visa, МИР, Skrill, Neteller, Crypto",
    description: "Покердом — рейтинг 5.0. Казино и покер в одном месте. Динамические джекпоты. Промокоды: POKERDOM7777 или VABANK. Мин. депозит 500 ₽.",
    features: ["Рейтинг 5.0/5", "Казино + Покер", "Динамические джекпоты", "Промокод POKERDOM7777"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "1 000 FS + 100% на депозит + 100% покерный", desc: "На первый депозит", wager: "x30" },
      { type: "poker", title: "Покерный бонус", value: "100%", desc: "Покерный бонус", wager: "x25" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [
      { name: "Иван", rating: 5, text: "Лучший покер-рум в РФ. Казино тоже на уровне.", date: "Вчера" },
      { name: "Наталья", rating: 5, text: "Турниры каждый день. Никогда не скучно.", date: "2 дня назад" }
    ]
  },
  {
    id: 24, name: "Mostbet", slug: "mostbet",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 4.6, bonus: "125% + 250 FS", minDeposit: "10-20 EUR", wager: "x35",
    year: 2009, license: "Есть", tags: ["top"], payments: "Visa, МИР, Piastrix, Crypto",
    description: "Mostbet — один из старейших брендов (с 2009). Бездепозитный бонус: Free spins или free bet в Aviator. Срок активации 7 дней. Мин. депозит для бонуса 500-15 000 ₽.",
    features: ["С 2009 года", "Бездеп FS/free bet в Aviator", "7 дней на активацию", "Мин. депозит для бонуса 500-15 000 ₽"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "125% + 250 FS", desc: "На первый депозит", wager: "x25" },
      { type: "free", title: "Бездепозитный", value: "FS или free bet в Aviator", desc: "За регистрацию", wager: "x35" },
      { type: "cashback", title: "Кешбэк", value: "Еженедельный кешбэк", desc: "Каждую неделю", wager: "x10" },
    ],
    reviews: [{ name: "Олег", rating: 4, text: "Проверенный бренд. Все честно и прозрачно.", date: "3 дня назад" }]
  },
  {
    id: 25, name: "SlotGames", slug: "slotgames",
    link: "https://fugu-way-four.com/c8e63cbcd",
    rating: 4.8, bonus: "100% + 100 FS", minDeposit: "—", wager: "x35",
    year: 2021, license: "—", tags: ["fast"], payments: "Visa, МИР, Skrill",
    description: "SlotGames — рейтинг 4.8/5. Welcome package 400% + 213 FS. Эксклюзивный бонус 70 FS. Быстрые выплаты до 45 минут. Промокод: 100 FS + 100% в The Dog House.",
    features: ["Рейтинг 4.8/5", "Welcome 400% + 213 FS", "Выплаты до 45 минут", "Эксклюзив 70 FS"],
    bonuses: [
      { type: "welcome", title: "Приветственный", value: "100% + 100 FS", desc: "На первый депозит", wager: "x35" },
      { type: "deposit", title: "Welcome package", value: "400% + 213 FS", desc: "На первые депозиты", wager: "x20" },
      { type: "exclusive", title: "Эксклюзив", value: "70 FS", desc: "Эксклюзивный бонус", wager: "x30" },
    ],
    reviews: [{ name: "Евгений", rating: 5, text: "Любитель слотов найдет здесь все что угодно.", date: "Вчера" }]
  }
];
