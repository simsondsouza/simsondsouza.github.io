import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { AiOutlineArrowLeft, AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id.toString() === id);

  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    return () => {
      document.documentElement.style.scrollBehavior = prev || "smooth";
    };
  }, []);

  // Build TOC from first heading 'Project Overview' onward
  const toc = useMemo(() => {
    if (!project) return [];
    const items = [];
    let headingCount = 0;
    let started = false;
    project.details.forEach((d) => {
      if (d.type === "heading" || d.type === "subheading") {
        const isOverview = typeof d.content === "string" && d.content.toLowerCase().includes("project overview");
        if (isOverview) started = true;
        if (!started) return;
        headingCount += 1;
        items.push({ level: d.type === "heading" ? 1 : 2, text: d.content, id: `sec-${headingCount}` });
      }
    });
    return items;
  }, [project]);

  // Scroll spy active id
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: [0, 1.0] }
    );
    toc.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  const waitAndScrollHome = (sectionId) => {
    navigate("/");
    const start = Date.now();
    const tryScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        scrollToSection(sectionId);
      } else if (Date.now() - start < 2000) {
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center pt-24">
        <div className="text-center bg-glass rounded-2xl p-8 border border-white/10 shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-white">Project not found!</h1>
          <button className="btn-primary inline-flex items-center gap-2" onClick={() => waitAndScrollHome("projects")}>
            <AiOutlineArrowLeft /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  let headingIndex = 0;
  const renderDetail = (detail, index) => {
    const alignment = detail.align || "left";
    const spacing = detail.spacing || "1.6";
    const indentation = detail.indentation || "0";
    const captionStyle = {
      fontSize: detail.captionFontSize || "1rem",
      fontStyle: detail.captionFontStyle || "normal",
      color: detail.captionColor || "white",
    };

    switch (detail.type) {
      case "heading": {
        headingIndex += 1;
        const idAttr = `sec-${headingIndex}`;
        return (
          <h2 id={idAttr} key={index} className="mb-6 text-gradient text-3xl font-bold">
            {detail.content}
          </h2>
        );
      }
      case "subheading": {
        headingIndex += 1;
        const idAttr = `sec-${headingIndex}`;
        return (
          <h3 id={idAttr} key={index} className="mb-4 text-white font-semibold text-2xl">
            {detail.content}
          </h3>
        );
      }
      case "paragraph":
        return (
          <p key={index} className="mb-6 text-gray-300 leading-relaxed" style={{ fontSize: detail.fontSize || "1rem", textAlign: alignment, lineHeight: spacing, textIndent: indentation }}>
            {Array.isArray(detail.content) ? detail.content.map((part, idx) => (typeof part === "string" ? <span key={idx}>{part}</span> : part.type === "bold" ? <b key={idx} className="text-white font-semibold">{part.content}</b> : part.type === "italic" ? <i key={idx} className="text-gray-300 italic">{part.content}</i> : part.type === "underline" ? <u key={idx} className="text-white underline">{part.content}</u> : part.type === "link" ? <a key={idx} href={part.style.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{part.content}</a> : null)) : detail.content}
          </p>
        );
      case "point": {
        const points = detail.content.split(",");
        return (
          <ul key={index} className="mb-6 space-y-2">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                <span>{p.trim()}</span>
              </li>
            ))}
          </ul>
        );
      }
      case "image":
        return (
          <div key={index} className="flex justify-center mb-8">
            <div className="bg-glass rounded-2xl p-4 border border-white/10 shadow-xl max-w-4xl">
              <img src={detail.src} alt={detail.alt || "Image"} className="rounded-xl w-full h-auto object-contain mx-auto" style={{ maxHeight: detail.height || "600px" }} />
              {detail.caption && (
                <p className="mt-4 text-gray-300 italic text-center" style={captionStyle}>
                  {detail.caption}
                </p>
              )}
            </div>
          </div>
        );
      case "mediaRow":
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {detail.content.map((item, idx) => (
              <div key={idx} className="bg-glass rounded-2xl p-4 border border-white/10 shadow-xl">
                {item.type === "image" ? (
                  <img src={item.src} alt={item.alt || "Media"} className="rounded-xl w-full h-auto object-contain" style={{ maxHeight: item.height || "400px" }} />
                ) : (
                  <iframe width="100%" height={item.height || "220px"} src={item.src} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl"></iframe>
                )}
                {item.caption && (
                  <p className="mt-4 text-gray-300 italic text-center" style={{ fontSize: detail.captionFontSize || "1rem" }}>
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const handleTocClick = (id) => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = prev || "smooth";
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main content */}
          <main className="lg:col-span-8">
            <div className="mb-6">
              <button className="btn-secondary inline-flex items-center gap-2" onClick={() => waitAndScrollHome("projects")}>
                <AiOutlineArrowLeft /> Back to Projects
              </button>
            </div>
            <div className="bg-glass rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{project.title}</h1>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.content}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-glass border border-white/10 rounded-lg hover:bg-glass-hover transition-all text-white inline-flex items-center gap-2">
                    <AiOutlineGithub /> GitHub
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-glass border border-white/10 rounded-lg hover:bg-glass-hover transition-all text-white inline-flex items-center gap-2">
                    <AiOutlineLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
            <div className="space-y-8">{project.details.map(renderDetail)}</div>
          </main>
          {/* TOC Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-glass rounded-2xl p-6 border border-white/10 shadow-xl">
              <h4 className="text-white font-semibold mb-4">On this page</h4>
              <nav className="space-y-2">
                {toc.length === 0 && <p className="text-gray-400 text-sm">No sections</p>}
                {toc.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTocClick(item.id)}
                    className={`block text-left w-full text-sm transition-colors duration-200 ${
                      item.level === 1 ? "pl-0" : "pl-4"
                    } ${activeId === item.id ? "text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    {item.text}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
