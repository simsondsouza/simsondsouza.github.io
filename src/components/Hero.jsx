import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe, resumeLink } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  const handleViewWork = () => {
    scrollToSection("projects");
  };

  const handleViewCV = () => {
    // Redirect to Google Drive link
    window.open(resumeLink, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi there! I'm</span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {aboutMe.name}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              {aboutMe.intro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleViewWork}
                className="btn-primary text-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button 
                onClick={handleViewCV}
                className="btn-secondary text-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                View Resume
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">1+</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">4+</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Main Animation */}
              <div className="relative z-10 animate-scale-in">
                <Lottie {...defaultOptions} className="w-full h-auto max-w-lg" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-bounce-gentle"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
              
              {/* Glowing Ring */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Social Links - Mobile */}
        <div className="lg:hidden flex justify-center mt-12">
          <LetsConnect />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

