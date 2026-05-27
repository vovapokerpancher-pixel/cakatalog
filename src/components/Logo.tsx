interface LogoProps {
  name: string;
  size?: number;
}

const logoFiles: Record<string, string> = {
  "Fugu": "fugu.png",
  "Daddy": "daddy.jpg",
  "Joy Casino": "joycasino.jpg",
  "JOOZ": "jozz.jpg",
  "Play Fortuna": "playfortuna.jpg",
  "BEEF": "beef.jpg",
  "Casino-X": "casino-x.jpg",
  "Flagman": "flagman.png",
  "CatCasino": "cat.jpg",
  "Ton Play": "tonplay.png",
  "R7 Casino": "r7.jpg",
  "Kent": "kent.jpg",
  "Kometa Casino": "kometa.jpg",
  "Gama": "gama.jpg",
  "Arkada": "arkada.jpg",
  "1WIN": "1win.jpg",
  "Ramen Bet": "ramenbet.png",
  "7K Casino": "7kcasino.jpg",
  "Jetton": "jetton.jpg",
  "Lucky Bear": "luckybear.jpg",
  "BOOI!": "booi.jpg",
  "Get X": "getx.jpg",
  "Покердом": "pokerdom.jpg",
  "Mostbet": "mostbet.png",
  "SlotGames": "slotgames.jpg",
};

const base = import.meta.env.BASE_URL;

export function Logo({ name, size = 64 }: LogoProps) {
  const file = logoFiles[name];
  const w = Math.round(size * 1.6);
  const h = size;

  if (file) {
    const src = `${base}logos/${file}`;
    return (
      <img
        src={src}
        alt={name}
        width={w}
        height={h}
        style={{
          borderRadius: 8,
          objectFit: "contain",
          background: "#1a1a2e",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      />
    );
  }

  return (
    <div style={{ width: w, height: h, borderRadius: 8, background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
      <span style={{ fontSize: size * 0.35, fontWeight: 900, color: "#fff" }}>{name.charAt(0)}</span>
    </div>
  );
}
