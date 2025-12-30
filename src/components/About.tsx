import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "@/components/Aceternity/background-gradient";

/* eslint-disable react/no-unescaped-entities */ 
function About() {
	return (
		<div>
			<h2
				id="about"
				className="mb-8 mt-8 text-center font-bold text-4xl md:text-5xl lg:mb-0 lg:mt-0"
			>
				<span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">01.&nbsp;</span>About Me
			</h2>
			<div className="mx-auto mt-2 flex w-full flex-col items-center justify-between md:gap-4 lg:mt-20 lg:w-11/12 lg:flex-row 2xl:w-4/5">
				<BackgroundGradient
					className="w-full"
					containerClassName="mx-auto flex w-56 flex-col items-center gap-2 self-start rounded-lg p-1 transition-transform duration-300 hover:-translate-y-4 md:w-2/5 lg:mx-16 lg:w-72 lg:-rotate-3"
				>
					<div className="mx-auto flex w-full flex-col items-center gap-2 self-start rounded-2xl bg-zinc-900 p-3">
						<Image
							alt={"/self.jpg"}
							width={1000}
							height={1000}
							loading={"lazy"}
							className="h-60 w-full rounded-2xl bg-violet-100 object-cover object-top grayscale transition-all duration-300 hover:grayscale-0 md:h-80 lg:h-80"
							src={"/about.jpg"}
						/>
					</div>
				</BackgroundGradient>
				<div className="mx-6 mt-8 flex-1 text-left md:mx-0 md:mt-0 md:p-6">
					<div className="flex flex-col gap-3">
						<p className="text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">Rahul Kanyal</p>
						<p className="w-fit rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 px-4 py-2 text-sm font-semibold text-violet-300 border border-violet-500/30">
							✨ Full Stack Developer - AI
						</p>
						<p className="text-sm text-zinc-300 md:text-base md:font-medium leading-relaxed">
							AI-driven full-stack developer with a passion for creating beautifully designed digital products. I specialize in building user-friendly front-end experiences and robust, scalable back-end systems. I’m driven by a strong desire to learn cutting-edge technologies, leverage AI to solve real-world problems, and contribute to meaningful projects that make a real impact.
						</p>
						<div className="mt-4 flex flex-wrap items-center gap-3 md:mt-6">
							<Link
								href="/resume.pdf"
								target="_blank"
								className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 active:scale-95"
							>
								📄 Resume
							</Link>
							<Link
								className="group inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet-500 hover:bg-violet-600/10 hover:shadow-lg hover:shadow-violet-500/30"
								href={"#skills"}
							>
								<span>My Skills</span>
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 512 512"
									className="transition-transform group-hover:translate-x-1"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
