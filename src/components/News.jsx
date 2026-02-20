import React from "react";

const newsItems = [
  {
    id: 1,
    date: "Nov 2025",
    emoji: "🚀",
    text: (
      <>
        Successfully completed the{" "}
        <a
          href="https://mrsdprojects.ri.cmu.edu/2025teami/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors duration-200"
        >
          MRSD Capstone Project
        </a>{" "}
        at Carnegie Mellon University.
      </>
    ),
  },
  {
    id: 2,
    date: "Aug 2025",
    emoji: "💼",
    text: (
      <>
        Completed a summer internship as a Machine Learning Engineer Intern at{" "}
        <a
          href="https://aim.vision/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors duration-200"
        >
          AIM Intelligent Machines
        </a>
        , Redmond, WA.
      </>
    ),
  },
  {
    id: 3,
    date: "Aug 2024",
    emoji: "🎓",
    text: "Began master's studies at the CMU Robotics Institute.",
  },
  {
    id: 4,
    date: "Apr 2023",
    emoji: "🏆",
    text: "Graduated from Hindustan Institute of Technology and Science, Chennai, with a degree in Mechatronics Engineering and Honors in Satellite Technology.",
  },
];

const News = () => (
  <section id="news" className="py-14 bg-slate-950 px-6">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
          News
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-teal-500/40 to-transparent" />
      </div>

      {/* Vertical list */}
      <div className="flex flex-col gap-4">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-teal-500/30 transition-colors duration-200 px-5 py-4"
          >
            {/* Emoji */}
            <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>

            {/* Date + text */}
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-2.5 py-0.5 inline-block mb-2">
                {item.date}
              </span>
              <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default News;
