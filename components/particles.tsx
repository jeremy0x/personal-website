"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FC, useCallback, useMemo } from "react";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { useTheme } from "next-themes";
import { useSearchParams } from "next/navigation";

interface IParticlesProps {
  id: string;
}

const ParticlesComponent: FC<IParticlesProps> = (props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const searchParams = useSearchParams();

  const isSeasonalWindow = (now: Date) => {
    const month = now.getMonth();
    const date = now.getDate();

    if (month === 11 && date >= 1) return true;
    if (month === 0 && date <= 5) return true;
    return false;
  };

  const isHoliday = useMemo(() => {
    const seasonalParam = searchParams?.get("seasonal");
    if (seasonalParam && seasonalParam.toLowerCase() === "true") {
      return true;
    }
    return isSeasonalWindow(new Date());
  }, [searchParams]);

  const options: ISourceOptions = useMemo(
    () =>
      isHoliday
        ? {
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                // Brighter on dark, slightly softer on light.
                value: isDark ? "#ffffff" : "#e5e7eb",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: isDark ? "#000000" : "#9ca3af",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.2,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
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
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
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
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }
        : {
            particles: {
              number: {
                value: 4,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: isDark ? "#232323" : "#d4d4d4",
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 0,
                  color: isDark ? "#000000" : "#a3a3a3",
                },
                polygon: {
                  nb_sides: 6,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: isDark ? 0.25 : 0.2,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 160,
                random: true,
                anim: {
                  enable: false,
                  speed: 10,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
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
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
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
                  particles_nb: 1,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          },
    [isDark, isHoliday],
  );

  const { id } = props;

  const particlesInit = useCallback((engine: Engine): any => {
    loadSlim(engine);
  }, []);

  return <Particles id={id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
