import type { Casino } from "../data/casinos";
import { Logo } from "./Logo";

interface Props {
  casino: Casino;
  index: number;
  onOpen: (c: Casino) => void;
}

export default function CasinoCard({ casino, index, onOpen }: Props) {
  return (
    <div
      className="casino-card"
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => onOpen(casino)}
    >
      <div className="card-badges">
        {casino.tags.includes("top") && <span className="badge badge-top">Топ</span>}
        {casino.tags.includes("exclusive") && <span className="badge badge-exclusive">Эксклюзив</span>}
        {casino.tags.includes("new") && <span className="badge badge-new">Новинка</span>}
        {casino.tags.includes("fast") && <span className="badge badge-fast">Быстрые выплаты</span>}
        {casino.tags.includes("crypto") && <span className="badge badge-crypto">Crypto</span>}
      </div>
      <div className="card-header">
        <Logo name={casino.name} size={64} />
        <div className="casino-info">
          <h3>{casino.name}</h3>
          <div className="casino-rating">
            <span className="stars">
              {"★".repeat(Math.floor(casino.rating))}
              {casino.rating % 1 ? "½" : ""}
            </span>
            <span className="rating-value">{casino.rating}</span>
          </div>
        </div>
      </div>
      <div className="card-bonus">
        <div className="bonus-label">Приветственный бонус</div>
        <div className="bonus-value">{casino.bonus}</div>
      </div>
      <div className="card-meta">
        <div className="meta-item">
          <span className="meta-label">Мин. депозит</span>
          <span className="meta-value">{casino.minDeposit}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Платежи</span>
          <span className="meta-value">{casino.payments}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Год</span>
          <span className="meta-value">{casino.year}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Лицензия</span>
          <span className="meta-value">{casino.license}</span>
        </div>
      </div>
      <div className="card-actions">
        <a href={casino.link} target="_blank" className="btn btn-primary btn-glow" onClick={(e) => e.stopPropagation()}>
          Получить бонус
        </a>
        <button className="btn btn-details" onClick={(e) => { e.stopPropagation(); onOpen(casino); }}>
          Подробнее
        </button>
      </div>
    </div>
  );
}
