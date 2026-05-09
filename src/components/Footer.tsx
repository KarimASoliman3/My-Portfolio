import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const FOOTER_LINKS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white pt-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("footer.portfolioName")}
            </h3>
            <p className="max-w-[320px] text-slate-400 leading-relaxed dark:text-slate-300">
              {t("footer.description")}
            </p>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "100ms" }}>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 rtl:pl-0 rtl:pr-1 pl-1">
              {FOOTER_LINKS.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 rtl:hover:translate-x-[-1rem]"
                  >
                    {t(`nav.${item.key}` as const)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "200ms" }}>
            <h4 className="text-lg font-semibold mb-4 flex rtl:flex-row-reverse rtl:justify-center">
              {t("footer.connect")}
            </h4>
            <div className="flex gap-4 rtl:flex-row-reverse">
              <a
                href="https://github.com/KarimASoliman3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/karim-soliman-a45a1a1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:karimsolimanfcb10@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col justify-center items-center animate-fadeIn">
          <p className="text-slate-400 text-sm text-center sm:text-left rtl:sm:text-right dark:text-slate-300">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300 font-medium text-[16px]">
              KarimASoliman3
            </span>{" "}
            Frontend Developer. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
