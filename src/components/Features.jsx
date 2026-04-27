import { useEffect, useRef } from 'react'
import {
  SiBlender,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGreensock,
  SiJavascript,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiVite,
} from 'react-icons/si'

function LetterIcon({ children, className = '' }) {
  return (
    <span
      className={`grid h-16 w-16 shrink-0 place-items-center border border-white/15 bg-white/[0.04] font-serif text-[1.05rem] leading-none text-[#f5f1e8] transition-[color,transform,filter,border-color] duration-500 will-change-transform [transform-style:preserve-3d] group-hover:[transform:perspective(700px)_rotateX(16deg)_rotateY(-18deg)_rotateZ(5deg)_scale(1.08)] group-hover:drop-shadow-[0_12px_20px_rgba(255,106,0,0.24)] ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

const tools = [
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Three.js', icon: SiThreedotjs },
  { name: 'React Three Fiber', fallback: 'R3F' },
  { name: 'GSAP', icon: SiGreensock },
  { name: 'Web Audio API', fallback: 'WA' },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Vite', icon: SiVite },
  { name: 'Blender', icon: SiBlender },
  { name: 'Ableton Live 12', fallback: 'AL' },
  { name: 'OpenAI API', icon: SiOpenai },
  { name: 'Figma', icon: SiFigma },
  { name: 'Adobe Illustrator', fallback: 'Ai' },
  { name: 'Adobe Photoshop', fallback: 'Ps' },
  { name: 'Adobe After Effects', fallback: 'Ae' },
  { name: 'Adobe Dimension', fallback: 'Dn' },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'VS Code', fallback: 'VS' },
]

function ToolChip({ tool, ariaHidden = false, cardRef }) {
  const Icon = tool.icon

  return (
    <div
      ref={cardRef}
      className="group relative flex h-28 w-[230px] shrink-0 items-center justify-center overflow-visible border border-white/10 bg-white/[0.018] px-5 text-left transition duration-300 hover:border-[#ff6a0057] hover:bg-[#ff6a000d]"
      aria-label={tool.name}
      aria-hidden={ariaHidden || undefined}
    >
      {Icon ? (
        <Icon
          className="h-16 w-16 shrink-0 text-[#f5f1e8] transition-[color,transform,filter] duration-500 will-change-transform [transform-style:preserve-3d] group-hover:text-[#ff6a00] group-hover:[transform:perspective(700px)_rotateX(16deg)_rotateY(-18deg)_rotateZ(5deg)_scale(1.08)] group-hover:drop-shadow-[0_12px_20px_rgba(255,106,0,0.24)]"
          aria-hidden="true"
        />
      ) : (
        <LetterIcon className="group-hover:border-[#ff6a00] group-hover:text-[#ff6a00]">{tool.fallback}</LetterIcon>
      )}
      <span className="pointer-events-none absolute bottom-4 left-5 right-5 m-0 translate-y-1 text-left text-[0.86rem] uppercase tracking-[0.12em] text-[#f5f1e8d9] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {tool.name}
      </span>
    </div>
  )
}

export default function Features() {
  const toolChipRefs = useRef([])
  const carouselItems = [...tools, ...tools]

  useEffect(() => {
    const chips = toolChipRefs.current.filter(Boolean)
    if (!chips.length) return

    const waveWidth = 300
    const speedPxPerSecond = 200
    const seed = Math.random() * Math.PI * 2
    let animationFrameId
    let geometry = null

    chips.forEach((chip) => {
      chip.style.border = '1px solid transparent'
      chip.style.backgroundClip = 'padding-box, border-box, border-box, border-box'
      chip.style.backgroundOrigin = 'padding-box, border-box, border-box, border-box'
      chip.style.backgroundImage =
        'linear-gradient(rgba(10,10,10,1), rgba(10,10,10,1)),linear-gradient(rgba(245,241,232,0.1), rgba(245,241,232,0.1)),linear-gradient(110deg, rgba(0,183,255,0) 0%, rgba(0,183,255,0.16) 34%, rgba(0,183,255,0.92) 50%, rgba(0,183,255,0.16) 66%, rgba(0,183,255,0) 100%),linear-gradient(110deg, rgba(0,183,255,0) 0%, rgba(0,183,255,0.16) 34%, rgba(0,183,255,0.92) 50%, rgba(0,183,255,0.16) 66%, rgba(0,183,255,0) 100%)'
      chip.style.backgroundSize = `100% 100%, 100% 100%, ${waveWidth}px 100%, ${waveWidth}px 100%`
      chip.style.backgroundRepeat = 'no-repeat, no-repeat, no-repeat, no-repeat'
    })

    const computeGeometry = () => {
      const rects = chips.map((chip) => chip.getBoundingClientRect())
      const minLeft = Math.min(...rects.map((rect) => rect.left))
      const maxRight = Math.max(...rects.map((rect) => rect.right))
      geometry = {
        trackWidth: Math.max(1, maxRight - minLeft) + waveWidth * 2,
        offsets: rects.map((rect) => ({ x: rect.left - minLeft })),
      }
    }

    computeGeometry()

    const animate = (time) => {
      if (!geometry) return
      const t = time * 0.001
      const drift = Math.sin(t * 0.19 + seed) * 24 + Math.sin(t * 0.43 + seed * 1.7) * 12
      const travel = (t * speedPxPerSecond + drift + geometry.trackWidth) % geometry.trackWidth
      const waveLeft = -waveWidth + travel
      const waveLeft2 = waveLeft - geometry.trackWidth

      geometry.offsets.forEach((offset, index) => {
        chips[index].style.backgroundPosition = `0 0, 0 0, ${waveLeft - offset.x}px 0, ${waveLeft2 - offset.x}px 0`
      })

      animationFrameId = window.requestAnimationFrame(animate)
    }

    animationFrameId = window.requestAnimationFrame(animate)
    window.addEventListener('resize', computeGeometry)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', computeGeometry)
    }
  }, [])

  return (
    <section id="experiments" className="mx-auto max-w-[1400px] border-t border-white/10 px-8 py-20 max-md:px-4 max-md:py-16">
      <div className="mb-8 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
        <div>
          <p className="mb-3 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">TOOLS I USE</p>
          <h2 className="m-0 font-serif text-[2.25rem] font-normal leading-[1.08] md:text-[3rem]">
            Stack, software, and creative tools.
          </h2>
        </div>
        <p className="m-0 max-w-[28rem] text-[0.98rem] leading-[1.75] text-[#f5f1e8b8]">
          The languages, frameworks, APIs, and design tools I reach for when building interactive work.
        </p>
      </div>

      <div
        className="group relative overflow-hidden border-y border-white/10 py-5 [mask-image:linear-gradient(90deg,transparent,black_9%,black_91%,transparent)]"
        aria-label="Technology and software carousel"
      >
        <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {carouselItems.map((tool, index) => (
            <ToolChip
              key={`${tool.name}-${index}`}
              tool={tool}
              ariaHidden={index >= tools.length}
              cardRef={(element) => {
                toolChipRefs.current[index] = element
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
