import { GitBranch, Gauge, Settings } from "lucide-react";
import nextjs from "../assets/Next.js.png";
import react from "../assets/React.png";
import typescript from "../assets/TypeScript.png";
import javascript from "../assets/JavaScript.png";
import tailwind from "../assets/Tailwind CSS.png";
import bootstrap from "../assets/Bootstrap.png";
import html from "../assets/HTML5.png";
import css from "../assets/CSS3.png";
import vite from "../assets/Vite.png";
import postman from "../assets/Postman.png";
import restApi from "../assets/cloud-api.png";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "React", img: react },
    { name: "Next.js", img: nextjs },
    { name: "TypeScript", img: typescript },
    { name: "JavaScript", img: javascript },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "Tailwind CSS", img: tailwind },
    { name: "Bootstrap", img: bootstrap },
    { name: "Git", icon: GitBranch },
    { name: "Vite", img: vite },
    { name: "Postman", img: postman },
    { name: "Responsive Design", icon: Settings },
    { name: "REST APIs", img: restApi },
    { name: "Performance Optimization", icon: Gauge },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("skills.headingPrefix")}{" "}
            <span className="bg-gradient-to-r from-blue-600 dark:text-white to-cyan-600 bg-clip-text text-transparent">
              {t("skills.heading")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center p-6 bg-indigo-100 dark:bg-slate-900/40 border border-transparent hover:border-white/10 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden">
                      {IconComponent ? (
                        <IconComponent className="text-white" size={32} />
                      ) : (
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="w-10 h-10 object-contain"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-60 transition-all duration-300 -z-10 group-hover:scale-150" />
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white text-center group-hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base">
                    {skill.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
