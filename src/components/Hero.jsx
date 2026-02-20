import LetsConnect from "./LetsConnect";
import { aboutMe, resumeLink } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { profilePic } from "../assets";

const Hero = () => {
  const handleViewWork = () => scrollToSection("projects");
  const handleViewCV = () => window.open(resumeLink, "_blank");

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 sm:px-10 pt-24 pb-20">
      <div className="w-full max-w-6xl mx-auto">

        {/* Two-column row: text left, photo right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-sm text-teal-400 font-medium">
              Available for opportunities
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-teal-400">{aboutMe.name}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg">
              {aboutMe.intro}
            </p>

            <div className="flex flex-wrap gap-4 pt-1">
              <button
                onClick={handleViewWork}
                className="px-7 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold transition-colors duration-200"
              >
                View My Work
              </button>
              <button
                onClick={handleViewCV}
                className="px-7 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 font-semibold transition-colors duration-200"
              >
                View Resume
              </button>
            </div>

            <div className="flex gap-12 pt-2">
              <div>
                <div className="text-2xl font-bold text-teal-400">1+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-400">4+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
            </div>
          </div>

          {/* Right: Profile photo — square with smooth rounded corners */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-2xl shadow-teal-500/20 ring-1 ring-white/10">
              <img
                src={profilePic}
                alt={aboutMe.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* LetsConnect — centered below the two-column row */}
        <div className="flex justify-center mt-12">
          <LetsConnect />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-600 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
