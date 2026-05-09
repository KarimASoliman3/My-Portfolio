import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeLanguageToggle from "./ThemeLanguageToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-4 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-950/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              {t("common.portfolio")}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className="text-slate-700 dark:text-slate-200 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {t(`nav.${item.key}` as const)}
                <span className="absolute bottom-0 left-0 rtl:right-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <ThemeLanguageToggle />
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn bg-white dark:bg-slate-950 h-[40vh] text-center rounded-b-2xl transition-colors duration-500">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block font-medium py-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-50 px-4 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(`nav.${item.key}` as const)}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
