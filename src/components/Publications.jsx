import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const publications = [
  {
    id: "pub-1",
    title: "Development of Interactive Visual Recognition Assistant Bot",
    conference: "IEEE International Conference on Artificial Intelligence and Knowledge Discovery in Concurrent Engineering (ICECONF) 2023",
    year: "2023",
    publisher: "IEEE",
    link: "https://ieeexplore.ieee.org/document/10084243/",
  },
];

const Publications = () => (
  <section id="publications" className="py-20 bg-slate-950 px-6">
    <div className="max-w-6xl mx-auto">

      {/* Section header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Publications
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Peer-reviewed research contributions in AI, robotics, and computer vision.
        </p>
      </div>

      {/* Publication cards */}
      <div className="flex flex-col gap-5">
        {publications.map((pub) => (
          <a
            key={pub.id}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center gap-5 rounded-xl border border-white/10 hover:border-teal-500/30 bg-white/[0.03] hover:bg-white/[0.06] p-6 transition-colors duration-200"
          >
            {/* IEEE badge */}
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold text-sm">
              IEEE
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-base sm:text-lg leading-snug group-hover:text-teal-300 transition-colors duration-200 mb-2">
                {pub.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {pub.conference}
              </p>
            </div>

            {/* Year + link icon */}
            <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/10 border border-teal-500/20 text-teal-400">
                {pub.year}
              </span>
              <AiOutlineLink className="text-gray-600 group-hover:text-teal-400 transition-colors duration-200 text-lg" />
            </div>
          </a>
        ))}
      </div>

    </div>
  </section>
);

export default Publications;
