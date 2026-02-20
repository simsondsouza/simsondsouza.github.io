import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../constants";
import { AiOutlineArrowRight } from "react-icons/ai";

/* Estimate reading time from content blocks */
const readingTime = (post) => {
  if (!post.content) return null;
  const words = post.content
    .filter((b) => b.type === "paragraph")
    .map((b) => (Array.isArray(b.content) ? b.content.join(" ") : String(b.content)))
    .join(" ")
    .split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

/* ── Featured Card ── */
const FeaturedCard = ({ post }) => {
  const isInternal = post.slug && post.content;
  const CardWrapper = isInternal ? Link : "a";
  const cardProps = isInternal
    ? { to: `/blog/${post.slug}` }
    : { href: post.link, target: "_blank", rel: "noopener noreferrer" };
  const time = readingTime(post);

  return (
    <CardWrapper
      {...cardProps}
      className="group relative flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/40 transition-colors duration-200 bg-slate-900 shadow-xl shadow-black/40"
    >
      {/* Left: Image */}
      <div className="md:w-2/5 h-52 md:h-auto flex-shrink-0 overflow-hidden bg-slate-800">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-200"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-between p-7 md:p-10 flex-1">
        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="px-2.5 py-0.5 text-xs rounded-full bg-teal-500/15 border border-teal-500/25 text-teal-300 font-medium"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors duration-200 leading-snug mb-4">
          {post.title}
        </h2>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mt-auto">
          <span>{post.date}</span>
          {time && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-600 inline-block" />
              <span>{time}</span>
            </>
          )}
        </div>

        {/* Read more */}
        <div className="mt-6 pt-5 border-t border-white/8">
          <span className="inline-flex items-center gap-2 text-sm text-teal-400 font-medium group-hover:gap-3 transition-[gap] duration-200">
            Read article <AiOutlineArrowRight />
          </span>
        </div>
      </div>
    </CardWrapper>
  );
};

/* ── Standard Card ── */
const BlogCard = ({ post }) => {
  const isInternal = post.slug && post.content;
  const CardWrapper = isInternal ? Link : "a";
  const cardProps = isInternal
    ? { to: `/blog/${post.slug}` }
    : { href: post.link, target: "_blank", rel: "noopener noreferrer" };
  const time = readingTime(post);

  return (
    <CardWrapper
      {...cardProps}
      className="group flex flex-col rounded-xl overflow-hidden border border-white/10 hover:border-teal-500/30 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200 shadow-lg shadow-black/20"
    >
      {/* Thumbnail */}
      <div className="h-44 overflow-hidden bg-slate-900 flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-200"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-0.5 text-xs rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors duration-200 leading-snug mb-3 flex-1">
          {post.title}
        </h3>

        <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto pt-3 border-t border-white/8">
          <span>{post.date}</span>
          {time && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-700 inline-block" />
              <span>{time}</span>
            </>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

/* ── Page ── */
const BlogPage = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-slate-950">

      {/* Page header */}
      <div className="pt-28 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-400 mb-5">
            Articles &amp; Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Blog</h1>
          <p className="text-gray-400 text-base max-w-lg">
            Thoughts and updates on robotics, AI, and engineering.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {blogPosts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No posts yet. Check back soon!</div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <div className="mb-14">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
                  Featured Post
                </p>
                <FeaturedCard post={featured} />
              </div>
            )}

            {/* Remaining posts */}
            {rest.length > 0 && (
              <>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
                  More Posts
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
