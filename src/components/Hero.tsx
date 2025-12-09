import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import img from '../assets/k.jpg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-[112px] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            {/* <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium animate-bounce">
                Welcome to my portfolio
              </span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Hi, I'm{' Karim '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
              Passionate about clean code and innovative solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg font-medium hover:bg-slate-900 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Contact US
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/KarimASoliman3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <Github className="text-slate-900" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/karim-soliman-a45a1a1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="text-blue-600" size={24} />
              </a>
              <a
                href="mailto:karimsolimanfcb10@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <Mail className="text-slate-900" size={24} />
              </a>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-slate-100 rounded-full overflow-hidden">
                  <img
                    src={img}
                    alt="Frontend Developer"
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
          <a href="#about" className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <ArrowDown className="text-slate-900" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
