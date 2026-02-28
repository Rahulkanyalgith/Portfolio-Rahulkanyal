import { BsBriefcase, BsCalendar3, BsGeoAlt } from "react-icons/bs";

const experiences = [
  {
    company: "BimaScore by Alps Insurance",
    role: "Backend Developer Intern",
    location: "New Delhi, India",
    period: "Jan 2026 – Present",
    current: true,
    description:
      "Developed AI-powered backend services using RAG, integrated multiple insurance provider APIs for real-time data, automated workflows with Zoho Creator, and designed a scalable PostgreSQL database to support efficient system performance.",
    technologies: ["RAG", "PostgreSQL", "Zoho Creator", "REST APIs", "AI/ML"],
  },
  {
    company: "HackWithIndia",
    role: "Technical Team Lead",
    location: "Remote, India",
    period: "Jan 2025 – Apr 2025",
    current: false,
    description:
      "Maintained and improved the HackWithIndia website by collaborating with teams, fixing bugs, and enhancing UI/UX to ensure smooth performance during the event. Designed a microservice-based architecture with caching and handled production issues to keep the platform stable during high traffic.",
    technologies: ["Microservices", "Caching", "UI/UX", "Node.js", "DevOps"],
  },
];

export default function Experience() {
  return (
    <section
      className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden"
      id="experience"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-600/[0.05] to-cyan-600/[0.03] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-fuchsia-600/[0.04] to-purple-600/[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="mb-16 md:mb-20 text-center text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            02.&nbsp;
          </span>
          <span className="text-white">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-fuchsia-500/20 to-transparent" />

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16 md:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-[14px] md:left-[22px] top-1 z-10">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110 ${
                      exp.current
                        ? "border-violet-400 bg-violet-500/20 shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                        : "border-zinc-600 bg-zinc-800 group-hover:border-violet-400 group-hover:bg-violet-500/10"
                    }`}
                  >
                    <BsBriefcase
                      className={`h-3 w-3 ${
                        exp.current
                          ? "text-violet-300"
                          : "text-zinc-400 group-hover:text-violet-300"
                      } transition-colors duration-300`}
                    />
                  </div>
                  {/* Pulse ring for current role */}
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full border-2 border-violet-400/40 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className="relative rounded-2xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 p-6 md:p-8 transition-all duration-500 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1">
                  {/* Top row: Role + Badge */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="space-y-1.5">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-base md:text-lg font-semibold bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">
                      <BsCalendar3 className="h-3.5 w-3.5 text-zinc-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BsGeoAlt className="h-3.5 w-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Thin divider */}
                  <div className="h-px w-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-transparent mb-5" />

                  {/* Description */}
                  <p className="text-zinc-400 text-[15px] md:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-200 hover:bg-violet-500/10 hover:border-violet-500/20 hover:text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
