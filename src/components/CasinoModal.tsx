import { useState } from "react";
import type { Casino } from "../data/casinos";
import { Logo } from "./Logo";

interface Props {
  casino: Casino;
  onClose: () => void;
}

type Tab = "overview" | "bonuses";

const iconMap: Record<string, string> = {
  welcome: "🎁", deposit: "📥", free: "🆓", cashback: "💰",
  crypto: "₿", telegram: "✈️", vk: "📱", exclusive: "💎", poker: "♠️",
};

const paymentIcons: Record<string, string> = {
  Visa: "💳", "МИР": "🟢", Crypto: "₿", USDT: "💰", TON: "💎",
  Skrill: "🔵", Neteller: "🟣", Piastrix: "🟠",
};

export default function CasinoModal({ casino, onClose }: Props) {
  const [tab, setTab] = useState<Tab>("overview");

  const stars = "★".repeat(Math.floor(casino.rating)) + (casino.rating % 1 >= 0.5 ? "★" : "");

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <Logo name={casino.name} size={80} />
          <div className="modal-title-section">
            <h2>{casino.name}</h2>
            <div className="modal-rating">
              <span className="stars" style={{ fontSize: 18, color: "var(--gold)" }}>{stars}</span>
              <span className="modal-score">{casino.rating}<span>/5</span></span>
            </div>
            <p className="modal-desc">{casino.description}</p>
          </div>
        </div>

        <div className="modal-tabs">
          <button className={`modal-tab${tab === "overview" ? " active" : ""}`} onClick={() => setTab("overview")}>Обзор</button>
          <button className={`modal-tab${tab === "bonuses" ? " active" : ""}`} onClick={() => setTab("bonuses")}>
            Бонусы <span className="modal-tab-count">{casino.bonuses.length}</span>
          </button>
        </div>

        <div className="modal-body">
          {tab === "overview" && (
            <div className="tab-content">
              <div className="modal-info-grid">
                <div className="modal-info-item">
                  <span className="mii-icon">💰</span>
                  <span className="mii-label">Мин. депозит</span>
                  <span className="mii-value">{casino.minDeposit}</span>
                </div>
                <div className="modal-info-item">
                  <span className="mii-icon">📅</span>
                  <span className="mii-label">Основано</span>
                  <span className="mii-value">{casino.year}</span>
                </div>
                <div className="modal-info-item">
                  <span className="mii-icon">🎰</span>
                  <span className="mii-label">Игры</span>
                  <span className="mii-value">5000+</span>
                </div>
                <div className="modal-info-item">
                  <span className="mii-icon">🌐</span>
                  <span className="mii-label">Язык</span>
                  <span className="mii-value">RU</span>
                </div>
                <div className="modal-info-item">
                  <span className="mii-icon">⚡</span>
                  <span className="mii-label">Вейджер</span>
                  <span className="mii-value">{casino.wager}</span>
                </div>
                <div className="modal-info-item">
                  <span className="mii-icon">🛡️</span>
                  <span className="mii-label">Лицензия</span>
                  <span className="mii-value">{casino.license !== "—" ? casino.license : "—"}</span>
                </div>
              </div>

              <div className="modal-payments">
                <div className="mp-label">Способы оплаты</div>
                <div className="mp-chips">
                  {casino.payments.split(", ").map((p) => (
                    <span key={p} className="mp-chip">{paymentIcons[p] || "💳"} {p}</span>
                  ))}
                </div>
              </div>

              <h3 className="modal-section-title">Преимущества</h3>
              <div className="modal-features">
                {casino.features.map((f, i) => (
                  <div key={i} className="mf-item">
                    <span className="mf-check">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <h3 className="modal-section-title">Отзывы</h3>
              <div className="modal-reviews">
                {casino.reviews.map((r, i) => (
                  <div key={i} className="review-card">
                    <div className="review-top">
                      <span className="review-name">{r.name}</span>
                      <span className="review-stars">{"★".repeat(r.rating)}</span>
                      <span className="review-date">{r.date}</span>
                    </div>
                    <p className="review-text">"{r.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "bonuses" && (
            <div className="tab-content">
              <div className="bonus-promo-banner">
                <div>
                  <div className="bpb-label">Промокод</div>
                  <div className="bpb-code">CAKATALOG</div>
                </div>
                <button className="btn btn-primary" style={{ padding: "8px 16px", fontSize: 12 }}
                  onClick={() => { navigator.clipboard.writeText("CAKATALOG"); }}>
                  Копировать
                </button>
              </div>

              <div className="bonus-list">
                {casino.bonuses.map((b, i) => (
                  <div key={i} className="bonus-row-mod">
                    <span className={`bonus-tag tag-${b.type}`}>{iconMap[b.type] || "🎯"} {b.title}</span>
                    <div className="bonus-row-info">
                      <div className="bri-value">{b.value}</div>
                      <div className="bri-desc">{b.desc}</div>
                      {b.wager && <div className="bri-wag">Вейджер: {b.wager}</div>}
                    </div>
                    <a href={casino.link} target="_blank" className="btn btn-primary btn-sm">Получить</a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-cta">
          <a href={casino.link} target="_blank" className="btn btn-primary btn-glow">
            🎁 Получить бонус в {casino.name}
          </a>
          <button className="btn btn-outline" onClick={onClose}>✕ Закрыть</button>
        </div>
      </div>
    </div>
  );
}
