import { useCallback } from "react"
import { useSelector } from "react-redux"
import { Particles } from "react-tsparticles"
import { loadSlim } from "tsparticles-slim" // npm i tsparticles-slim

export default function ParticlesBakground({ mode }) {
  const { particlesInteractivity } = useSelector((state) => state.particlesInteractivity)
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles 
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "trasparent",
          },
          
        },
        fpsLimit: 240,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: particlesInteractivity,
              mode: "attract",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#be55f1",
          },
          links: {
            color: mode ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
