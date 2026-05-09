import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3765e8u", "template_9r5g4vf", form.current!, {
        publicKey: "W7dPQVIdnQRjPTSCb",
      })
      .then(
        () => {
          if (form.current) {
            toast.success(t("common.messageSentSuccess"));
            form.current.reset();
          }
        },
        (error: unknown) => {
          toast.error(t("common.messageSendFailed"));
          console.log("FAILED...", (error as { text?: string })?.text);
        },
      );
  };
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const contactInfo = [
    {
      icon: Mail,
      titleKey: "contact.labels.email" as const,
      value: "karimsolimanfcb10@gmail.com",
      link: "mailto:karimsolimanfcb10@gmail.com",
    },
    {
      icon: Phone,
      titleKey: "contact.labels.phone" as const,
      value: "+201010731125",
      link: "tel:+201010731125",
    },

    {
      icon: MapPin,
      titleKey: "contact.labels.location" as const,
      value: "Cairo EG",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t("contact.heading")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300  max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {t("contact.infoHeading")}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.titleKey}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {t(info.titleKey)}
                      </h4>
                      <p className="text-slate-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* <div
              className="p-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl text-white animate-fadeInUp"
              style={{ animationDelay: "300ms" }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Let's Build Something Great
              </h3>
              <p className="leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </div> */}
          </div>

          <div className="animate-slideInRight">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-slate-700 font-medium mb-2"
                >
                  {t("contact.fields.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder={t("contact.placeholders.name")}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-700 font-medium mb-2"
                >
                  {t("contact.fields.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder={t("contact.placeholders.email")}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-slate-700 font-medium mb-2"
                >
                  {t("contact.fields.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder={t("contact.placeholders.message")}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {t("common.sendMessage")}
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
