"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import { useTheme } from "next-themes";
import { useSeasonalTheme } from "@/utils/useSeasonalTheme";

interface ParticlesComponentProps {
  id: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  opacity: number;
  baseOpacity: number;
  sides?: number;
  angle?: number;
  spinSpeed?: number;
}

export default function ParticlesComponent({
  id,
}: ParticlesComponentProps): ReactElement | null {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isHoliday = useSeasonalTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    // Initial size setup
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = isHoliday ? 50 : 7;

      for (let i = 0; i < count; i++) {
        const size = isHoliday
          ? Math.random() * 4.9 + 0.1
          : Math.random() * 159.9 + 0.1;
        const opacity = isHoliday
          ? Math.random() * (isDark ? 0.1 : 0.2) + (isDark ? 0.1 : 0.18)
          : (isDark ? 0.15 : 0.16);

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: isHoliday
            ? (Math.random() - 0.5) * 1
            : (Math.random() - 0.5) * 3.0,
          vy: isHoliday
            ? Math.random() * 2 + 1.5 // Standard falling speed
            : (Math.random() - 0.5) * 3.0, // Slow float
          size,
          baseSize: size,
          opacity,
          baseOpacity: opacity,
          sides: isHoliday ? undefined : 6,
          angle: isHoliday ? undefined : Math.random() * Math.PI * 2,
          spinSpeed: isHoliday ? undefined : (Math.random() - 0.5) * 0.005,
        });
      }
    };

    // Helper to draw a regular polygon (Hexagon)
    const drawPolygon = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      radius: number,
      sides: number,
      angle: number = 0,
    ) => {
      context.beginPath();
      for (let i = 0; i < sides; i++) {
        const theta = angle + (Math.PI * 2 * i) / sides;
        context.lineTo(x + radius * Math.cos(theta), y + radius * Math.sin(theta));
      }
      context.closePath();
      context.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const baseColor = isHoliday
        ? (isDark ? "255, 255, 255" : "100, 116, 139")
        : (isDark ? "35, 35, 35" : "163, 163, 163");

      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Spin hexagon
        if (p.angle !== undefined && p.spinSpeed !== undefined) {
          p.angle += p.spinSpeed;
        }

        // Screen wrap constraints
        const buffer = p.size * 2;
        if (p.x < -buffer) p.x = canvas.width + buffer;
        if (p.x > canvas.width + buffer) p.x = -buffer;
        if (p.y < -buffer) p.y = canvas.height + buffer;
        if (p.y > canvas.height + buffer) p.y = -buffer;

        // Interaction math
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let drawSize = p.baseSize;
        let drawOpacity = p.baseOpacity;

        if (isHoliday) {
          // Bubble effect within 400px
          if (dist < 400) {
            const ratio = 1 - dist / 400;
            // Scale up to size 6 and fade to opacity 1
            drawSize = p.baseSize + (6 - p.baseSize) * ratio;
            drawOpacity = p.baseOpacity + (1 - p.baseOpacity) * ratio;
          }
        } else {
          // Repulse & brighten hexagons within 200px
          if (dist < 200) {
            const force = (200 - dist) / 200;
            // Push away
            p.x -= (dx / dist) * force * 5;
            p.y -= (dy / dist) * force * 5;

            // Fade/brighten towards 0.45 (dark mode) or 0.45 (light mode)
            const targetOpacity = isDark ? 0.45 : 0.45;
            drawOpacity = p.baseOpacity + (targetOpacity - p.baseOpacity) * force;
          }
        }

        // Render particle
        ctx.fillStyle = `rgba(${baseColor}, ${drawOpacity})`;
        if (p.sides && p.angle !== undefined) {
          drawPolygon(ctx, p.x, p.y, drawSize, p.sides, p.angle);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Click handler for push/repulse behaviors
    const handleClick = () => {
      if (mouse.x < 0 || mouse.y < 0) return;

      if (isHoliday) {
        // Repulse particles on click within 200px
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const pushForce = (200 - dist) / 200;
            p.vx += (dx / dist) * pushForce * 12;
            p.vy += (dy / dist) * pushForce * 12;
          }
        });
      } else {
        // Push: spawn 1 new hexagon at click location
        if (particles.length >= 25) {
          particles.shift(); // Keep maximum of 25 hexagons to optimize memory/visuals
        }
        const size = Math.random() * 159.9 + 0.1;
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 3.0,
          vy: (Math.random() - 0.5) * 3.0,
          size,
          baseSize: size,
          opacity: isDark ? 0.15 : 0.16,
          baseOpacity: isDark ? 0.15 : 0.16,
          sides: 6,
          angle: Math.random() * Math.PI * 2,
          spinSpeed: (Math.random() - 0.5) * 0.005,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReady, isHoliday, isDark]);

  if (!isReady) return null;

  return (
    <canvas
      id={id}
      ref={canvasRef}
      className="absolute top-0 left-0 -z-10 h-full w-full block pointer-events-none"
    />
  );
}
