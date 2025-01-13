import React from "react";
import { experiences, skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";

export const SkillIcon = ({ icon, name }) => {
  const isImage = typeof icon === "string";

  return (
    <div className="flex flex-col items-center">
      {isImage ? (
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-110 hover:filter hover:brightness-125"
        />
      ) : (
        <span className="text-white text-[32px] transition-colors duration-300 hover:text-teal-200">
          {React.createElement(icon, { className: "h-full w-full" })}
        </span>
      )}
      <p className="font-poppins text-dimWhite text-[12px] mt-2">{name}</p>
    </div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="mt-4 mb-6 border-l border-gray-200 dark:border-gray-700 mx-4"
    >
      <div className="relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="flex flex-row items-center mb-6 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {props.title}
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-8 ml-8">
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
      <p className="font-poppins font-normal text-[14px] text-dimWhite mt-4">
        {text}{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg
              size="1rem"
              className="inline hover:text-teal-200"
            ></BsLink45Deg>
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
      className="mb-8"
    >
      {/* Adjusted spacing and alignment */}
      <div className="flex flex-row items-center mb-6">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[52px] h-[52px] rounded-full z-[2] mr-4" // Added margin-right
        />
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {props.organisation}
        </h4>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            {/* Role Title in White */}
            <h3 className="text-lg font-semibold text-white">
              {position.title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {position.duration}
            </time>
            {/* Bulleted points with text-dimWhite for bullet color */}
            <ul className="list-disc ml-6 mt-2 space-y-2 text-dimWhite text-justify">
              {position.content.map((info, index) => (
                <li key={index}>
                  <Content key={index} index={index} {...info} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};


const SkillsAndExperience = () => {
  return (
    <section id="skills" className="mb-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Skills & Experience
      </h1>
      <div className={layout.section}>
        {/* Skills */}
        <motion.div className={`ml-2 mb-6 ${layout.sectionInfo}`}>
          {skills.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div className="flex flex-1 items-center justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
