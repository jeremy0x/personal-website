"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  delay: number;
}

interface FireworkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  life: number;
}

interface BirthdayFireworksProps {
  duration?: number;
  colors?: string[];
}

type Phase = "fireworks" | "converging" | "formed" | "fading" | "done";

export const BirthdayFireworks: React.FC<BirthdayFireworksProps> = ({
  duration = 10000,
  colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEEAD",
    "#FFD93D",
    "#FF85A1",
    "#A855F7",
    "#F472B6",
  ],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const fireworksRef = useRef<FireworkParticle[]>([]);
  const phaseRef = useRef<Phase>("done");
  const startTimeRef = useRef<number>(0);
  const animationRef = useRef<number>(0);

  const [shouldRender, setShouldRender] = useState(false);

  // Get cake coordinates by drawing a cake shape
  const getCakeCoordinates = useCallback(
    (canvas: HTMLCanvasElement): { x: number; y: number; color: string }[] => {
      const offscreen = document.createElement("canvas");
      const ctx = offscreen.getContext("2d")!;

      const isMobile = window.innerWidth < 768;
      const scale = isMobile ? 0.7 : 1.3;

      // Cake dimensions - bigger cake
      const cakeWidth = 320 * scale;
      const tier1Height = 70 * scale;
      const tier2Height = 60 * scale;
      const tier3Height = 50 * scale;
      const tier4Height = 45 * scale;
      const plateHeight = 18 * scale;
      const candleWidth = 10 * scale;
      const candleHeight = 40 * scale;
      const flameHeight = 24 * scale;

      const totalHeight =
        plateHeight +
        tier1Height +
        tier2Height +
        tier3Height +
        tier4Height +
        candleHeight +
        flameHeight +
        40;

      offscreen.width = cakeWidth + 120;
      offscreen.height = totalHeight + 80;

      const centerX = offscreen.width / 2;
      let currentY = offscreen.height - 40;

      // Draw plate (brown/gold)
      ctx.fillStyle = "#D4A574";
      ctx.beginPath();
      ctx.ellipse(
        centerX,
        currentY,
        cakeWidth / 2 + 25,
        plateHeight,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();
      currentY -= plateHeight * 0.6;

      // Draw tier 1 - bottom (navy blue)
      ctx.fillStyle = "#1E3A8A";
      ctx.fillRect(
        centerX - cakeWidth / 2,
        currentY - tier1Height,
        cakeWidth,
        tier1Height,
      );
      // Frosting drips
      for (let i = 0; i < 10; i++) {
        const dripX = centerX - cakeWidth / 2 + 20 + (i * (cakeWidth - 40)) / 9;
        ctx.beginPath();
        ctx.arc(dripX, currentY - tier1Height, 10 * scale, 0, Math.PI, true);
        ctx.fill();
      }
      currentY -= tier1Height;

      // Draw tier 2 - (darker blue)
      const tier2Width = cakeWidth * 0.8;
      ctx.fillStyle = "#3B82F6";
      ctx.fillRect(
        centerX - tier2Width / 2,
        currentY - tier2Height,
        tier2Width,
        tier2Height,
      );
      // Frosting drips
      for (let i = 0; i < 8; i++) {
        const dripX =
          centerX - tier2Width / 2 + 15 + (i * (tier2Width - 30)) / 7;
        ctx.beginPath();
        ctx.arc(dripX, currentY - tier2Height, 8 * scale, 0, Math.PI, true);
        ctx.fill();
      }
      currentY -= tier2Height;

      // Draw tier 3 - (light blue)
      const tier3Width = cakeWidth * 0.6;
      ctx.fillStyle = "#60A5FA";
      ctx.fillRect(
        centerX - tier3Width / 2,
        currentY - tier3Height,
        tier3Width,
        tier3Height,
      );
      // Frosting drips
      for (let i = 0; i < 6; i++) {
        const dripX =
          centerX - tier3Width / 2 + 12 + (i * (tier3Width - 24)) / 5;
        ctx.beginPath();
        ctx.arc(dripX, currentY - tier3Height, 7 * scale, 0, Math.PI, true);
        ctx.fill();
      }
      currentY -= tier3Height;

      // Draw tier 4 - top (white)
      const tier4Width = cakeWidth * 0.4;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(
        centerX - tier4Width / 2,
        currentY - tier4Height,
        tier4Width,
        tier4Height,
      );
      // Frosting drips
      for (let i = 0; i < 4; i++) {
        const dripX =
          centerX - tier4Width / 2 + 10 + (i * (tier4Width - 20)) / 3;
        ctx.beginPath();
        ctx.arc(dripX, currentY - tier4Height, 6 * scale, 0, Math.PI, true);
        ctx.fill();
      }
      currentY -= tier4Height;

      // Draw candles
      const numCandles = 5;
      const candleSpacing = tier4Width / (numCandles + 1);
      const candleColors = [
        "#FF6B6B",
        "#4ECDC4",
        "#FFD93D",
        "#FF85A1",
        "#A855F7",
      ];

      for (let i = 0; i < numCandles; i++) {
        const candleX = centerX - tier4Width / 2 + candleSpacing * (i + 1);

        // Candle body
        ctx.fillStyle = candleColors[i];
        ctx.fillRect(
          candleX - candleWidth / 2,
          currentY - candleHeight,
          candleWidth,
          candleHeight,
        );

        // Flame (orange/yellow gradient effect)
        ctx.fillStyle = "#FFA500";
        ctx.beginPath();
        ctx.ellipse(
          candleX,
          currentY - candleHeight - flameHeight / 2,
          flameHeight / 3,
          flameHeight / 2,
          0,
          0,
          Math.PI * 2,
        );
        ctx.fill();

        // Inner flame
        ctx.fillStyle = "#FFFF00";
        ctx.beginPath();
        ctx.ellipse(
          candleX,
          currentY - candleHeight - flameHeight / 2 + 3,
          flameHeight / 5,
          flameHeight / 3,
          0,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }

      // Sample pixels with color information
      const imageData = ctx.getImageData(
        0,
        0,
        offscreen.width,
        offscreen.height,
      );
      const coordinates: { x: number; y: number; color: string }[] = [];
      const gap = isMobile ? 6 : 5;

      const offsetX = (canvas.width - offscreen.width) / 2;
      const offsetY = (canvas.height - offscreen.height) / 2;

      for (let y = 0; y < offscreen.height; y += gap) {
        for (let x = 0; x < offscreen.width; x += gap) {
          const i = (y * offscreen.width + x) * 4;
          if (imageData.data[i + 3] > 128) {
            const r = imageData.data[i];
            const g = imageData.data[i + 1];
            const b = imageData.data[i + 2];
            coordinates.push({
              x: x + offsetX,
              y: y + offsetY,
              color: `rgb(${r}, ${g}, ${b})`,
            });
          }
        }
      }

      return coordinates;
    },
    [],
  );

  // Create a firework explosion
  const createFirework = useCallback(
    (x: number, y: number) => {
      const particleCount = 50 + Math.random() * 30;
      const color = colors[Math.floor(Math.random() * colors.length)];

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.2;
        const velocity = 3 + Math.random() * 4;

        fireworksRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          color,
          size: 2 + Math.random() * 2,
          alpha: 1,
          life: 1,
        });
      }
    },
    [colors],
  );

  // Initialize particles for cake formation
  const initializeCakeParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      const coordinates = getCakeCoordinates(canvas);
      particlesRef.current = coordinates.map((coord, index) => {
        // Random starting position (edges of screen)
        const side = Math.floor(Math.random() * 4);
        let startX: number, startY: number;

        switch (side) {
          case 0: // Top
            startX = Math.random() * canvas.width;
            startY = -50;
            break;
          case 1: // Right
            startX = canvas.width + 50;
            startY = Math.random() * canvas.height;
            break;
          case 2: // Bottom
            startX = Math.random() * canvas.width;
            startY = canvas.height + 50;
            break;
          default: // Left
            startX = -50;
            startY = Math.random() * canvas.height;
        }

        return {
          x: startX,
          y: startY,
          targetX: coord.x,
          targetY: coord.y,
          originX: startX,
          originY: startY,
          vx: 0,
          vy: 0,
          color: coord.color,
          size: 4 + Math.random() * 2,
          alpha: 0, // Start invisible, fade in during convergence
          delay: (index / coordinates.length) * 500,
        };
      });
    },
    [getCakeCoordinates],
  );

  useEffect(() => {
    // Check trigger conditions for initial render
    const urlParams = new URLSearchParams(window.location.search);
    const birthdayParam = urlParams.get("birthday");
    const today = new Date();
    const isJanuary15 = today.getMonth() === 0 && today.getDate() === 15;

    if (birthdayParam !== "true" && !isJanuary15) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Reset particles for fresh animation
    particlesRef.current = [];
    fireworksRef.current = [];

    // Phase timings (in ms from start)
    const FIREWORKS_DURATION = 3000;
    const CONVERGE_DURATION = 2000;
    const FORMED_DURATION = 100;
    const FADE_DURATION = 1000;

    startTimeRef.current = Date.now();
    phaseRef.current = "fireworks";

    // Schedule initial fireworks
    const fireworkIntervals: NodeJS.Timeout[] = [];
    for (let i = 0; i < 8; i++) {
      fireworkIntervals.push(
        setTimeout(() => {
          if (phaseRef.current === "fireworks") {
            createFirework(
              100 + Math.random() * (canvas.width - 200),
              100 + Math.random() * (canvas.height - 300),
            );
          }
        }, i * 350),
      );
    }

    // Initialize cake particles after fireworks phase
    setTimeout(() => {
      initializeCakeParticles(canvas);
      phaseRef.current = "converging";
    }, FIREWORKS_DURATION);

    // Transition to formed phase
    setTimeout(() => {
      phaseRef.current = "formed";
    }, FIREWORKS_DURATION + CONVERGE_DURATION);

    // Transition to fading phase
    setTimeout(
      () => {
        phaseRef.current = "fading";
      },
      FIREWORKS_DURATION + CONVERGE_DURATION + FORMED_DURATION,
    );

    // End animation
    setTimeout(
      () => {
        phaseRef.current = "done";
      },
      FIREWORKS_DURATION + CONVERGE_DURATION + FORMED_DURATION + FADE_DURATION,
    );

    // Animation loop
    const animate = () => {
      if (phaseRef.current === "done") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      // Clear canvas each frame (no overlay)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const elapsed = Date.now() - startTimeRef.current;

      // Update and draw firework particles
      fireworksRef.current = fireworksRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // Gravity
        p.life -= 0.015;
        p.alpha = p.life;
        p.size *= 0.99;

        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
          return true;
        }
        return false;
      });

      // Update and draw text particles
      if (
        phaseRef.current === "converging" ||
        phaseRef.current === "formed" ||
        phaseRef.current === "fading"
      ) {
        const convergeElapsed = elapsed - FIREWORKS_DURATION;

        particlesRef.current.forEach((p) => {
          if (phaseRef.current === "converging") {
            if (convergeElapsed > p.delay) {
              const progress = Math.min(
                (convergeElapsed - p.delay) / (CONVERGE_DURATION - 500),
                1,
              );
              // Easing function for smooth convergence
              const eased = 1 - Math.pow(1 - progress, 3);

              p.x = p.originX + (p.targetX - p.originX) * eased;
              p.y = p.originY + (p.targetY - p.originY) * eased;

              // Fade in as particles converge (max 0.6 for hint-like appearance)
              p.alpha = progress * 0.6;

              // Add slight wobble
              if (progress < 1) {
                p.x +=
                  Math.sin(Date.now() * 0.01 + p.targetX) * (1 - progress) * 3;
                p.y +=
                  Math.cos(Date.now() * 0.01 + p.targetY) * (1 - progress) * 3;
              }
            }
          } else if (phaseRef.current === "formed") {
            // Gentle floating effect
            p.x =
              p.targetX + Math.sin(Date.now() * 0.002 + p.targetX * 0.1) * 1;
            p.y =
              p.targetY + Math.cos(Date.now() * 0.002 + p.targetY * 0.1) * 1;
            p.alpha = 0.6; // Keep subtle
          } else if (phaseRef.current === "fading") {
            const fadeElapsed =
              elapsed -
              FIREWORKS_DURATION -
              CONVERGE_DURATION -
              FORMED_DURATION;
            const fadeProgress = Math.min(fadeElapsed / FADE_DURATION, 1);

            p.alpha = 0.6 * (1 - fadeProgress);
            p.y -= 0.5;
            p.x += Math.sin(Date.now() * 0.005 + p.targetX) * 0.5;
          }

          // Draw particle
          if (p.alpha > 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;

            ctx.fill();

            ctx.globalAlpha = 1;
          }
        });

        // Add sparkles during formed phase
        if (phaseRef.current === "formed" && Math.random() < 0.1) {
          const randomParticle =
            particlesRef.current[
              Math.floor(Math.random() * particlesRef.current.length)
            ];
          if (randomParticle) {
            ctx.beginPath();
            ctx.arc(
              randomParticle.x + (Math.random() - 0.5) * 10,
              randomParticle.y + (Math.random() - 0.5) * 10,
              1 + Math.random() * 2,
              0,
              Math.PI * 2,
            );
            ctx.fillStyle = "#ffffff";
            ctx.globalAlpha = 0.8;
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
      fireworkIntervals.forEach(clearTimeout);
    };
  }, [createFirework, initializeCakeParticles, duration]);

  // Check if should render on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const birthdayParam = urlParams.get("birthday");
    const today = new Date();
    const isJanuary15 = today.getMonth() === 0 && today.getDate() === 15;
    setShouldRender(birthdayParam === "true" || isJanuary15);
  }, []);

  if (!shouldRender) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};
