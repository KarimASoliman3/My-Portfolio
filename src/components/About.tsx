import { useTranslation } from "react-i18next";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Code2,
      titleKey: "about.features.cleanCode",
      descriptionKey: "about.features.cleanCodeDesc",
    },
    {
      icon: Lightbulb,
      titleKey: "about.features.creativeSolutions",
      descriptionKey: "about.features.creativeSolutionsDesc",
    },
    {
      icon: Rocket,
      titleKey: "about.features.fastPerformance",
      descriptionKey: "about.features.fastPerformanceDesc",
    },
    {
      icon: Users,
      titleKey: "about.features.teamPlayer",
      descriptionKey: "about.features.teamPlayerDesc",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("about.heading")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t("about.paragraph1")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-slideInUp">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {t("about.paragraph2")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className="p-6 bg-slate-50 dark:bg-slate-900/40 border border-transparent dark:border-white/5 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
