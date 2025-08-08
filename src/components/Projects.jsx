import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Project = (props) => {
  const handleIconClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-glass border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          src={props.image}
          alt={props.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Tech Stack Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {props.stack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-xs rounded-full border border-blue-500/30 shadow-lg"
              >
                {tech.name}
              </span>
            ))}
            {props.stack.length > 3 && (
              <span className="px-2 py-1 bg-gray-500/20 backdrop-blur-sm text-gray-300 text-xs rounded-full border border-gray-500/30 shadow-lg">
                +{props.stack.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
              {props.title}
            </h3>
            <p className="text-sm text-gray-400 mb-2">{props.duration}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {props.content}
        </p>

        {/* Tech Stack Icons */}
        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {props.stack.map((tech, index) => (
              <div
                key={index}
                className="group/tech relative"
                title={tech.name}
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/tech:bg-blue-500/20 group-hover/tech:border-blue-500/30 group-hover/tech:scale-110 shadow-lg hover:shadow-xl">
                  {typeof tech.icon === "string" ? (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                    />
                  ) : (
                    React.createElement(tech.icon, { size: 20 })
                  )}
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 shadow-lg">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {props.github && (
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleIconClick}
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <AiFillGithub size={20} />
              </a>
            )}
            {props.link && (
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleIconClick}
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <BsLink45Deg size={20} />
              </a>
            )}
          </div>
          
          <Link
            to={`/projects/${props.id}`}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Explore my latest work and innovative solutions that showcase my expertise in robotics, software development, and engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <button className="btn-secondary text-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
