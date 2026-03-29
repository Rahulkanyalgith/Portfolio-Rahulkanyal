import Link from "next/link";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

// Add your blog post links here
const blogLinks = [
  {
    title: "DSA imp. algo to used",
    description: "Essential data structures and algorithms for coding interviews and problem solving",
    platform: "Notion",
    link: "https://medium.com/@yourhandle",
    date: "Jan 2026",
    readTime: "10 min read",
  },
  {
    title: "Operating System imp. topics",
    description: "Key operating system concepts including process management, memory, and scheduling",
    platform: "Notion",
    link: "https://rahulkanyal.hashnode.dev/operating-system-imp-topics",
    date: "Dec 2025",
    readTime: "15 min read",
  },
  {
    title: "SQL Imp. Topics",
    description: "Important SQL queries, joins, and database operations you need to know",
    platform: "Notion",
    link: "https://rahulkanyal.hashnode.dev/sql-imp-topics",
    date: "Nov 2025",
    readTime: "8 min read",
  },
  {
    title: "DBMS full Revision Imp. Topics",
    description: "Complete DBMS revision covering normalization, transactions, and indexing",
    platform: "Notion",
    link: "https://rahulkanyal.hashnode.dev/dbms-full-revision-imp-topics",
    date: "Oct 2025",
    readTime: "20 min read",
  }
];

export default function Blog() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" id="blog">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-violet-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20 mb-6">
            <FiBookOpen className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Blog & Articles</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Insights & </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Learnings</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed">
            Writing about web development, AI, and the craft of building exceptional software
          </p>
        </div>

        {/* Blog Cards */}
        <div className="space-y-4">
          {blogLinks.map((blog, index) => (
            <Link
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              {/* Card */}
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm transition-all duration-500 group-hover:bg-slate-800/50 group-hover:border-slate-700/50 group-hover:shadow-2xl group-hover:shadow-violet-500/5">
                {/* Gradient line on left */}
                <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-violet-500/50 via-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number indicator */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/50 text-slate-500 font-mono text-sm font-bold transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-blue-500 group-hover:border-transparent group-hover:text-white group-hover:scale-105 flex-shrink-0">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pl-0 sm:pl-2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/25">
                      {blog.platform}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{blog.date}</span>
                    <span className="hidden sm:inline text-slate-700">•</span>
                    <span className="hidden sm:inline text-xs text-slate-500">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-violet-200">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 sm:line-clamp-1">
                    {blog.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 transition-all duration-300 group-hover:bg-violet-500 group-hover:border-violet-400 group-hover:scale-110 group-hover:-rotate-12">
                  <FiArrowUpRight className="w-4 h-4 text-slate-400 transition-all duration-300 group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      
      </div>
    </section>
  );
}
