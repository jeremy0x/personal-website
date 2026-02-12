"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";

// Component shows confetti effect on January 15th or when ?confetti=true is in URL
interface ConfettiEffectProps {
  duration?: number;
  colors?: string[];
  particleCount?: number;
  interval?: number;
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({
  duration = 5000,
  colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"],
  particleCount = 3,
  interval = 100,
}) => {
  useEffect(() => {
    // Check for query parameter (client-side only)
    const urlParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : null;
    const birthdayParam = urlParams?.get("birthday");

    // Check if it's January 15th
    const today = new Date();
    const isJanuary15 = today.getMonth() === 0 && today.getDate() === 15;

    // Trigger if query parameter is true OR if it's January 15th
    const shouldTrigger = birthdayParam === "true" || isJanuary15;

    if (!shouldTrigger) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const animationEnd = Date.now() + duration;

    const intervalId = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        return;
      }

      // Create uniform falling effect across full width
      // Random x position from 0 to 1 for full width coverage
      const randomX = Math.random();

      confetti({
        particleCount,
        angle: 90, // Straight down
        spread: 45, // Small spread for natural falling
        startVelocity: 25, // Moderate falling speed
        origin: { x: randomX, y: 0 }, // Random x position, top of screen
        colors,
        gravity: 1, // Standard gravity for falling effect
        drift: 0, // No horizontal drift
        ticks: 200, // How long particles stay visible
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [duration, colors, particleCount, interval]);

  return null;
};
