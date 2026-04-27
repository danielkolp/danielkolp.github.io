import { Link } from 'react-router-dom'

const ctaButtonClass =
  'inline-flex items-center justify-center border border-white/25 bg-transparent px-5 py-3 text-[0.78rem] uppercase tracking-[0.14em] text-[#f5f1e8] transition duration-200 hover:border-[#ff6a0080] hover:bg-[#ff6a0014] hover:shadow-[0_0_28px_rgba(255,106,0,0.12)]'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-8 py-20 max-md:px-4 max-md:py-16" id="contact">
      <div className="mx-auto max-w-[1400px]">
        <div className="group mb-16 flex items-end justify-between gap-8 border-b border-white/10 pb-16 max-md:flex-col max-md:items-start">
          <h2 className="max-w-[16ch] font-serif text-[clamp(2rem,4vw,2.8rem)] font-normal leading-[1.1] max-md:max-w-none">
            Got a{' '}
            <span className="relative inline-block after:absolute after:bottom-[0.08em] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-[0.18] after:bg-[linear-gradient(90deg,#ff6a00,#00b7ff)] after:transition-transform after:duration-200 group-hover:after:scale-x-100">
              weird
            </span>{' '}
            idea? Let&apos;s build it.
          </h2>
          <a href="mailto:contact@example.com" className={ctaButtonClass}>
            LET&apos;S CONNECT -&gt;
          </a>
        </div>

        <div className="mb-8 grid grid-cols-[1.1fr_0.7fr_1fr] gap-12 max-[1100px]:grid-cols-1">
          <div className="text-left">
            <p className="mb-3 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">NAVIGATE</p>
            <Link to="/" className="mb-3 inline-block font-serif text-[2rem] tracking-[0.08em]">
              d.
            </Link>
            <p className="mb-6 max-w-[24ch] text-[#f5f1e8b8] leading-[1.8]">
              Building things on the web that are useful, beautiful and a little unexpected.
            </p>
            <ul className="m-0 grid list-none gap-3 p-0 text-[#f5f1e8b8]">
              <li><Link to="/#work" className="transition-colors duration-200 hover:text-[#f5f1e8]">Work</Link></li>
              <li><Link to="/about" className="transition-colors duration-200 hover:text-[#f5f1e8]">About</Link></li>
              <li><Link to="/#experiments" className="transition-colors duration-200 hover:text-[#f5f1e8]">Experiments</Link></li>
              {/* Journal and Tools links removed from footer navigation */}
              <li><Link to="/#contact" className="transition-colors duration-200 hover:text-[#f5f1e8]">Contact</Link></li>
            </ul>
          </div>

          <div className="text-left">
            <p className="mb-3 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">CONNECT</p>
            <ul className="m-0 flex list-none gap-4 p-0">
              <li>
                <a
                  href="#"
                  title="GitHub"
                  className="inline-flex h-[42px] w-[42px] items-center justify-center border border-white/10 text-[#f5f1e8b8] transition duration-200 hover:border-[#ff6a0057] hover:bg-[#ff6a000f] hover:text-[#f5f1e8]"
                >
                  GH
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="LinkedIn"
                  className="inline-flex h-[42px] w-[42px] items-center justify-center border border-white/10 text-[#f5f1e8b8] transition duration-200 hover:border-[#ff6a0057] hover:bg-[#ff6a000f] hover:text-[#f5f1e8]"
                >
                  in
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="X"
                  className="inline-flex h-[42px] w-[42px] items-center justify-center border border-white/10 text-[#f5f1e8b8] transition duration-200 hover:border-[#ff6a0057] hover:bg-[#ff6a000f] hover:text-[#f5f1e8]"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Email"
                  className="inline-flex h-[42px] w-[42px] items-center justify-center border border-white/10 text-[#f5f1e8b8] transition duration-200 hover:border-[#ff6a0057] hover:bg-[#ff6a000f] hover:text-[#f5f1e8]"
                >
                  @
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <p className="mb-3 text-[0.74rem] uppercase tracking-[0.16em] text-[#f5f1e8b8]">STAY IN THE LOOP</p>
            <div className="mb-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 border border-white/10 bg-white/[0.02] px-4 py-3 text-[#f5f1e8] placeholder:text-[#f5f1e8b8] focus:border-[#ff6a0080] focus:outline-none"
              />
              <button
                type="button"
                className="border border-white/10 bg-transparent px-4 py-3 text-[#f5f1e8] transition duration-200 hover:border-[#ff6a0057] hover:bg-[#ff6a000f]"
              >
                -&gt;
              </button>
            </div>
            <p className="m-0 text-[#f5f1e8b8] leading-[1.8]">
              Thoughts on code, design, AI and whatever I&apos;m currently obsessed with.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-[0.84rem] text-[#f5f1e8b8]">
          <p className="m-0">(c) 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
