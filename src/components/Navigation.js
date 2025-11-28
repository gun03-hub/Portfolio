import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "resume", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/90 backdrop-blur-xl border-b border-dark-700/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink
          to="/"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold text-lg">
            G
          </div>
          <span className="text-xl font-display font-semibold text-white group-hover:text-primary-400 transition-colors">
            Gunjan<span className="text-primary-400">.</span>
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? "active text-primary-400" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/gun03-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gunjan-arora-4248462a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-primary text-sm"
          >
            Let's Talk
          </button>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-xl border-b border-dark-700/50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-2 ${
                  activeSection === item.id
                    ? "text-primary-400"
                    : "text-dark-300 hover:text-white"
                } transition-colors`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-dark-700">
              <a
                href="https://github.com/gun03-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/gunjan-arora-4248462a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
