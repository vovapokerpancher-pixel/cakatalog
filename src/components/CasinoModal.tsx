import { useState } from "react";
import type { Casino } from "../data/casinos";
import { Logo } from "./Logo";

interface Props {
  casino: Casino;
  onClose: () => void;
}

type Tab = "overview" | "bonuses";

export default function CasinoModal({ casino, onClose }: Props) {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <Logo name={casino.name} size={100} />
          <div className="modal-title-section">
            <h2>{casino.name}</h2>
            <div className="modal-rating">
              <span className="stars" style={{ fontSize: 20 }}>
                {"★".repeat(Math.floor(casino.rating))}
              </span>
              <span className="modal-score">{casino.rating}<span>/5</span></span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>{casino.description}</p>
          </div>
        </div>

        <div className="modal-tabs">
          <button className={`modal-tab${tab === "overview" ? " active" : ""}`} onClick={() => setTab("overview")}>Обзор</button>
          <button className={`modal-tab${tab === "bonuses" ? " active" : ""}`} onClick={() => setTab("bonuses")}>Бонусы ({casino.bonuses.length})</button>
        </div>

        <div className="modal-body">
          {tab === "overview" && (
            <div className="tab-content active" id="tab-overview">
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-card-icon">💰</div>
                  <div className="info-card-value">{casino.minDeposit}</div>
                  <div className="info-card-label">Мин. депозит</div>
                </div>

                <div className="info-card">
                  <div className="info-card-icon">📅</div>
                  <div className="info-card-value">{casino.year}</div>
                  <div className="info-card-label">Год основания</div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">🎰</div>
                  <div className="info-card-value">5000+</div>
                  <div className="info-card-label">Игр</div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">🌐</div>
                  <div className="info-card-value">RU</div>
                  <div className="info-card-label">Язык</div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">💳</div>
                  <div className="info-card-value">{casino.payments}</div>
                  <div className="info-card-label">Способы оплаты</div>
                </div>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Преимущества</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {casino.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent)", fontSize: 18 }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>О казино {casino.name}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: 14 }}>
                {casino.description} Казино работает по лицензии {casino.license} и гарантирует честность игры и безопасность платежей.
              </p>
            </div>
          )}

          {tab === "bonuses" && (
            <div className="tab-content active" id="tab-bonuses">
              <div className="bonus-list">
                {casino.bonuses.map((b, i) => (
                  <div key={i} className="bonus-row">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className={`bonus-tag tag-${b.type}`}>{b.title}</span>
                      <div className="bonus-info">
                        <h4>{b.value}</h4>
                        <p>{b.desc}</p>
                        {b.wager && <span style={{ fontSize: 11, color: "var(--text-muted)", display: "block", marginTop: 4 }}>Вейджер: {b.wager}</span>}
                      </div>
                    </div>
                    <a href={casino.link} target="_blank" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
                      Получить
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "bonuses" && (
            <div className="tab-content active" id="tab-bonuses">
              <div className="bonus-promo-banner" style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.2)", borderRadius: 12, padding: "12px 16px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 1 }}>Промокод</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: "var(--accent)", letterSpacing: 1 }}>CAKATALOG</div>
                </div>
                <button className="btn btn-primary" style={{ padding: "8px 16px", fontSize: 12 }} onClick={() => { navigator.clipboard.writeText("CAKATALOG"); }}>Копировать</button>
              </div>
              <div className="bonus-list">
                {casino.bonuses.map((b, i) => (
                  <div key={i} className="bonus-row">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className={`bonus-tag tag-${b.type}`}>{b.title}</span>
                      <div className="bonus-info">
                        <h4>{b.value}</h4>
                        <p>{b.desc}</p>
                        {b.wager && <span style={{ fontSize: 11, color: "var(--text-muted)", display: "block", marginTop: 4 }}>Вейджер: {b.wager}</span>}
                      </div>
                    </div>
                    <a href={casino.link} target="_blank" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
                      Получить
                    </a>
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
          <button className="btn btn-outline" onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}
