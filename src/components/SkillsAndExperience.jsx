import React from "react";
import { experiences, skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";

export const SkillIcon = ({ icon, name }) => {
  const isImage = typeof icon === "string";

  return (
    <motion.div 
      className="flex flex-col items-center group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative p-4 rounded-xl bg-glass border border-white/10 transition-all duration-300 group-hover:bg-glass-hover group-hover:shadow-lg mb-3">
        {isImage ? (
          <img
            src={icon}
            alt={name}
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="text-white text-[40px] transition-colors duration-300 group-hover:text-blue-400 block">
            {React.createElement(icon, { className: "h-full w-full" })}
          </span>
        )}
      </div>
      <p className="font-poppins text-gray-300 text-[12px] group-hover:text-white transition-colors duration-300 text-center max-w-[80px] leading-tight">{name}</p>
    </motion.div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="mt-4 mb-6 bg-glass rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="flex flex-row items-center mb-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {props.title}
        </h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {props.items.map((item, index) => (
          <SkillIcon key={item.id} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-gray-300 mt-4 leading-relaxed">
        {text}{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="mb-8 bg-glass rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Adjusted spacing and alignment */}
      <div className="flex flex-row items-start mb-6">
        <div className="relative flex-shrink-0">
          <img
            src={props.logo}
            alt={props.organisation}
            className="w-[52px] h-[52px] rounded-full z-[2] mr-4 border-2 border-white/20 shadow-lg object-contain bg-white p-1"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] mb-1">
            {props.organisation}
          </h4>
          {props.link && (
            <a 
              href={props.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-1"
            >
              Visit Website 
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <div className="space-y-6">
        {props.positions.map((position, index) => (
          <div
            key={index}
            className="relative p-4 bg-glass/50 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Role Title in White */}
            <h3 className="text-lg font-semibold text-white mb-2">
              {position.title}
            </h3>
            <time className="mb-3 text-sm font-normal leading-none text-blue-300 block">
              {position.duration}
            </time>
            <div className="space-y-3">
              {position.content.map((content, contentIndex) => (
                <Content key={contentIndex} {...content} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsAndExperience = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Skills & Experience
          </h2>
          <p className="section-subtitle">
            My technical expertise and professional journey in robotics, software development, and engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              Professional Experience
            </h3>
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.organisation} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
