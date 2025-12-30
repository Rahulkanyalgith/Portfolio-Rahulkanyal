import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

// Add your blog post links here
const blogLinks = [
  {
    title: "Building Scalable Web Applications with Next.js",
    platform: "Medium",
    link: "https://medium.com/@yourhandle", // Replace with your actual blog link
    icon: "📝"
  },
  {
    title: "Getting Started with AI and Large Language Models",
    platform: "Dev.to",
    link: "https://dev.to/yourhandle", // Replace with your actual blog link
    icon: "🤖"
  },
  {
    title: "Modern CSS Techniques and Best Practices",
    platform: "Hashnode",
    link: "https://hashnode.com/@yourhandle", // Replace with your actual blog link
    icon: "🎨"
  }
];

export default function Blog() {
  return (
    <section className="w-full py-20 px-6 md:px-12" id="blog">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              04.&nbsp;
            </span>
            <span className="text-white">Blog & Articles</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Check out my latest articles on web development, AI, and tech
          </p>
        </div>

        {/* Blog Links */}
        <div className="space-y-4">
          {blogLinks.map((blog, index) => (
            <Link
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/50 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-3xl">{blog.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text transition-all duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{blog.platform}</p>
                  </div>
                </div>
                <FiExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-zinc-400">
            Want to read more?{" "}
            <Link
              href="https://medium.com/@yourhandle" // Replace with your main blog link
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-fuchsia-400 font-semibold transition-colors"
            >
              Visit my blog →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
