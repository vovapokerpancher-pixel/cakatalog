import { useState, useMemo, useEffect } from "react";
import { casinos, type Casino } from "./data/casinos";
import FortuneWheel from "./components/FortuneWheel";
import CasinoCard from "./components/CasinoCard";
import CasinoModal from "./components/CasinoModal";
import BonusesSection from "./components/BonusesSection";
import ParticleBackground from "./components/ParticleBackground";

const INITIAL_SHOWN = 8;

export default function App() {
  const [selected, setSelected] = useState<Casino | null>(null);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const [shown, setShown] = useState(INITIAL_SHOWN);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    let list = filter === "all" ? casinos : casinos.filter((c) => c.tags.includes(filter));
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "bonus") {
      list.sort((a, b) => {
        const an = parseInt(a.bonus.match(/\d+/)?.[0] || "0");
        const bn = parseInt(b.bonus.match(/\d+/)?.[0] || "0");
        return bn - an;
      });
    } else if (sort === "new") list.sort((a, b) => b.year - a.year);
    return list;
  }, [filter, sort]);

  const visibleCasinos = useMemo(() => filtered.slice(0, shown), [filtered, shown]);

  useEffect(() => { setShown(INITIAL_SHOWN); }, [filter, sort]);

  return (
    <div className="App">
      <ParticleBackground />
      <div className="content-wrapper">
        {/* Header */}
        <header id="header">
          <div className="header-inner">
            <a href="#" className="logo">
              <img src="/cakatalog-logo.png" alt="CAKATALOG" className="logo-img" />
            </a>
            <nav>
              <a href="#casinos" className="active">Казино</a>
              <a href="#bonuses">Бонусы</a>
              <a href="#faq">FAQ</a>
            </nav>
            <div className="header-actions">
              <button className="btn btn-outline">18+</button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Лучшие онлайн казино<br />
              <span className="gradient-text">в одном каталоге</span>
            </h1>
            <p>
              Выбирай проверенные казино, получай эксклюзивные бонусы и играй с удовольствием.
              Только топовые бренды с честной репутацией.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">25+</span>
                <span className="stat-label">Казино в каталоге</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">500K+</span>
                <span className="stat-label">Игроков с нами</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Проверенные казино</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <a
                href="#casinos"
                className="btn btn-primary btn-glow"
                style={{ padding: "16px 32px", fontSize: 16 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("casinos")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Смотреть рейтинг →
              </a>
            </div>
          </div>

          {/* Fortune Wheel from cakatalog (1).html */}
          <FortuneWheel />
        </section>

        {/* Features bar */}
        <section className="features-bar">
          {[
            { icon: "🛡️", title: "Только проверенные казино", desc: "Мы проверяем каждое казино" },
            { icon: "🎁", title: "Эксклюзивные бонусы", desc: "Только для наших игроков" },
            { icon: "⭐", title: "Эксклюзивный промокод", desc: "CAKATALOG для всех" },
            { icon: "📈", title: "Актуальные рейтинги", desc: "Обновляем ежедневно" },
          ].map((f, i) => (
            <div key={i} className={`feature-item fade-in stagger-${i + 1}`}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-text">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Filters */}
        <section id="casinos" className="filters-section">
          <div className="filters-header">
            <h2 className="section-title">
              Топ онлайн казино
              <span className="badge" style={{ background: "var(--accent)", color: "#000" }}>2026</span>
            </h2>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <div className="filters-group">
                {["all", "top", "exclusive", "new", "fast"].map((f) => (
                  <button
                    key={f}
                    className={`filter-btn${filter === f ? " active" : ""}`}
                    onClick={() => setFilter(f)}
                  >
                    {f === "all" ? "Все" : f === "top" ? "Топ" : f === "exclusive" ? "Эксклюзив" : f === "new" ? "Новинки" : "Быстрые выплаты"}
                  </button>
                ))}
              </div>
              <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="default">По умолчанию</option>
                <option value="rating">По рейтингу</option>
                <option value="bonus">По бонусу</option>
                <option value="new">По новизне</option>
              </select>
            </div>
          </div>
        </section>

        {/* Casino Grid */}
        <section className="casino-grid" id="casinoGrid">
          {visibleCasinos.map((c, i) => (
            <CasinoCard key={c.id} casino={c} index={i} onOpen={setSelected} />
          ))}
        </section>
        {shown < filtered.length && (
          <div className="show-more-wrap">
            <button className="btn btn-outline show-more-btn" onClick={() => setShown((s) => s + 8)}>
              Показать ещё ({filtered.length - shown})
            </button>
          </div>
        )}

        {/* Bonuses Section */}
        <BonusesSection />

        {/* FAQ */}
        <section id="faq" className="faq-section">
          <h2 className="section-title" style={{ marginBottom: 32 }}>Часто задаваемые вопросы</h2>
          <div className="faq-grid">
            {[
              { q: "Как выбрать надежное онлайн казино?", a: "Обращайте внимание на лицензию, репутацию, скорость выплат и отзывы игроков. В нашем каталоге представлены только проверенные казино." },
              { q: "Какие бонусы можно получить?", a: "Большинство казино предлагают приветственные бонусы на первый депозит, фриспины, кешбэк и программы лояльности." },
              { q: "Как быстро выводятся деньги?", a: "Криптовалюта и электронные кошельки — от нескольких минут до часа. Банковские карты — до 3 рабочих дней." },
              { q: "Нужна ли верификация?", a: "Да, для вывода крупных сумм требуется верификация личности. Это стандартная процедура безопасности." },
              { q: "Можно ли играть с телефона?", a: "Все казино из нашего каталога имеют мобильные версии сайтов или приложения для iOS и Android." },
              { q: "Какая минимальная сумма депозита?", a: "Минимальный депозит варьируется от 100 до 1000 рублей в зависимости от казино." },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-inner">
            <div>
              <div className="footer-brand"><span style={{ color: "var(--accent)" }}>CAKA</span>LOG</div>
              <p className="footer-desc">Лучший каталог онлайн-казино. Только проверенные бренды, честные отзывы и эксклюзивные бонусы.</p>
              <div className="footer-social">
                <a href="#" className="social-link">TG</a>
                <a href="#" className="social-link">VK</a>
                <a href="#" className="social-link">YT</a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Навигация</h4>
              <ul>
                <li><a href="#">Казино</a></li>
                <li><a href="#">Бонусы</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Новости</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Информация</h4>
              <ul>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Правила</a></li>
                <li><a href="#">Конфиденциальность</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Поддержка</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Написать нам</a></li>
                <li><a href="#">Партнерская программа</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 20 }}>Будь в курсе</h4>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 16 }}>Подпишись на новости и получай лучшие бонусы</p>
              <div className="footer-newsletter">
                <input type="email" placeholder="Ваш email" />
                <button className="btn btn-primary" style={{ padding: "12px 20px" }}>Подписаться</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 CAKATALOG. Все права защищены.</span>
            <span style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span>18+ | Играйте ответственно</span>
              <div className="age-badge">18+</div>
            </span>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {selected && <CasinoModal casino={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
