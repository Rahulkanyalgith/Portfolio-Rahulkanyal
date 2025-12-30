"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "./BlogData";
import { FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/50 transition-all duration-500 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/20">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={400}
          height={200}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 backdrop-blur-md text-white border border-white/20">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <FiCalendar className="w-3.5 h-3.5" />
            <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiClock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text transition-all duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <div className="pt-4">
          <Link
            href={`/blog/${post.id}`}
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition-all duration-300 hover:text-fuchsia-400"
          >
            <span>Read Article</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5" />
      </div>
    </article>
  );
}
