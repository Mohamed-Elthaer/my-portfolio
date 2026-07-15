import { IoIosMenu } from "react-icons/io";
import { Button } from "../component/Button";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  //   { href: "#testimonials", label: "Testimonials" },
];
export default function Navbar() {
  const [inmobilMenu, setinmobilMenu] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handlescrolle = () => {
      setisScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescrolle);
    return () => window.addEventListener("scroll", handlescrolle);
  }, []);
  return (
    <header
      className={`fixed z-50 top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} `}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <button className="text-xl font-bold tracking-tight hover:text-primary cursor-pointer">
          ME<span className="text-primary">.</span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-forgeground hover:text-foreground rounded-full duration-300 hover:bg-surface cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Me
          </Button>
        </div>

        <button
          className="md:hidden p-2  text-foreground cursor-pointer"
          onClick={() => setinmobilMenu((prev) => !prev)}
        >
          {inmobilMenu ? <FaTimes size={24} /> : <IoIosMenu size={24} />}
        </button>
      </nav>

      {inmobilMenu && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setinmobilMenu(false)}
                className="text-lg text-muted-forgeground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setinmobilMenu(false)
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
