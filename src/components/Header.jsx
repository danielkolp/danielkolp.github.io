import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const navLinks = [
  { to: '/#work', label: 'WORK' },
  { to: '/about', label: 'ABOUT' },
  { to: '/#experiments', label: 'EXPERIMENTS' },
  // Removed JOURNAL and TOOLS tabs per request
  { to: '/#contact', label: 'CONTACT' },
]

const navLinkClass =
  'relative pb-1 text-[0.78rem] uppercase tracking-[0.14em] text-[#f5f1e8b8] transition-colors duration-200 hover:text-[#f5f1e8] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#ff6a00,#00b7ff)] after:transition-transform after:duration-200 hover:after:scale-x-100'
const activeNavLinkClass = `${navLinkClass} text-[#f5f1e8] after:scale-x-100`

export default function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0ac7] backdrop-blur-[18px]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-8 py-5 max-md:px-4">
        <Link to="/" className="inline-flex items-center">
          <img src={logo} alt="Daniel Kolpakov logo" className="h-8 w-auto object-contain invert" />
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-8 max-md:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={item.to === '/about' && location.pathname === '/about' ? activeNavLinkClass : navLinkClass}
              aria-current={item.to === '/about' && location.pathname === '/about' ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/#contact"
          className="inline-flex items-center justify-center border border-white/25 bg-transparent px-5 py-3 text-[0.78rem] uppercase tracking-[0.14em] text-[#f5f1e8] transition duration-200 hover:border-[#ff6a0080] hover:bg-[#ff6a0014] hover:shadow-[0_0_28px_rgba(255,106,0,0.12)]"
        >
          LET&apos;S BUILD -&gt;
        </Link>
      </div>
    </header>
  )
}
