import { useState } from "react";
import { casinos } from "../data/casinos";
import { Logo } from "./Logo";

const INITIAL = 10;

const iconMap: Record<string, string> = {
  welcome: "🎁",
  deposit: "📥",
  free: "🆓",
  cashback: "💰",
  crypto: "₿",
  telegram: "✈️",
  vk: "📱",
  exclusive: "💎",
  poker: "♠️",
};

export default function BonusesSection() {
  const [shown, setShown] = useState(INITIAL);

  const grouped = casinos.map((c) => ({ casino: c, bonuses: c.bonuses })).slice(0, shown);
  const total = casinos.length;

  return (
    <section className="bonuses-page" id="bonuses">
      <div className="bonuses-header">
        <div className="bonuses-title-block">
          <h2 className="section-title">
            Эксклюзивные бонусы
            <span className="promo-badge">CAKATALOG</span>
          </h2>
          <p className="bonuses-subtitle">
            Используй промокод <strong>CAKATALOG</strong> при регистрации
          </p>
        </div>
        <div className="promo-code-card">
          <span className="promo-label">ПРОМОКОД</span>
          <span className="promo-value">CAKATALOG</span>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigator.clipboard.writeText("CAKATALOG");
              const btn = document.activeElement as HTMLElement;
              if (btn) {
                const orig = btn.textContent;
                btn.textContent = "Скопировано!";
                setTimeout(() => { btn.textContent = orig; }, 1500);
              }
            }}
          >
            Копировать
          </button>
        </div>
      </div>

      <div className="bonus-grid">
        {grouped.map(({ casino, bonuses }) => (
          <div key={casino.id} className="bg-card">
            <div className="bg-top">
              <Logo name={casino.name} size={30} />
              <div className="bg-top-text">
                <div className="bg-name">{casino.name}</div>
                <div className="bg-promo">CAKATALOG</div>
              </div>
            </div>
            <div className="bg-bonuses">
              {bonuses.map((b, i) => (
                <div key={i} className="bg-bonus">
                  <span className="bg-bonus-icon">{iconMap[b.type] || "🎯"}</span>
                  <div className="bg-bonus-info">
                    <span className="bg-bonus-title">{b.title}</span>
                    <span className="bg-bonus-val">{b.value}</span>
                  </div>
                  <span className="bg-bonus-wag">{b.wager}</span>
                </div>
              ))}
            </div>
            <a href={casino.link} target="_blank" className="bg-btn">Забрать бонусы</a>
          </div>
        ))}
      </div>

      {shown < total && (
        <div className="show-more-wrap" style={{ marginBottom: 40 }}>
          <button className="btn btn-outline show-more-btn" onClick={() => setShown((s) => s + 15)}>
            Показать ещё ({total - shown})
          </button>
        </div>
      )}

      <div className="bonuses-faq">
        <div className="bonus-faq-item">
          <span>🎯</span>
          <div>
            <strong>Как активировать промокод?</strong>
            <p>Введи промокод <strong>CAKATALOG</strong> при регистрации в казино или в разделе "Бонусы"</p>
          </div>
        </div>
        <div className="bonus-faq-item">
          <span>⚡</span>
          <div>
            <strong>Почему через наш промокод выгоднее?</strong>
            <p>Мы договорились с казино об эксклюзивных условиях — увеличенный процент и больше фриспинов</p>
          </div>
        </div>
        <div className="bonus-faq-item">
          <span>🔒</span>
          <div>
            <strong>Это безопасно?</strong>
            <p>Да, промокод — это просто маркер партнёра. Твои данные и платежи остаются полностью защищёнными</p>
          </div>
        </div>
      </div>
    </section>
  );
}
