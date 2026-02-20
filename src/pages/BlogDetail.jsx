import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../constants";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [slug]);

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

  if (!post || !post.content) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
            <AiOutlineArrowLeft /> Back to Blog
          </Link>
          <p className="text-gray-400">Post not found or has no content.</p>
        </div>
      </div>
    );
  }

  const renderBlock = (block, i) => {
    if (block.type === "heading") {
      return (
        <div key={i} className="mt-12 mb-5">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-1 h-6 rounded-full bg-teal-400 inline-block flex-shrink-0" />
            {block.content}
          </h2>
          <div className="h-px bg-gradient-to-r from-teal-500/30 via-white/10 to-transparent mt-3" />
        </div>
      );
    }
    if (block.type === "subheading") {
      return (
        <h3 key={i} className="text-xl font-semibold text-teal-300 mt-8 mb-3">
          {block.content}
        </h3>
      );
    }
    if (block.type === "paragraph") {
      return (
        <p key={i} className="text-gray-400 leading-7 mb-4 text-[15px]">
          {block.content}
        </p>
      );
    }
    if (block.type === "gif" || block.type === "image") {
      return (
        <figure key={i} className="mt-8 mb-3">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/40 bg-slate-900">
            <img
              src={block.src}
              alt={block.alt || ""}
              className="w-full max-w-2xl mx-auto block"
            />
          </div>
        </figure>
      );
    }
    if (block.type === "caption") {
      return (
        <p key={i} className="text-center text-sm text-gray-500 mt-2 mb-10 italic">
          {block.content}
        </p>
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

      <div className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-teal-400 mb-10 transition-colors text-sm group"
          >
            <AiOutlineArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-10 pb-10 border-b border-white/10">
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((t) => (
                  <span
                    key={t.id}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-teal-500/15 border border-teal-500/25 text-teal-300 font-medium"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-sm text-gray-500">{post.date}</p>
          </header>

          {/* Hero image */}
          {post.image && (
            <div className="rounded-xl overflow-hidden border border-white/10 mb-10 shadow-xl shadow-black/40">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 sm:h-72 object-cover opacity-80"
              />
            </div>
          )}

          {/* Body */}
          <div>
            {post.content.map(renderBlock)}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
