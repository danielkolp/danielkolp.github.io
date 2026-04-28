import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import danielPortrait from '../assets/images/daniel2.jpg'
import AnimatedGradient from './AnimatedGradient'
import {
  SiFigma,
  SiGithub,
  SiGreensock,
  SiJavascript,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiThreedotjs,
  SiVite,
} from 'react-icons/si'
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from 'react-icons/tb'

function AbletonIcon({ className = '', ...rest }) {
  return (
    <svg
      className={`h-20 w-20 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <path d="M0 6.4v11.2h1.6V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0v11.2H8V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0V8H24V6.4zm0 3.2v1.6H24V9.6zm0 3.2v1.6H24v-1.6zm0 3.2v1.6H24V16z" />
    </svg>
  )
}

const sectionEyebrowClass = 'mb-4 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]'

const actionLinkClass =
  'relative inline-flex w-fit items-center gap-2 pb-1 text-[0.78rem] uppercase tracking-[0.14em] text-[#f5f1e8] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-[0.2] after:bg-[linear-gradient(90deg,#ff6a00,#00b7ff)] after:transition-transform after:duration-200 hover:after:scale-x-100'

function LetterIcon({ children, className = '' }) {
  return (
    <span
      className={`grid h-20 w-20 shrink-0 place-items-center border border-white/15 bg-white/[0.04] font-serif text-[1.16rem] leading-none text-[#f5f1e8] transition-[color,transform,filter,border-color] duration-500 will-change-transform [transform-style:preserve-3d] group-hover:[transform:perspective(700px)_rotateX(16deg)_rotateY(-18deg)_rotateZ(5deg)_scale(1.08)] group-hover:drop-shadow-[0_12px_20px_rgba(255,106,0,0.24)] ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}



const aboutMeParagraphs = [
  "I enjoy building things that feel alive, but I care just as much about the fundamentals that make an experience reliable. For me, creative work still needs structure, clarity, and purpose in every decision.",
  "I studied New Media Design and Web Development at BCIT, and I spend a lot of time experimenting with motion, 3D systems, and AI-driven tools. That blend of technical depth and visual thinking is where I do my best work.",
  "Long term, I want to build products that are both useful and expressive. I care about collaborating with people who take craft seriously, move quickly, and build things that genuinely solve problems.",
]

const tools = [
  { name: 'JavaScript / TypeScript', Icon: SiJavascript },
  { name: 'React / Next.js', Icon: SiReact },
  { name: 'Three.js / WebGL', Icon: SiThreedotjs },
  { name: 'GSAP', Icon: SiGreensock },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'OpenAI API', Icon: SiOpenai },
  { name: 'Figma', Icon: SiFigma },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Vite', Icon: SiVite },
  { name: 'Illustrator', Icon: TbBrandAdobeIllustrator },
  { name: 'Ableton Live 12 Suite', Icon: AbletonIcon },
  { name: 'Photoshop', Icon: TbBrandAdobePhotoshop },
]

const motivations = [
  {
    icon: '</>',
    title: 'Build interactive work',
    text: 'I care about interfaces that respond, move, and make people want to keep exploring.',
  },
  {
    icon: '◎',
    title: 'Mix creative tools',
    text: 'I like blending code with design, AI, music, 3D, motion, and whatever tool helps the idea hit harder.',
  },
  {
    icon: '|||',
    title: 'Make useful weird things',
    text: 'The sweet spot is something practical enough to matter, but strange enough that it feels memorable.',
  },
]

function VisualPlaceholder({ label, className }) {
  return (
    <div className={`relative grid overflow-hidden border border-white/10 bg-white/[0.012] ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,106,0,0.12),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(0,183,255,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-[145%] origin-top-left rotate-[31deg] bg-white/10" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-px w-[145%] origin-bottom-left -rotate-[31deg] bg-white/10" />
      <p className="z-[1] m-0 place-self-center text-[0.78rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">{label}</p>
    </div>
  )
}

export default function AboutPage() {
  const toolCardRefs = useRef([])

  useEffect(() => {
    const cards = toolCardRefs.current.filter(Boolean)
    if (!cards.length) return

    const waveWidth = 340
    const speedPxPerSecond = 190
    const seed = Math.random() * Math.PI * 2
    let animationFrameId
    let geometry = null

    cards.forEach((card) => {
      card.style.border = '1px solid transparent'
      card.style.backgroundClip = 'padding-box, border-box, border-box, border-box'
      card.style.backgroundOrigin = 'padding-box, border-box, border-box, border-box'
      card.style.backgroundImage =
        'linear-gradient(rgba(10,10,10,1), rgba(10,10,10,1)),linear-gradient(rgba(245,241,232,0.1), rgba(245,241,232,0.1)),linear-gradient(110deg, rgba(0,183,255,0) 0%, rgba(0,183,255,0.16) 34%, rgba(0,183,255,0.92) 50%, rgba(0,183,255,0.16) 66%, rgba(0,183,255,0) 100%),linear-gradient(110deg, rgba(0,183,255,0) 0%, rgba(0,183,255,0.16) 34%, rgba(0,183,255,0.92) 50%, rgba(0,183,255,0.16) 66%, rgba(0,183,255,0) 100%)'
      card.style.backgroundSize = `100% 100%, 100% 100%, ${waveWidth}px 100%, ${waveWidth}px 100%`
      card.style.backgroundRepeat = 'no-repeat, no-repeat, no-repeat, no-repeat'
    })

    const computeGeometry = () => {
      const rects = cards.map((card) => card.getBoundingClientRect())
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
        cards[index].style.backgroundPosition = `0 0, 0 0, ${waveLeft - offset.x}px 0, ${waveLeft2 - offset.x}px 0`
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
    <main className="mx-auto max-w-[1400px] px-8 py-14 max-md:px-4 max-md:py-10">
      <section className="grid grid-cols-2 gap-14 border-b border-white/10 pb-12 max-[1100px]:grid-cols-1">
        <div className="text-left">
          <p className={sectionEyebrowClass}>ABOUT ME</p>

          <h1 className="mb-6 font-serif text-[clamp(2.7rem,5vw,4.6rem)] font-normal leading-[1.03]">
            Developer.
            <br />
            Designer.
            <br />
            Always <AnimatedGradient className="italic text-[#ff6a00]">building</AnimatedGradient>.
          </h1>

          <p className="mb-8 max-w-[38rem] text-[1.05rem] leading-[1.9] text-[#f5f1e8b8]">
            I&apos;m Daniel, a Vancouver-based creative developer studying New Media Design and Web Development at BCIT. I build interactive websites, AI tools, 3D experiments,
            and music-driven visuals with a focus on clean design and personality.
          </p>

          <Link to="/#work" className={actionLinkClass}>
            VIEW MY WORK -&gt;
          </Link>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-white/[0.012] max-md:min-h-[280px]">
          <img
            src={danielPortrait}
            alt="Daniel portrait"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,106,0,0.12),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(0,183,255,0.08),transparent_30%)]" />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-14 border-b border-white/10 py-12 max-[1100px]:grid-cols-1">
        <div className="text-left">
          <p className={sectionEyebrowClass}>MY ETHOS</p>

          <p className="mb-6 max-w-[40rem] text-[1.06rem] leading-[1.95] text-[#f5f1e8b8]">
            I got into web development because I like making things that people can actually interact with. A static page is fine, but the stuff that pulls me in is motion,
            sound, 3D, AI, and interfaces that feel like they're moving. My goal when building products is to focus on structure.
          </p>

          <p className="mb-6 max-w-[40rem] text-[1.06rem] leading-[1.95] text-[#f5f1e8b8]">
            Structure is the difference between a cool idea and a finished product. It&apos;s about making sure every single detail and decision you make while building a product is a concious choice that serves the experience. 
          </p>

          <p className="mb-8 max-w-[40rem] text-[1.06rem] leading-[1.95] text-[#f5f1e8b8]">
            I aim to deliver quality work that has a human touch, and collaborate with likeminded people who aim to build something that solves problems in a creative way.
          </p>

          <div className="grid max-w-[560px] grid-cols-2 border border-white/10 max-md:grid-cols-1">
            <div className="border-r border-white/10 p-5 max-md:border-b max-md:border-r-0">
              <p className="mb-2 text-[0.72rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">BASED IN</p>
              <p className="m-0 text-[1.03rem]">Vancouver, Canada</p>
            </div>

            <div className="p-5">
              <p className="mb-2 text-[0.72rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">FOCUSED ON</p>
              <p className="m-0 text-[1.03rem]">Interactive Web / AI / 3D</p>
            </div>
          </div>
        </div>

        <div className="text-left">
          <p className={sectionEyebrowClass}>MORE ABOUT ME</p>

          <div className="grid gap-5">
            {aboutMeParagraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 border-l border-white/10 pl-4 text-[1rem] leading-[1.9] text-[#f5f1e8b8]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="border-b border-white/10 py-12">
        <p className={sectionEyebrowClass}>TOOLS I USE</p>

        <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          {tools.map(({ name, Icon, fallback }, index) => (
            <article
              key={name}
              ref={(element) => {
                toolCardRefs.current[index] = element
              }}
              className="group relative flex min-h-[170px] items-center justify-center overflow-visible border border-white/10 bg-white/[0.012] p-5 transition duration-300 hover:border-[#ff6a0057] hover:bg-[#ff6a000a]"
            >
              {Icon ? (
                <Icon
                  className="h-20 w-20 text-[#f5f1e8] transition-[color,transform,filter] duration-500 will-change-transform [transform-style:preserve-3d] group-hover:text-[#ff6a00] group-hover:[transform:perspective(700px)_rotateX(16deg)_rotateY(-18deg)_rotateZ(5deg)_scale(1.08)] group-hover:drop-shadow-[0_12px_20px_rgba(255,106,0,0.24)]"
                  aria-hidden="true"
                />
              ) : (
                <LetterIcon className="group-hover:border-[#ff6a00] group-hover:text-[#ff6a00]">{fallback}</LetterIcon>
              )}
              <p className="pointer-events-none absolute bottom-4 left-5 right-5 m-0 translate-y-1 text-left text-[0.95rem] uppercase leading-[1.5] text-[#f5f1e8d9] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 py-12">
        <p className={sectionEyebrowClass}>WHAT DRIVES ME</p>

        <div className="grid grid-cols-3 gap-8 max-[1100px]:grid-cols-1">
          {motivations.map((item) => (
            <article
              key={item.title}
              className="border-l border-white/10 pl-6 max-[1100px]:border-l-0 max-[1100px]:border-t max-[1100px]:pt-6 max-[1100px]:pl-0"
            >
              <p className="mb-4 text-[1.6rem] leading-none text-[#ff6a00]">{item.icon}</p>
              <h2 className="mb-3 text-[1.18rem] font-semibold">{item.title}</h2>
              <p className="m-0 max-w-[32ch] text-[1rem] leading-[1.9] text-[#f5f1e8b8]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="currently" className="grid grid-cols-2 gap-14 pt-12 max-[1100px]:grid-cols-1">
        <div className="text-left">
          <p className={sectionEyebrowClass}>CURRENTLY</p>

          <h2 className="mb-7 max-w-[44ch] font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-[1.08]">
            I&apos;m building toward a career where I can mix
            <AnimatedGradient className="text-[#ff6a00]">creative coding, AI, music, and useful web tools.</AnimatedGradient>
          </h2>

          <Link to="/#work" className={actionLinkClass}>
            SEE CURRENT WORK -&gt;
          </Link>
        </div>

        <VisualPlaceholder label="WORKFLOW / DESK / PROJECT IMAGE" className="min-h-[320px] max-md:min-h-[260px]" />
      </section>
    </main>
  )
}
