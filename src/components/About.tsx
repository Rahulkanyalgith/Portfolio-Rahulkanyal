import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "@/components/Aceternity/background-gradient";

/* eslint-disable react/no-unescaped-entities */
function About() {
	return (
		<section className="relative w-full overflow-hidden py-28 md:py-36 px-6 md:px-10">
			{/* Ambient background glow — same palette as Hero */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-600/[0.07] to-fuchsia-600/[0.05] blur-[120px]"></div>
				<div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-cyan-600/[0.06] to-purple-600/[0.04] blur-[120px]"></div>
			</div>

			<div className="mx-auto max-w-6xl">
				{/* Section Header — matches Skills section numbering style */}
				<h2 className="mb-16 md:mb-20 text-center text-4xl md:text-5xl font-bold">
					<span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
						01.&nbsp;
					</span>
					<span className="text-white">About Me</span>
				</h2>

				{/* Two-column layout */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

					{/* Image — 5 columns */}
					<div className="lg:col-span-5 flex justify-center">
						<BackgroundGradient
							className="relative z-10"
							containerClassName="rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-violet-500/20"
						>
							<div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 p-[3px]">
								<Image
									alt="Rahul Kanyal"
									width={460}
									height={560}
									loading="lazy"
									className="h-[400px] md:h-[460px] w-full object-cover object-top rounded-2xl"
									src="/about.jpg"
								/>
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
							</div>
						</BackgroundGradient>
					</div>

					{/* Content — 7 columns */}
					<div className="lg:col-span-7 flex flex-col gap-8">

						{/* Name & Role */}
						<div className="space-y-3">
							<h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
								Rahul Kanyal
							</h3>
							<p className="text-base md:text-lg font-semibold bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
								Full Stack Developer &bull; AI Enthusiast
							</p>
						</div>

						{/* Thin gradient divider */}
						<div className="h-px w-full bg-gradient-to-r from-violet-500/40 via-fuchsia-500/20 to-transparent"></div>

						{/* Bio */}
						<div className="space-y-4 text-zinc-400 text-base md:text-[17px] leading-relaxed">
							<p>
								I'm a passionate{" "}
								<span className="text-violet-300 font-medium">AI-driven full-stack developer</span>{" "}
								dedicated to creating stunning digital products. I specialize in crafting intuitive
								front-end experiences paired with powerful back-end systems.
							</p>
							<p>
								With a deep curiosity for cutting-edge technologies, I leverage AI to solve real-world
								challenges and contribute to projects that create{" "}
								<span className="text-cyan-300 font-medium">meaningful impact</span>.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-wrap items-center gap-4 pt-4">
							{/* <Link
								href="/resume.pdf"
								target="_blank"
								className="group relative inline-flex items-center gap-2.5 px-7 py-3 text-sm font-semibold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/40"></div>
								<span className="relative flex items-center gap-2">
									<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
									</svg>
									Download Resume
								</span>
							</Link> */}

							<Link
								href="#skills"
								className="group inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 px-7 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/60 hover:text-white hover:scale-[1.03] active:scale-[0.97]"
							>
								Explore Skills
								<svg
									className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
