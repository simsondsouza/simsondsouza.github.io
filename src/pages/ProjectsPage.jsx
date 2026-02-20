import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

const ProjectCard = (props) => (
  <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all duration-300">
    <div className="relative overflow-hidden rounded-t-xl">
      <img
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        src={props.image}
        alt={props.title}
      />
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
        {props.stack.slice(0, 3).map((tech, i) => (
          <span key={i} className="px-2 py-0.5 bg-black/50 text-teal-300 text-xs rounded">
            {tech.name}
          </span>
        ))}
        {props.stack.length > 3 && (
          <span className="px-2 py-0.5 bg-black/50 text-gray-400 text-xs rounded">
            +{props.stack.length - 3}
          </span>
        )}
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-white mb-2">{props.title}</h3>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{props.content}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {props.github && (
            <a href={props.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-teal-500/20 text-gray-400 hover:text-teal-400 transition-colors">
              <AiFillGithub size={18} />
            </a>
          )}
          {props.link && (
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-teal-500/20 text-gray-400 hover:text-teal-400 transition-colors">
              <BsLink45Deg size={18} />
            </a>
          )}
        </div>
        <Link
          to={`/projects/${props.id}`}
          className="text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="min-h-screen bg-slate-950 pt-24 pb-16">
    <div className="container mx-auto px-6 max-w-6xl">
      <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
      <p className="text-gray-400 mb-12">
        A collection of my robotics and software projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;
