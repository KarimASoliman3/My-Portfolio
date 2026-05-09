import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import img from "../assets/k.jpg";

// Easy to update later
const CV_PATH = "/assets/cv/Karim-CV.pdf";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-[112px] px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            {/* <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-bounce">
                Welcome to my portfolio
              </span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-300 transition-colors leading-tight">
              {t("hero.titlePrefix")}{" "}
              {/* <span className="font-semibold">{"Karim"}</span> */}
              <span className="sr-only"> {t("hero.titleRole")}</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t("hero.titleRole")}
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("common.viewWork")}
              </a>

              <div>
                {/* Download CV (icon + RTL-safe layout) */}
                <a
                  href={CV_PATH}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("common.downloadCv")}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/20 transition-all duration-300 ease-out hover:translate-y-[-1px] hover:shadow-xl hover:shadow-blue-600/35 active:translate-y-[0px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/60 dark:focus-visible:ring-offset-slate-950/60 overflow-hidden"
                  onClick={(e) => {
                    // Robust download: try download via `download` attribute;
                    // fallback opens in a new tab if the browser blocks downloads.
                    // If download isn't supported, `download` may be ignored.
                    // We keep target="_blank" as an additional fallback.
                    // Prevent only if user wants to handle manually.
                    // (No preventDefault here to allow normal anchor behavior.)
                    void e;
                  }}
                >
                  {/* glow */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-r from-white/20 via-white/10 to-transparent group-hover:opacity-100"
                  />

                  <span className="inline-flex items-center gap-3 rtl:flex-row-reverse">
                    <span
                      aria-hidden="true"
                      className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/15 backdrop-blur border border-white/15"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </span>
                    <span className="whitespace-nowrap">
                      {t("common.downloadCv")}
                    </span>
                  </span>

                  <span className="sr-only">Download CV</span>
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4" dir="ltr">
              <a
                href="https://github.com/KarimASoliman3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-slate-900/40 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github
                  className="text-slate-900 dark:text-slate-100"
                  size={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/karim-soliman-a45a1a1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-slate-900/40 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin
                  className="text-blue-600 dark:text-blue-300"
                  size={24}
                />
              </a>
              <a
                href="mailto:karimsolimanfcb10@gmail.com"
                className="p-3 bg-white/90 dark:bg-slate-900/40 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail
                  className="text-slate-900 dark:text-slate-100"
                  size={24}
                />
              </a>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <img
                    src={img}
                    alt={t("hero.titleRole")}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-700 rounded-full animate-float shadow-lg"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full animate-float-delayed shadow-lg"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <a
            href="#about"
            className="p-2 rounded-full bg-white/90 dark:bg-slate-900/40 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={t("hero.scrollToAbout")}
          >
            <ArrowDown
              className="text-slate-900 dark:text-slate-100"
              size={24}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
