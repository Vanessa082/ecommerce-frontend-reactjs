import { useState, type ComponentProps } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { Logo, SearchField } from "../atoms";
import { cn } from "../../utils/utils";

interface NavItem {
  text: string;
  href: string;
}

const NavItem: NavItem[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Sale",
    href: "/a",
  },
  {
    text: "New Arrival",
    href: "/d",
  },
  {
    text: "About",
    href: "/e",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  return (
    <header className="w-app-w mx-auto flex bg-red justify-between items-center py-2 font-lato">
      <Logo className="hidden md:flex" />

      <nav className="hidden md:flex items-center justify-center w-fit gap-10">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="text-white text-base font-semibold"
          >
            Category
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-between items-center gap-8 md-lg:hidden">
          {NavItem.map(({ text, href }) => (
            <Link key={text} to={href}>
              <span className="font-semibold text-base cursor-pointer text-white">
                {text}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="md:hidden flex justify-between items-center gap-24">
        <Logo />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          className="md:hidden md-lg:flex text-primary"
        >
          {isMenuOpen ? (
            <FaTimes className="h-[55px] w-[25px]" />
          ) : (
            <FaBars className="h-[55px] w-[25px]" />
          )}
        </button>

        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-60 z-40">
            <div className="fixed top-0 left-0 w-3/4 sm:w-2/4 md:w-1/3 h-full bg-white shadow-lg z-50">
              <div className="flex flex-col p-6">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="self-end"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                <nav className="text-primary">
                  <ul className="flex flex-col space-y-6 text-lg font-bold font-playfair">
                    {NavItem.map(({ text, href }) => (
                      <li key={text}>
                        <Link
                          to={href}
                          className="text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                    <li>Login</li>
                    <li>Cart</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center gap-8">
        <SearchField />

        <div className="hidden md:flex text-white gap-8">
          <FaUser />
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
}

function HeaderProvider({
  children,
  className,
  ...otherProps
}: ComponentProps<"div">) {
  return (
    <div
      {...otherProps}
      className={cn("w-full flex flex-col gap-7", className)}
    >
      <Header />
      {children}
    </div>
  );
}

export { Header, HeaderProvider };
