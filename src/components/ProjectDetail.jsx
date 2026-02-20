import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../constants";
import { AiOutlineArrowLeft, AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [activeSection, setActiveSection] = useState(null);
  const [readProgress, setReadProgress] = useState(0);

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setReadProgress(scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = useMemo(() => {
    if (!project?.details) return [];
    return project.details
      .filter((d) => d.type === "heading" || d.type === "subheading")
      .map((d, i) => ({ id: `sec-${i}`, text: d.content, level: d.type === "heading" ? 1 : 2 }));
  }, [project]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id));
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  const scrollTo = (secId) => {
    document.getElementById(secId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center pt-24">
        <div className="text-center space-y-4">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-white">Project not found</h1>
          <p className="text-gray-500">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mt-2">
            <AiOutlineArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  let secIdx = 0;
  const renderBlock = (block, i) => {
    if (block.type === "heading") {
      const sid = `sec-${secIdx++}`;
      return (
        <div key={i} className="mt-14 mb-5">
          <h2
            id={sid}
            className="text-2xl font-bold text-white scroll-mt-28 flex items-center gap-3"
          >
            <span className="w-1 h-6 rounded-full bg-teal-400 inline-block flex-shrink-0" />
            {block.content}
          </h2>
          <div className="h-px bg-gradient-to-r from-teal-500/30 via-white/10 to-transparent mt-3" />
        </div>
      );
    }
    if (block.type === "subheading") {
      const sid = `sec-${secIdx++}`;
      return (
        <h3
          id={sid}
          key={i}
          className="text-lg font-semibold text-teal-300 mt-8 mb-3 scroll-mt-28"
        >
          {block.content}
        </h3>
      );
    }
    if (block.type === "paragraph") {
      const text = Array.isArray(block.content)
        ? block.content.map((p, j) =>
            typeof p === "string"
              ? p
              : p.type === "link"
              ? <a key={j} href={p.style?.href} target="_blank" rel="noopener noreferrer" className="text-teal-400 underline underline-offset-2 hover:text-teal-300">{p.content}</a>
              : <strong key={j} className="text-white font-semibold">{p.content}</strong>
          )
        : block.content;
      return (
        <p key={i} className="text-gray-400 leading-7 mb-4 text-[15px]">
          {text}
        </p>
      );
    }
    if (block.type === "point") {
      const items = String(block.content).split(",").map((s) => s.trim()).filter(Boolean);
      return (
        <ul key={i} className="space-y-2 mb-5 ml-1">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-400 text-[15px]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    }
    if (block.type === "image") {
      return (
        <figure key={i} className="my-8">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/40">
            <img
              src={block.src}
              alt={block.alt || ""}
              className="w-full max-w-2xl mx-auto block"
            />
          </div>
          {block.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }
    if (block.type === "mediaRow" && Array.isArray(block.content)) {
      return (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {block.content.map((item, j) => (
            <figure key={j} className="rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/30">
              {item.type === "image"
                ? <img src={item.src} alt={item.alt || ""} className="w-full object-cover" />
                : <iframe src={item.src} title="Video" className="w-full aspect-video" allowFullScreen />
              }
              {item.caption && (
                <figcaption className="text-sm text-gray-500 px-3 py-2 bg-white/[0.03]">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-teal-400 z-50 transition-[width] duration-150"
        style={{ width: `${readProgress}%` }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-24">
        {/* Back navigation */}
        <nav className="mb-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-400 transition-colors text-sm group"
          >
            <AiOutlineArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Projects
          </Link>
        </nav>

        <article className="flex flex-col lg:flex-row lg:gap-14">

          {/* Main content */}
          <main className="flex-1 min-w-0">

            {/* Project hero card */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] mb-10 shadow-2xl shadow-black/40">
              {/* Banner image */}
              {project.image && (
                <div className="h-52 sm:h-64 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              )}

              {/* Info panel */}
              <div className="p-6 sm:p-8">
                {project.duration && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-4">
                    {project.duration}
                  </span>
                )}

                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h1>

                <p className="text-gray-400 leading-relaxed mb-6 text-[15px]">
                  {project.content}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-slate-800 text-gray-300 border border-white/10 font-medium"
                    >
                      {t.icon && typeof t.icon !== "string" && (
                        <t.icon className="text-teal-400 text-sm" />
                      )}
                      {t.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium transition-colors"
                    >
                      <AiOutlineGithub className="text-base" /> GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-gray-300 text-sm font-medium transition-colors"
                    >
                      <AiOutlineLink className="text-base" /> Live / Report
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Article body */}
            <div className="prose-custom">
              {project.details.map(renderBlock)}
            </div>
          </main>

          {/* Sidebar TOC */}
          {toc.length > 0 && (
            <aside className="lg:w-56 flex-shrink-0 order-first lg:order-last">
              <nav className="lg:sticky lg:top-28 pb-8 lg:pb-0">
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
                  On this page
                </p>
                <ul className="space-y-0.5">
                  {toc.map(({ id, text, level }) => (
                    <li key={id} style={{ paddingLeft: level === 2 ? "0.875rem" : 0 }}>
                      <button
                        onClick={() => scrollTo(id)}
                        className={`text-left text-sm w-full py-1.5 px-2.5 -mx-2.5 rounded-lg transition-colors duration-150 truncate block leading-snug ${
                          activeSection === id
                            ? "text-teal-400 font-medium bg-teal-500/10 border-l-2 border-teal-400 pl-3"
                            : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {text}
                      </button>
                    </li>
                  ))}
                </ul>

              </nav>
            </aside>
          )}
        </article>
      </div>
    </div>
  );
};

export default ProjectDetail;
