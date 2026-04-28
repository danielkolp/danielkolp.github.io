import { Link } from 'react-router-dom'
import { MdConstruction } from 'react-icons/md'
import Grainient from './Granient'
import graffitiGame1 from '../assets/images/graffitigame1.png'
import cratesImage from '../assets/images/crates.png'
const actionLinkClass =
  'relative inline-flex w-fit items-center gap-2 pb-1 text-[0.78rem] uppercase tracking-[0.14em] text-[#f5f1e8] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-[0.2] after:bg-[linear-gradient(90deg,#ff6a00,#00b7ff)] after:transition-transform after:duration-200 hover:after:scale-x-100'

const bentoSizeById = {
  '01': 'md:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[560px]',
  '02': 'md:col-span-2 lg:col-span-2 lg:min-h-[270px]',
  '03': 'lg:col-span-1',
  '04': 'lg:col-span-1',
}

const cardClass =
  'group relative isolate flex min-h-[250px] overflow-hidden border border-white/10 bg-white/[0.012] p-6 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#ff6a0057] hover:bg-[#ff6a000d] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18),0_0_28px_rgba(255,106,0,0.08)] lg:p-8'

const constructionCardClass =
  'group relative isolate flex min-h-[250px] overflow-hidden border border-white/10 bg-white/[0.012] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[#ff6a0057] hover:bg-[#ff6a000d] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18),0_0_28px_rgba(255,106,0,0.08)] lg:p-8'

function BentoProjectCard({ project, featured = false }) {
  const isUnderConstruction = project.underConstruction === true

  if (isUnderConstruction) {
    return (
      <div className={`${constructionCardClass} ${bentoSizeById[project.id] ?? ''}`} aria-label="Under construction">
        <div className="absolute inset-0">
          <Grainient
          color1="#ff6a00"
          color2="#00b7ff"
          color3="#f5f1e8"
            timeSpeed={0.2}
            warpStrength={1}
            warpFrequency={4.1}
            warpSpeed={1.55}
            warpAmplitude={46}
            blendAngle={-10}
            blendSoftness={0.08}
            rotationAmount={300}
            noiseScale={2}
            grainAmount={0.08}
            grainScale={2}
            grainAnimated={false}
            contrast={1.34}
            gamma={1}
            saturation={1.42}
            centerX={0}
            centerY={0}
            zoom={0.93}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12)_0%,rgba(10,10,10,0.52)_46%,rgba(10,10,10,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,241,232,0.12),transparent_36%)]" />

        <div className="relative z-10 flex min-h-full w-full flex-col items-center justify-center gap-4 text-center">
          <MdConstruction className="h-16 w-16 text-[#f5f1e8] transition duration-200 group-hover:text-[#ff6a00]" aria-hidden="true" />
          <p className="m-0 text-[0.78rem] uppercase tracking-[0.18em] text-[#f5f1e8d9] opacity-0 transition duration-200 group-hover:opacity-100">
            Under construction
          </p>
        </div>
      </div>
    )
  }

  return (
    <Link to={`/project/${project.id}`} className={`${cardClass} ${bentoSizeById[project.id] ?? ''}`}>
      <div className="absolute inset-0">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover" />
        ) : (
          <Grainient
            timeSpeed={featured ? 0.2 : 0.22}
            warpStrength={1}
            warpFrequency={featured ? 3.9 : 4.2}
            warpSpeed={featured ? 1.55 : 1.7}
            warpAmplitude={featured ? 46 : 44}
            blendAngle={featured ? -14 : -10}
            blendSoftness={0.08}
            rotationAmount={featured ? 280 : 320}
            noiseScale={2}
            grainAmount={featured ? 0.07 : 0.08}
            grainScale={2}
            grainAnimated={false}
            contrast={featured ? 1.32 : 1.35}
            gamma={1}
            saturation={featured ? 1.4 : 1.45}
            centerX={0}
            centerY={0}
            zoom={featured ? 0.92 : 0.93}
          />
        )}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.48)_44%,rgba(10,10,10,0.9)_100%)] transition duration-200 group-hover:bg-[linear-gradient(180deg,rgba(10,10,10,0.02)_0%,rgba(10,10,10,0.36)_42%,rgba(10,10,10,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,241,232,0.16),transparent_34%)] opacity-70" />

      <div className="relative z-10 flex min-h-full w-full flex-col justify-between gap-10">
        <div className="flex items-start justify-between gap-4">
          <p className="m-0 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8]">{project.id}</p>
          {featured ? (
            <p className="m-0 text-right text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">FEATURED PROJECT</p>
          ) : null}
        </div>

        <div className={featured ? 'max-w-[34rem]' : 'max-w-[24rem]'}>
          <h3 className={`mb-3 font-serif font-normal leading-[1.02] ${featured ? 'text-[clamp(2.6rem,5vw,4.75rem)]' : 'text-[clamp(1.7rem,2.6vw,2.3rem)]'}`}>
            {project.title}
          </h3>
          <p className={`mb-4 text-[#f5f1e8d9] ${featured ? 'max-w-[30rem] text-[1.05rem] leading-[1.75]' : 'text-[0.98rem] leading-[1.65]'}`}>
            {project.description}
          </p>
          <p className="mb-6 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">
            {project.technologies.join(' / ')}
          </p>
          <span className={actionLinkClass}>VIEW PROJECT -&gt;</span>
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedWork() {
  const projects = [
    {
      id: '01',
      featured: true,
      title: 'Graffiti Game',
      description: 'A 3D graffiti game built with React Three Fiber. Explore, tag and leave your mark.',
      technologies: ['REACT', 'THREE.JS', 'WEBGL'],
      image: graffitiGame1,
    },
    {
      id: '02',
      title: 'Crates',
      description: 'Music discovery app that ranks underground tracks using engagement and rarity signals from YouTube data.',
      technologies: ['REACT', 'YOUTUBE DATA'],
      image: cratesImage,
    },
    {
      id: '03',
      title: 'Prompt Lab',
      description: 'AI prompt generator for faster, better results.',
      technologies: ['REACT', 'NEXT.JS'],
      underConstruction: true,
    },
    {
      id: '04',
      title: 'Frame Shift',
      description: 'Interactive motion experiments for web storytelling.',
      technologies: ['GSAP', 'WEBGL'],
      underConstruction: true,
    },
  ]

  const featured = projects[0]
  const secondary = projects.slice(1)

  return (
    <section id="work" className="mx-auto max-w-[1400px] border-t border-white/10 px-8 py-24 max-md:px-4 max-md:py-16">
      <div className="mb-8 flex items-end justify-between gap-4 max-md:flex-col max-md:items-start">
        <h2 className="m-0 text-[0.76rem] uppercase tracking-[0.18em] text-[#f5f1e8b8]">FEATURED WORK</h2>
        <a href="#work" className={actionLinkClass}>
          VIEW ALL PROJECTS -&gt;
        </a>
      </div>

      <div className="grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <BentoProjectCard project={featured} featured />
        {secondary.map((project) => (
          <BentoProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
