import { Link } from 'react-router-dom'

const actionLinkClass =
  'relative inline-flex w-fit items-center gap-2 pb-1 text-[0.78rem] uppercase tracking-[0.14em] text-[#f5f1e8] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-[0.2] after:bg-[linear-gradient(90deg,#ff6a00,#00b7ff)] after:transition-transform after:duration-200 hover:after:scale-x-100'

export default function About() {
  const skills = [
    'React / Next.js',
    'Three.js / WebGL',
    'GSAP / motion',
    'OpenAI API',
    'Web Audio API',
    'Figma / Adobe tools',
  ]

  return (
    <section id="about" className="mx-auto max-w-[1400px] border-t border-white/10 px-8 py-24 max-md:px-4 max-md:py-16">
      <div className="grid grid-cols-2 gap-16 max-[1100px]:grid-cols-1">
        <div className="text-left">
          <p className="mb-3 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">ABOUT ME</p>

          <h2 className="mb-5 font-serif text-[2.8rem] font-normal leading-[1.08] max-md:text-[2.25rem]">
            I’m not interested in normal
            <br />
            I’m interested in building <span className="italic text-[#ff6a00]">better.</span>
          </h2>

          <p className="mb-7 max-w-[36rem] text-[1rem] leading-[1.85] text-[#f5f1e8b8]">
            I&apos;m Daniel, a Vancouver-based developer and designer who graduated from BCIT&apos;s New Media Design and Web Development program. I enjoy doing weird experiments on the web and building things that you need.
          </p>

          <Link to="/about" className={actionLinkClass}>
            MORE ABOUT ME -&gt;
          </Link>
        </div>

        <div>
          <p className="mb-4 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">THINGS I REACH FOR</p>

          <div className="grid gap-3">
            {skills.map((skill, index) => (
              <p
                key={skill}
                className={`m-0 border-l-2 pl-4 text-[0.96rem] tracking-[0.02em] text-[#f5f1e8] ${
                  index % 2 === 0 ? 'border-[#ff6a00]' : 'border-[#00b7ff]'
                }`}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}