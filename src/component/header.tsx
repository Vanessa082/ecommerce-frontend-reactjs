import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
interface NavItem {
  text: string;
  href: string;
}

const NavItem: NavItem[] = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Product",
    href: "/a"
  },
  {
    text: "Faq",
    href: "/d"
  },
  {
    text: "Contact",
    href: "/e"
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  return (
    <header className="w-full flex  bg-red justify-between items-center py-2 px-6">
      <img src="/logo.png" alt="app logo" className="h-[55px]" />
      <nav className="hidden md:flex items-center justify-center w-fit gap-20">
        {
          NavItem.map(({ text, href }) => (
            <Link key={text} to={href}>
              <span className="text-app-blue-900 font-semibold text-base cursor-pointer hover:text-app-orange-900">{text}</span>
            </Link>
          ))
        }
      </nav>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation" className="md:hidden text-app-grey-900">
        {isMenuOpen ? (
          <FaTimes className="h-[55px] w-[25px]" />
        ) : (
          <FaBars className="h-[55px] w-[25px]" />
        )}
      </button>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-app-blue-900 bg-opacity-60 z-40">
          <div className="fixed top-0 left-0 w-3/4 sm:w-2/4 md:w-1/3 h-full bg-white shadow-lg z-50">
            <div className="flex flex-col p-6">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="self-end mb-8"
              >
                <FaTimes className="h-6 w-6" />
              </button>
              <nav>
                <ul className="flex flex-col space-y-6 text-lg font-bold">
                  {NavItem.map(({ text, href }) => (
                    <li key={text}>
                      <Link
                        to={href}
                        className="text-app-blue-900 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}