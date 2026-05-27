import { useState, useCallback } from "react";

const fortuneAnswers = [
  { icon: "🎰", text: "Сегодня твой джекпотный день!", sub: "Жми на казино и забирай бонус" },
  { icon: "😏", text: "Фортуна улыбается... но смотрит в другую сторону", sub: "Попробуй еще разок, вдруг повернется" },
  { icon: "🎲", text: "Рулетка крутится — судьба решится!", sub: "Ставка на красное? Или на черное?" },
  { icon: "💸", text: "Слоты ждут тебя... и твой депозит тоже", sub: "Но бонус компенсирует все риски" },
  { icon: "🍀", text: "777 — твои цифры на сегодня!", sub: "Ищи слот с семерками и крути" },
  { icon: "🎁", text: "Бонус уже летит к тебе... почти", sub: "Осталось только нажать кнопку" },
  { icon: "😴", text: "Сегодня везение на твоей стороне, но оно еще спит", sub: "Подожди пару часов и возвращайся" },
  { icon: "🃏", text: "Крупье говорит: 'Ставка принята!'", sub: "Твой шанс — 50/50. Или 60/40?" },
  { icon: "⏰", text: "Твой lucky spin сегодня в 15:42", sub: "Поставь будильник и не опаздывай" },
  { icon: "🎴", text: "Фишки на твоей стороне стола", sub: "Все-in или осторожная ставка?" },
  { icon: "🚀", text: "Сегодня ты взлетишь до стратосферы!", sub: "Главное — вовремя нажать 'Вывести'" },
  { icon: "🧲", text: "Удача притягивается к тебе магнитом", sub: "Но магнит иногда перепутывает полюса" },
  { icon: "🔥", text: "Сегодня ты горячее вулкана!", sub: "Слоты будут плавиться от твоих выигрышей" },
  { icon: "🪙", text: "Монетка подброшена — решка!", sub: "Это знак. Знак того, что пора играть" },
  { icon: "🌟", text: "Звезды сошлись — фортуна на твоей стороне", sub: "А если нет — звезды иногда ошибаются" },
];

export default function FortuneWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<{ icon: string; text: string; sub: string } | null>(null);
  const [flash, setFlash] = useState(false);

  const handleSpin = useCallback(() => {
    if (spinning) return;
    setResult(null);
    setSpinning(true);

    setTimeout(() => {
      const answer = fortuneAnswers[Math.floor(Math.random() * fortuneAnswers.length)];
      setFlash(true);
      setTimeout(() => setFlash(false), 600);
      setResult(answer);
      setSpinning(false);
    }, 2000);
  }, [spinning]);

  const closeResult = useCallback(() => setResult(null), []);

  return (
    <div className="hero-visual">
      <div
        className={`hero-visual-inner${spinning ? " spinning shaking" : ""}`}
        onClick={() => result && closeResult()}
      >
        <div className="orbit-ring"><div className="orbit-dot" /></div>
        <div className="orbit-ring"><div className="orbit-dot" /></div>
        <div className="orbit-ring"><div className="orbit-dot" /></div>
        <div className="center-glow" />
        <div className={`flash-overlay${flash ? " active" : ""}`} />

        <div className="center-icon" onClick={handleSpin}>
          TOP
        </div>

        {result && (
          <div className="fortune-result show">
            <button className="fortune-result-close" onClick={(e) => { e.stopPropagation(); closeResult(); }}>×</button>
            <span className="fortune-result-icon">{result.icon}</span>
            <div className="fortune-result-text">{result.text}</div>
            <div className="fortune-result-sub">{result.sub}</div>
          </div>
        )}

        <div className="tap-hint">👆 Нажми на TOP, чтобы узнать свою удачу</div>
      </div>
    </div>
  );
}
