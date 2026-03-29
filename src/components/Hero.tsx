import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/utils/Typewriter";
import { Spotlight } from "./Aceternity/Spotlight";
import OrbitImage from "./OrbitImage";

type Props = {
	socialMedia: { name: string; link: string; logo: any }[];
};

function Hero({ socialMedia }: Props) {
	return (
		<div
			id="home"
			className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
		>
			{/* Animated Background Gradient Orbs */}
			<div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 blur-3xl animate-float [animation-delay:0s]"></div>
			<div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-cyan-600/20 to-blue-600/20 blur-3xl animate-float [animation-delay:2s]"></div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl animate-float [animation-delay:4s]"></div>

			{/* Grid Pattern Overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>

			{/* Spotlights */}
			<Spotlight
				className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
				fill="blue"
			/>
			<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />

			{/* Main Content Container */}
			<div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32">
				<div className="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row lg:gap-20">
					
					{/* Left Content */}
					<div className="flex flex-col gap-8 text-center lg:text-left lg:max-w-2xl">
						
						{/* Animated Line Decoration */}
						<div className="hidden lg:block absolute -top-8 left-0 opacity-80">
							<svg
								width="236"
								height="68"
								viewBox="0 0 236 68"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<linearGradient
										id="paint0_linear"
										gradientUnits="userSpaceOnUse"
										x1="0"
										y1="0"
										x2="236"
										y2="0"
									>
										<stop stopColor="#8B5CF6" stopOpacity="0"></stop>
										<stop offset="0.5" stopColor="#A855F7"></stop>
										<stop offset="1" stopColor="#D946EF" stopOpacity="0"></stop>
									</linearGradient>
									<mask id="mask">
										<rect x="-236" y="0" width="236" height="68" fill="white">
											<animate
												attributeName="x"
												from="236"
												to="-236"
												dur="2.5s"
												repeatCount="indefinite"
											/>
										</rect>
									</mask>
								</defs>
								<path
									d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
									stroke="url(#paint0_linear)"
									strokeWidth="2"
									mask="url(#mask)"
								/>
							</svg>
						</div>

						{/* Greeting Badge */}
						<div className="animate-fade-in [animation-delay:0.1s]">
							<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 backdrop-blur-md hover:border-violet-500/50 transition-all duration-300">
								<Image
									src={"/ggg.gif"}
									unoptimized={true}
									alt="waving-hand"
									width={28}
									height={28}
									className="drop-shadow-lg"
								/>
								<p className="text-sm md:text-base font-semibold bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
									Namaste | Welcome to my portfolio
								</p>
							</div>
						</div>

						{/* Main Heading */}
						<div className="space-y-4 animate-fade-in-up [animation-delay:0.2s]">
							<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1]">
								<span className="block text-white">I'm</span>
								<span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
									Rahul Kanyal
								</span>
							</h1>
							
							{/* Role with Typewriter */}
							<div className="flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl lg:text-3xl font-medium text-zinc-300">
								<span className="h-8 w-1 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full animate-pulse"></span>
								<Typewriter
									words={[
										"Full Stack Developer",
										"AI Enthusiast",
										"UI/UX Designer",
										"Problem Solver",
									]}
									typeSpeed={70}
									deleteSpeed={50}
									delaySpeed={2000}
								/>
							</div>
						</div>

						{/* Description */}
						<p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up [animation-delay:0.3s]">
							Passionate <span className="text-violet-300 font-medium">AI-driven full-stack developer</span> crafting beautiful, functional digital experiences. I transform ideas into engaging, scalable web applications using <span className="text-cyan-300 font-medium">clean code</span>, modern design principles, and <span className="text-fuchsia-300 font-medium">intelligent features powered by AI</span>.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in-up [animation-delay:0.4s]">
							<Link
								className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 active:scale-95 overflow-hidden"
								href={"#about"}
							>
								<span className="relative z-10">Explore My Work</span>
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 512 512"
									className="relative z-10 transition-transform group-hover:translate-x-1"
									height="1.1em"
									width="1.1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
								</svg>
								<div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</Link>

							<Link
								className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-violet-500/30 bg-violet-950/20 backdrop-blur-md text-white font-semibold text-base transition-all duration-300 hover:border-violet-500/60 hover:bg-violet-950/40 hover:shadow-lg hover:shadow-violet-500/20 hover:scale-105 active:scale-95"
								href={"#contact"}
							>
								<span>Let's Talk</span>
								<span className="text-xl">💬</span>
							</Link>
						</div>

						{/* Social Links */}
						<div className="flex items-center justify-center lg:justify-start gap-3 pt-4 animate-fade-in-up [animation-delay:0.5s]">
							<span className="text-sm text-zinc-500 mr-2">Connect:</span>
							{socialMedia.map((info, key) => (
								<Link
									key={key}
									href={info.link}
									aria-label={info.name}
									target="_blank"
									rel="noopener noreferrer"
									className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md transition-all duration-300 hover:border-violet-500/50 hover:bg-gradient-to-br hover:from-violet-600/20 hover:to-fuchsia-600/20 hover:shadow-lg hover:shadow-violet-500/20 hover:scale-110 hover:-translate-y-1"
								>
									{info.logo({ className: "h-5 w-5 text-zinc-400 group-hover:text-violet-400 transition-colors duration-300" })}
									
									{/* Tooltip */}
									<span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-zinc-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										{info.name}
									</span>
								</Link>
							))}
						</div>
					</div>

					{/* Right Content - Profile Image */}
					<div className="relative animate-fade-in [animation-delay:0.3s]">
						{/* Rotating Gradient Ring */}
						<div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 opacity-60 blur-xl animate-spin-slow"></div>
						
						{/* Secondary Glow */}
						<div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-cyan-600/30 to-blue-600/30 blur-2xl animate-pulse"></div>

						{/* Image Container */}
						<div className="relative group">
							{/* Outer Border Ring */}
							<div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
							
							{/* Inner Border */}
							<div className="absolute inset-0 rounded-full bg-zinc-950 m-1"></div>
							
							{/* Profile Image */}
							<div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden border-4 border-zinc-900 m-1">
								<Image
									alt="Rahul Kanyal"
									width={1000}
									height={1000}
									className="h-full w-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-500"
									src={"/profile.jpg"}
									priority
								/>
								
								{/* Overlay on hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-violet-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							</div>

							{/* Floating Tech Icons */}
							<OrbitImage
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
								name="NEXT JS"
								size={14}
								className="-left-8 -top-8 size-16 md:size-20 animate-bounce-sm [animation-delay:0s]"
							/>
							<OrbitImage
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
								name="Typescript"
								size={12}
								className="-right-10 top-4 size-14 md:size-16 animate-bounce-sm [animation-delay:0.2s]"
							/>
							<OrbitImage
								src="/skills/Nodejs.svg"
								name="Node JS"
								size={8}
								className="-right-16 top-1/2 size-12 md:size-14 animate-bounce-sm [animation-delay:0.4s]"
							/>
							<OrbitImage
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
								name="Tailwind CSS"
								size={8}
								className="-right-6 -bottom-4 size-10 md:size-12 animate-bounce-sm [animation-delay:0.6s]"
							/>
							<OrbitImage
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
								name="Git"
								size={8}
								className="-bottom-8 left-1/4 size-10 md:size-12 animate-bounce-sm [animation-delay:0.8s]"
							/>
							<OrbitImage
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
								name="React"
								size={8}
								className="-left-12 top-1/3 size-12 md:size-14 animate-bounce-sm [animation-delay:1s]"
							/>
						</div>

						{/* Status Badge */}
						{/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-950/50 backdrop-blur-md animate-fade-in-up [animation-delay:0.6s]">
							<span className="relative flex h-3 w-3">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
								<span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
							</span>
							<span className="text-sm font-medium text-emerald-300">Available for work</span>
						</div> */}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in [animation-delay:1s]">
				<span className="text-xs text-zinc-500">Scroll to explore</span>
				<div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
					<div className="w-1.5 h-3 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full animate-bounce"></div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
