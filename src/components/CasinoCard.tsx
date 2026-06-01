import type { Casino } from "../data/casinos";
import { Logo } from "./Logo";

interface Props {
  casino: Casino;
  index: number;
  onOpen: (c: Casino) => void;
}

const ratingColor = (r: number) =>
  r >= 4.7 ? "var(--accent)" : r >= 4.3 ? "#00ccff" : r >= 4.0 ? "#ffa502" : "#ff4757";

export default function CasinoCard({ casino, index, onOpen }: Props) {
  const stars = "★".repeat(Math.floor(casino.rating)) + (casino.rating % 1 >= 0.5 ? "★" : "");

  return (
    <div
      className="casino-card"
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => onOpen(casino)}
    >
      <div className="card-top-row">
        <div className="card-badges">
          {casino.tags.includes("top") && <span className="badge badge-top">Топ</span>}
          {casino.tags.includes("exclusive") && <span className="badge badge-exclusive">Эксклюзив</span>}
          {casino.tags.includes("new") && <span className="badge badge-new">Новинка</span>}
          {casino.tags.includes("fast") && <span className="badge badge-fast">Быстрые выплаты</span>}
          {casino.tags.includes("crypto") && <span className="badge badge-crypto">Crypto</span>}
        </div>
        <div className="card-rating-badge" style={{ color: ratingColor(casino.rating) }}>
          <span className="card-rating-stars">{stars}</span>
          <span className="card-rating-num">{casino.rating}</span>
        </div>
      </div>

      <div className="card-header">
        <Logo name={casino.name} size={52} />
        <div className="casino-info">
          <h3>{casino.name}</h3>
          <span className="casino-license-tag">
            {casino.license && casino.license !== "—" ? "✓ " + casino.license : casino.tags.includes("crypto") ? "₿ Crypto" : "Лицензия"}
          </span>
        </div>
      </div>

      <div className="card-bonus">
        <span className="bonus-emoji">🎁</span>
        <div>
          <div className="bonus-label">Приветственный бонус</div>
          <div className="bonus-value">{casino.bonus}</div>
        </div>
      </div>

      <div className="card-chips">
        <span className="chip">💰 <b>{casino.minDeposit}</b></span>
        <span className="chip">🎰 {casino.payments.split(", ").slice(0, 2).join(", ")}</span>
        <span className="chip">📅 {casino.year}</span>
        <span className="chip chip-wag">{casino.wager}</span>
      </div>

      <div className="card-actions">
        <a href={casino.link} target="_blank" className="btn btn-primary btn-glow" onClick={(e) => e.stopPropagation()}>
          🎁 Получить бонус
        </a>
        <button className="btn btn-details" onClick={(e) => { e.stopPropagation(); onOpen(casino); }}>
          Подробнее →
        </button>
      </div>
    </div>
  );
}
