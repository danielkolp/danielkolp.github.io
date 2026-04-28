import { useEffect, useState } from 'react'
import ParticleSphere from './ParticleSphere'
import AnimatedGradient from './AnimatedGradient'

const primaryButtonClass =
  'inline-flex items-center justify-center border border-transparent bg-[#ff6a00] px-5 py-4 text-[0.8rem] uppercase tracking-[0.14em] text-[#0a0a0a] shadow-[0_10px_28px_rgba(255,106,0,0.18)] transition duration-200 hover:-translate-y-px hover:bg-[#ff7b1b] hover:shadow-[0_12px_32px_rgba(255,106,0,0.24)]'

const secondaryButtonClass =
  'inline-flex items-center justify-center border border-white/25 bg-white/[0.02] px-5 py-4 text-[0.8rem] uppercase tracking-[0.14em] text-[#f5f1e8] transition duration-200 hover:-translate-y-px hover:border-white/40 hover:bg-white/[0.06] hover:shadow-[0_0_24px_rgba(255,106,0,0.12)]'

export default function Hero() {
  const [showSphere, setShowSphere] = useState(() => (typeof window === 'undefined' ? true : window.innerWidth > 767))

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const onQueryChange = (event) => setShowSphere(!event.matches)

    setShowSphere(!mobileQuery.matches)

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', onQueryChange)
      return () => mobileQuery.removeEventListener('change', onQueryChange)
    }

    mobileQuery.addListener(onQueryChange)
    return () => mobileQuery.removeListener(onQueryChange)
  }, [])

  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-16 px-8 py-24 max-[1100px]:grid-cols-1 max-md:px-4 max-md:py-16">
      <div className="text-left">
        <p className="mb-6 text-[0.74rem] uppercase tracking-[0.18em] text-[#f5f1e8b8]">
          DEVELOPER, BUILDER, PROBLEM SOLVER.
        </p>

        <h1 className="mb-7 max-w-[15ch] font-serif text-[clamp(3rem,5vw,4.8rem)] font-normal leading-[0.98] max-md:max-w-none max-md:text-[clamp(2.55rem,12vw,3.3rem)]">
          I build interactive experiences that make the web{' '}
          <AnimatedGradient className="inline-block translate-y-[0.04em] italic leading-[0.96]">
            feel alive
          </AnimatedGradient>
          .
        </h1>

        <p className="mb-8 max-w-[34rem] text-[1.03rem] leading-[1.8] text-[#f5f1e8b8]">
          I combine code, design and AI to build things that are useful, playful and a little unexpected.
        </p>

        <div className="flex flex-wrap gap-4 max-md:flex-col max-md:items-start">
          <a href="#work" className={primaryButtonClass}>
            VIEW MY WORK -&gt;
          </a>
          <a href="mailto:danielkolpakov00@gmail.com" className={secondaryButtonClass}>
            contact
          </a>
        </div>
      </div>

      {showSphere ? (
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative w-full overflow-visible py-10 max-md:py-4">
            <div
              className="pointer-events-none absolute -inset-x-28 -inset-y-28 blur-[70px]"
              style={{ background: 'radial-gradient(ellipse at center, rgba(255,124,56,0.16) 0%, rgba(194,113,49,0.08) 34%, rgba(245,241,232,0.026) 54%, rgba(10,10,10,0) 78%)' }}
            />
            <div
              className="pointer-events-none absolute -inset-x-20 -inset-y-16 opacity-70 blur-[48px]"
              style={{ background: 'radial-gradient(ellipse at center, rgba(255,160,88,0.09), rgba(10,10,10,0) 70%)' }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 h-[460px] -translate-y-1/2 blur-[34px] max-md:h-[360px]"
              style={{ background: 'radial-gradient(ellipse at center, rgba(255,106,0,0.055), rgba(10,10,10,0) 76%)' }}
            />
            <div className="relative z-[1] h-[620px] w-[118%] -ml-[9%] overflow-visible max-[1100px]:h-[560px] max-[1100px]:w-[110%] max-[1100px]:-ml-[5%] max-md:h-[450px] max-md:w-[106%] max-md:-ml-[3%]">
              <ParticleSphere />
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <p className="m-0 text-[0.78rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">MOVE MOUSE</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
