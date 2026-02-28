"use client";
import skillsData from "@/components/skill/SkillData";
import Marquee from "react-fast-marquee";

const Skills = () => {
	return (
		<section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="skills">
			{/* Subtle background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />
			
			<div className="relative max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16 space-y-4">
					<span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-white/5 text-slate-400 border border-white/10">
						Technologies
					</span>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
						<span className="text-white">Tech Stack </span>
						<span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">& Skills</span>
					</h2>
					<p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
						Building modern applications with cutting-edge technologies
					</p>
				</div>

				{/* Skills Marquee */}
				<div className="relative">
					{/* Gradient fade edges */}
					<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
					
					<Marquee
						gradient={false}
						speed={60}
						pauseOnHover={true}
						pauseOnClick={true}
						delay={0}
						play={true}
						direction="left"
					>
						{skillsData.map((skill: string, id: number) => (
							<div
								className="group mx-3 sm:mx-4"
								key={id}
							>
								<div className="relative flex flex-col items-center justify-center w-28 sm:w-32 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-white/[0.12] hover:scale-[1.02] hover:-translate-y-1">
									{/* Subtle glow on hover */}
									<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 to-blue-500/0 group-hover:from-violet-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
									
									<div className="relative z-10 flex flex-col items-center gap-3">
										<div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
											<img
												src={`skills/${skill.toLowerCase()}.svg`}
												alt={skill}
												width={48}
												height={48}
												className="w-full h-full object-contain drop-shadow-sm"
											/>
										</div>
										<span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
											{skill}
										</span>
									</div>
								</div>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</section>
	);
};

export default Skills;
