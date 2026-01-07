import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const scrollToElement = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (!element) return;

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("TEDxBVCOE26");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 


  const navItems = ["speakers", "tickets", "partners", "team", "faqs", "contact"];

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-glass shadow-2xl py-3" : "bg-transparent py-6"
        } hidden lg:flex justify-between items-center px-8`}
      >
        <div className="flex items-center gap-8">
          {navItems.slice(0, 4).map((id) => (
            <button
              key={id}
              onClick={() => scrollToElement(id, 120)}
              className="nav-link text-foreground text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
            >
              {id === "team" ? "Our Team" : id}
            </button>
          ))}
        </div>

        <h1 className=" absolute left-[45%] text-2xl font-bold gradient-text" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
              TEDxBVCOE
         </h1>


        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToElement("faqs", 120)}
            className="nav-link text-foreground text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToElement("contact", 120)}
            className="nav-link text-foreground text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
          >
            Contact
          </button>

         
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass lg:hidden flex items-center justify-between px-4 py-4">
        <h1 className="text-xl font-bold gradient-text font-space">TEDxBVCOE</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] navbar-glass transition-all duration-300 ease-out`}
        >
          <ul className="flex flex-col items-center pt-8 space-y-6">
            {navItems.map((id) => (
              <button
                key={id}
                onClick={() => {
                  scrollToElement(id, 100);
                  setIsOpen(false);
                }}
                className="text-foreground font-semibold uppercase tracking-wider hover:text-primary transition-colors"
              >
                {id === "team" ? "Our Team" : id}
              </button>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
