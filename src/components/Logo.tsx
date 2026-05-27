import { type JSX } from "react";

interface LogoProps {
  name: string;
  size?: number;
}

export function Logo({ name, size = 64 }: LogoProps) {
  const s = size;

  const logos: Record<string, JSX.Element> = {
    "Fugu": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1.5"/>
        <circle cx="32" cy="32" r="20" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.3"/>
        <text x="32" y="40" textAnchor="middle" fill="#ff6b9d" fontSize="22" fontWeight="900" fontFamily="Inter,sans-serif">F</text>
        <circle cx="28" cy="24" r="2" fill="#00ff88" opacity="0.6"/>
        <circle cx="38" cy="22" r="1.5" fill="#00ff88" opacity="0.4"/>
      </svg>
    ),
    "Daddy": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="16" fill="#0d0d1a" stroke="#ff4fd8" strokeWidth="1.5"/>
        <rect x="8" y="8" width="48" height="48" rx="10" fill="none" stroke="#ff4fd8" strokeWidth="0.5" opacity="0.3"/>
        <text x="32" y="40" textAnchor="middle" fill="#ff4fd8" fontSize="20" fontWeight="900" fontFamily="Inter,sans-serif">D</text>
        <circle cx="22" cy="22" r="2" fill="#ff4fd8" opacity="0.5"/>
        <circle cx="42" cy="24" r="1.5" fill="#ff4fd8" opacity="0.3"/>
      </svg>
    ),
    "Joy Casino": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="50%" fill="#0a0a12" stroke="#ffd700" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#ffd700" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">JC</text>
        <circle cx="22" cy="20" r="3" fill="#ffd700" opacity="0.2"/>
        <circle cx="42" cy="18" r="2" fill="#ffd700" opacity="0.2"/>
      </svg>
    ),
    "JOOZ": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="14" fill="#0a0a12" stroke="#00ccff" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#00ccff" fontSize="22" fontWeight="900" fontFamily="Inter,sans-serif">JZ</text>
        <circle cx="48" cy="16" r="4" fill="#00ccff" opacity="0.2"/>
      </svg>
    ),
    "Play Fortuna": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" fill="#0a0a12" stroke="#00ff88" strokeWidth="1.5"/>
        <circle cx="32" cy="32" r="22" fill="none" stroke="#00ff88" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4"/>
        <text x="32" y="37" textAnchor="middle" fill="#00ff88" fontSize="14" fontWeight="900" fontFamily="Inter,sans-serif">PF</text>
        <circle cx="32" cy="12" r="2" fill="#00ff88" opacity="0.6"/>
      </svg>
    ),
    "BEEF": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="12" fill="#0a0a12" stroke="#ff4757" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#ff4757" fontSize="22" fontWeight="900" fontFamily="Inter,sans-serif">BF</text>
        <circle cx="16" cy="16" r="3" fill="#ff4757" opacity="0.3"/>
      </svg>
    ),
    "Casino-X": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="4" y="4" width="56" height="56" rx="50%" fill="#0a0a12" stroke="#a55eea" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#a55eea" fontSize="22" fontWeight="900" fontFamily="Inter,sans-serif">X</text>
      </svg>
    ),
    "Flagman": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="14" fill="#0a0a12" stroke="#00d2d3" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#00d2d3" fontSize="20" fontWeight="900" fontFamily="Inter,sans-serif">FM</text>
        <path d="M18 20 L18 44 M18 20 L46 28 L18 36" stroke="#00d2d3" strokeWidth="2" fill="none" opacity="0.5"/>
      </svg>
    ),
    "CatCasino": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="50%" fill="#0a0a12" stroke="#ffa502" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#ffa502" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">CAT</text>
        <circle cx="24" cy="24" r="1.5" fill="#ffa502" opacity="0.6"/>
        <circle cx="40" cy="24" r="1.5" fill="#ffa502" opacity="0.6"/>
        <path d="M28 30 Q32 34 36 30" stroke="#ffa502" strokeWidth="1" fill="none" opacity="0.5"/>
      </svg>
    ),
    "Ton Play": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="12" fill="#0a0a12" stroke="#0088cc" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#0088cc" fontSize="16" fontWeight="900" fontFamily="Inter,sans-serif">TON</text>
        <path d="M22 32 L32 20 L42 32 L32 44 Z" stroke="#0088cc" strokeWidth="1" fill="none" opacity="0.4"/>
      </svg>
    ),
    "R7 Casino": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="16" fill="#0a0a12" stroke="#a55eea" strokeWidth="1.5"/>
        <rect x="6" y="6" width="52" height="52" rx="12" fill="none" stroke="#a55eea" strokeWidth="0.5" opacity="0.3"/>
        <text x="32" y="40" textAnchor="middle" fill="#a55eea" fontSize="24" fontWeight="900" fontFamily="Inter,sans-serif">R7</text>
      </svg>
    ),
    "Kent": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="50%" fill="#0a0a12" stroke="#ffd700" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#ffd700" fontSize="22" fontWeight="900" fontFamily="Inter,sans-serif">K</text>
      </svg>
    ),
    "Kometa Casino": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="14" fill="#0a0a12" stroke="#00ccff" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#00ccff" fontSize="16" fontWeight="900" fontFamily="Inter,sans-serif">KOM</text>
        <path d="M12 12 L32 32 L52 12" stroke="#00ccff" strokeWidth="2" opacity="0.4"/>
      </svg>
    ),
    "Gama": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="12" fill="#0a0a12" stroke="#00ff88" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#00ff88" fontSize="22" fontWeight="900" fontFamily="Inter,sans-serif">GM</text>
      </svg>
    ),
    "Arkada": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="18" fill="#0a0a12" stroke="#ff6b9d" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#ff6b9d" fontSize="20" fontWeight="900" fontFamily="Inter,sans-serif">AR</text>
        <circle cx="20" cy="48" r="3" fill="#ff6b9d" opacity="0.3"/>
        <circle cx="44" cy="48" r="3" fill="#ff6b9d" opacity="0.3"/>
      </svg>
    ),
    "1WIN": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="12" fill="#0a0a12" stroke="#00ff88" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#00ff88" fontSize="24" fontWeight="900" fontFamily="Inter,sans-serif">1W</text>
        <rect x="6" y="6" width="52" height="52" rx="8" fill="none" stroke="#00ff88" strokeWidth="0.5" opacity="0.2"/>
      </svg>
    ),
    "Ramen Bet": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="14" fill="#0a0a12" stroke="#ffa502" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#ffa502" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">RB</text>
        <ellipse cx="32" cy="38" rx="12" ry="4" stroke="#ffa502" strokeWidth="0.5" fill="none" opacity="0.3"/>
      </svg>
    ),
    "7K Casino": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="50%" fill="#0a0a12" stroke="#ff4757" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#ff4757" fontSize="24" fontWeight="900" fontFamily="Inter,sans-serif">7K</text>
      </svg>
    ),
    "Jetton": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="12" fill="#0a0a12" stroke="#00ccff" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#00ccff" fontSize="20" fontWeight="900" fontFamily="Inter,sans-serif">JET</text>
        <circle cx="32" cy="32" r="16" fill="none" stroke="#00ccff" strokeWidth="0.5" opacity="0.3"/>
      </svg>
    ),
    "Lucky Bear": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="50%" fill="#0a0a12" stroke="#ffa502" strokeWidth="1.5"/>
        <circle cx="24" cy="26" r="3" fill="#ffa502" opacity="0.5"/>
        <circle cx="40" cy="26" r="3" fill="#ffa502" opacity="0.5"/>
        <circle cx="32" cy="36" r="6" fill="none" stroke="#ffa502" strokeWidth="0.5" opacity="0.3"/>
        <text x="32" y="42" textAnchor="middle" fill="#ffa502" fontSize="10" fontWeight="900" fontFamily="Inter,sans-serif">LB</text>
      </svg>
    ),
    "BOOI!": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="16" fill="#0a0a12" stroke="#a55eea" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#a55eea" fontSize="24" fontWeight="900" fontFamily="Inter,sans-serif">B!</text>
        <circle cx="16" cy="16" r="3" fill="#a55eea" opacity="0.3"/>
        <circle cx="48" cy="48" r="3" fill="#a55eea" opacity="0.3"/>
      </svg>
    ),
    "Get X": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="12" fill="#0a0a12" stroke="#00ff88" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#00ff88" fontSize="22" fontWeight="900" fontFamily="Inter,sans-serif">GX</text>
      </svg>
    ),
    "Покердом": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="14" fill="#0a0a12" stroke="#00ff88" strokeWidth="1.5"/>
        <text x="32" y="38" textAnchor="middle" fill="#00ff88" fontSize="16" fontWeight="900" fontFamily="Inter,sans-serif">♠♥</text>
        <text x="32" y="46" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="900" fontFamily="Inter,sans-serif">ПД</text>
      </svg>
    ),
    "Mostbet": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="50%" fill="#0a0a12" stroke="#ffd700" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#ffd700" fontSize="18" fontWeight="900" fontFamily="Inter,sans-serif">MB</text>
      </svg>
    ),
    "SlotGames": (
      <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
        <rect x="2" y="2" width="60" height="60" rx="10" fill="#0a0a12" stroke="#a55eea" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fill="#a55eea" fontSize="16" fontWeight="900" fontFamily="Inter,sans-serif">SG</text>
        <rect x="14" y="14" width="10" height="10" rx="2" fill="none" stroke="#a55eea" strokeWidth="0.5" opacity="0.3"/>
        <rect x="27" y="14" width="10" height="10" rx="2" fill="none" stroke="#a55eea" strokeWidth="0.5" opacity="0.3"/>
        <rect x="40" y="14" width="10" height="10" rx="2" fill="none" stroke="#a55eea" strokeWidth="0.5" opacity="0.3"/>
      </svg>
    ),
  };

  return logos[name] || (
    <div style={{ width: s, height: s, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
      <span style={{ fontSize: s * 0.4, fontWeight: 900, color: '#fff' }}>{name.charAt(0)}</span>
    </div>
  );
}
