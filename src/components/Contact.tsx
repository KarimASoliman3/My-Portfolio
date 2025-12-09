import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef} from "react";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3765e8u', 'template_9r5g4vf', form.current!, {
        publicKey: 'W7dPQVIdnQRjPTSCb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          if (form.current) {
            toast.success('Message sent successfully!');
            form.current.reset();
          }
        },
        (error: any) => {
          toast.error('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
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
      title: "Email",
      value: "karimsolimanfcb10@gmail.com",
      link: "mailto:karimsolimanfcb10@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+201010731125",
      link: "tel:+201010731125",
    },

    {
      icon: MapPin,
      title: "Location",
      value: "Cairo EG",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slideInLeft">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {info.title}
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
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
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
