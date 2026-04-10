"use client";

import Particles, {
  initParticlesEngine,
  type IParticlesProps as TsParticlesProps,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { createElement, useEffect, useMemo, useState } from "react";
import type { FC, ReactElement } from "react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

interface ParticlesComponentProps {
  id: string;
}

const TsParticles = Particles as unknown as FC<TsParticlesProps>;

export default function ParticlesComponent({
  id,
}: ParticlesComponentProps): ReactElement | null {
  const [isReady, setIsReady] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const seasonalOverride = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const seasonalParam = new URLSearchParams(window.location.search).get(
      "seasonal",
    );

    return seasonalParam?.toLowerCase() === "true";
  }, []);

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const isSeasonalWindow = (now: Date) => {
    const month = now.getMonth();
    const date = now.getDate();

    if (month === 11 && date >= 1) return true;
    if (month === 0 && date <= 5) return true;
    return false;
  };

  const isHoliday = useMemo(() => {
    return seasonalOverride || isSeasonalWindow(new Date());
  }, [seasonalOverride]);

  const options: ISourceOptions = useMemo(
    () =>
      isHoliday
        ? {
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
              },
              color: {
                // Brighter on dark, slightly softer on light.
                value: isDark ? "#ffffff" : "#e5e7eb",
              },
              stroke: {
                width: 0,
                color: isDark ? "#000000" : "#9ca3af",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.2,
                },
                animation: {
                  enable: false,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: {
                  min: 0.1,
                  max: 5,
                },
                animation: {
                  enable: false,
                  speed: 40,
                  sync: false,
                },
              },
              links: {
                enable: false,
                distance: 500,
                color: isDark ? "#ffffff" : "#e5e7eb",
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 3.5,
                direction: "bottom",
                random: false,
                straight: false,
                outModes: {
                  default: "out",
                },
                bounce: false,
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                grab: {
                  distance: 400,
                  links: {
                    opacity: 0.5,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 4,
                  duration: 0.3,
                  opacity: 1,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
              },
            },
            detectRetina: true,
          }
        : {
            particles: {
              number: {
                value: 4,
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
              },
              color: {
                value: isDark ? "#232323" : "#d4d4d4",
              },
              stroke: {
                width: 0,
                color: isDark ? "#000000" : "#a3a3a3",
              },
              shape: {
                type: "polygon",
                options: {
                  polygon: {
                    sides: 6,
                  },
                },
              },
              opacity: {
                value: 0.1,
                animation: {
                  enable: false,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: {
                  min: 0.1,
                  max: 160,
                },
                animation: {
                  enable: false,
                  speed: 10,
                  sync: false,
                },
              },
              links: {
                enable: false,
                distance: 200,
                color: isDark ? "#171717" : "#a3a3a3",
                opacity: 1,
                width: 2,
              },
              move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out",
                },
                bounce: false,
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
              },
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                grab: {
                  distance: 400,
                  links: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  quantity: 1,
                },
                remove: {
                  quantity: 2,
                },
              },
            },
            detectRetina: true,
          },
    [isDark, isHoliday],
  );

  if (!isReady) {
    return null;
  }

  return createElement(TsParticles, { id, options });
}
