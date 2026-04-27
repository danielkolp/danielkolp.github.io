import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projects'

const labelClass = 'text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]'
const surfaceClass = 'border border-white/10 bg-white/[0.015]'
const imagePlaceholderClass =
  'grid min-h-[320px] place-items-center border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),rgba(255,255,255,0.02)_68%)] font-serif text-[3rem] text-[#f5f1e8b8]'

export default function ProjectPage() {
  const { id } = useParams()
  const currentProject = projectsData[id] || projectsData['01']
  const otherProjects = Object.values(projectsData)
    .filter((project) => project.id !== currentProject.id)
    .slice(0, 2)

  return (
    <div className="w-full">
      <section className="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-12 border-b border-white/10 px-8 py-20 max-[1100px]:grid-cols-1 max-md:px-4 max-md:py-16">
        <div>
          <p className={`mb-4 ${labelClass}`}>{currentProject.year}</p>
          <h1 className="mb-4 font-serif text-[clamp(3rem,5vw,4.6rem)] font-normal leading-[0.98]">{currentProject.title}</h1>
          <p className="mb-6 max-w-[42rem] text-[1.08rem] leading-[1.8] text-[#f5f1e8b8]">{currentProject.subtitle}</p>

          <div className="flex flex-wrap gap-3">
            {currentProject.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-white/10 bg-white/[0.02] px-3 py-2 text-[0.72rem] uppercase tracking-[0.14em]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={imagePlaceholderClass}>
          {currentProject.image ? (
            <img src={currentProject.image} alt={`${currentProject.title} preview`} className="h-full w-full object-cover" />
          ) : (
            currentProject.id
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 py-16 max-md:px-4 max-md:py-12">
        <div className="grid gap-6">
          <h2 className="m-0 text-[0.76rem] uppercase tracking-[0.18em] text-[#f5f1e8b8]">OVERVIEW</h2>
          {(currentProject.overviewParagraphs || [
            currentProject.fullDescription,
            `${currentProject.details[0].text} ${currentProject.details[1].text}`,
          ]).map((paragraph) => (
            <p key={paragraph} className="m-0 max-w-[58rem] text-[1.08rem] leading-[2] text-[#f5f1e8b8]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 py-20 max-md:px-4 max-md:py-16">
        <div className="grid grid-cols-[1fr_280px] gap-12 max-[1100px]:grid-cols-1">
          <div className="grid gap-12">
            <div className="grid min-h-[420px] place-items-center overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_center,rgba(0,183,255,0.14),rgba(255,255,255,0.02)_68%)] font-serif text-[3rem] text-[#f5f1e8b8] max-md:min-h-[260px]">
              {currentProject.detailImage ? (
                <img src={currentProject.detailImage} alt={`${currentProject.title} detail`} className="h-full w-full object-cover" />
              ) : (
                currentProject.id
              )}
            </div>

            <div className="grid gap-6">
              {currentProject.details.map((detail) => (
                <article key={detail.label} className={`${surfaceClass} p-6`}>
                  <h3 className={`mb-3 block ${labelClass}`}>{detail.label}</h3>
                  <p className="m-0 max-w-[52rem] text-[1rem] leading-[1.95] text-[#f5f1e8b8]">{detail.text}</p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
              {currentProject.gallery.map((item, index) => {
                if (item?.type === 'video') {
                  return (
                    <div
                      key={`gallery-${index}`}
                      className="min-h-[220px] overflow-hidden border border-white/10 bg-black max-md:min-h-[260px]"
                    >
                      <video
                        className="h-full w-full object-cover"
                        src={item.src}
                        title={item.title}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    </div>
                  )
                }

                return (
                  <div
                    key={`gallery-${index}`}
                    className="grid min-h-[220px] place-items-center border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,139,0,0.12),rgba(255,255,255,0.02)_68%)] text-[1rem] uppercase tracking-[0.14em] text-[#f5f1e8b8] max-md:min-h-[260px]"
                  >
                    Gallery {index + 1}
                  </div>
                )
              })}
            </div>
          </div>

          <aside className="sticky top-24 grid h-fit gap-4 self-start max-[1100px]:static">
            <div className={`${surfaceClass} p-5`}>
              <h4 className={`mb-3 ${labelClass}`}>ROLE</h4>
              <p className="m-0 text-[0.95rem] text-[#f5f1e8b8]">{currentProject.role}</p>
            </div>

            <div className={`${surfaceClass} p-5`}>
              <h4 className={`mb-3 ${labelClass}`}>YEAR</h4>
              <p className="m-0 text-[0.95rem] text-[#f5f1e8b8]">{currentProject.year}</p>
            </div>

            <div className={`${surfaceClass} p-5`}>
              <h4 className={`mb-3 ${labelClass}`}>TECHNOLOGIES</h4>
              <div className="grid gap-2">
                {currentProject.technologies.map((tech) => (
                  <p key={tech} className="m-0 border-b border-white/10 pb-2 text-[0.86rem] text-[#f5f1e8b8] last:border-b-0 last:pb-0">
                    {tech}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={currentProject.link}
              className="inline-flex items-center justify-center border border-[#ff6a0057] bg-[#ff6a0014] px-4 py-4 text-[0.78rem] uppercase tracking-[0.14em] transition duration-200 hover:bg-[#ff6a0024] hover:shadow-[0_0_22px_rgba(255,106,0,0.12)]"
            >
              VISIT PROJECT -&gt;
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] border-t border-white/10 px-8 py-20 max-md:px-4 max-md:py-16">
        <h2 className="mb-8 text-[0.76rem] uppercase tracking-[0.18em] text-[#f5f1e8b8]">MORE PROJECTS</h2>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {otherProjects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="group">
              <article className="h-full border border-white/10 bg-white/[0.015] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[#ff6a0057] hover:bg-[#ff6a000d]">
                <div className="mb-5 grid min-h-[220px] place-items-center border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),rgba(255,255,255,0.02)_68%)] font-serif text-[2rem] text-[#f5f1e8b8]">
                  {project.id}
                </div>
                <h3 className="mb-3 font-serif text-[1.8rem] font-normal leading-[1.1]">{project.title}</h3>
                <p className="m-0 text-[#f5f1e8b8] leading-[1.75]">{project.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
