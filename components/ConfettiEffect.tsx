import React, { useEffect } from "react";
import confetti from "canvas-confetti";

// Component shows confetti effect only on January 15th (local time zone)
interface ConfettiEffectProps {
  duration?: number;
  colors?: string[];
  particleCount?: number;
  spread?: number;
  interval?: number;
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({
  duration = 7500,
  colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"],
  particleCount = 3,
  spread = 55,
  interval = 100,
}) => {
  useEffect(() => {
    const today = new Date();
    const isJanuary15 = today.getMonth() === 0 && today.getDate() === 15;

    if (!isJanuary15) return;

    const animationEnd = Date.now() + duration;

    const intervalId = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        return;
      }

      // Launch confetti from the left
      confetti({
        particleCount,
        angle: 60,
        spread,
        origin: { x: 0 },
        colors,
      });

      // Launch confetti from the right
      confetti({
        particleCount,
        angle: 120,
        spread,
        origin: { x: 1 },
        colors,
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [duration, colors, particleCount, spread, interval]);

  return null;
};
