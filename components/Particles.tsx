import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FC, useCallback, useMemo } from "react";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { useTheme } from "next-themes";

interface IParticlesProps {
  id: string;
}

const ParticlesComponent: FC<IParticlesProps> = (props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const options: ISourceOptions = useMemo(
    () => ({
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
          value: 0.5,
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
    }),
    [isDark],
  );

  const { id } = props;

  const particlesInit = useCallback((engine: Engine): any => {
    loadSlim(engine);
  }, []);

  return <Particles id={id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
