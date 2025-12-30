"use client";
import skillsData from "@/components/skill/SkillData";
import Marquee from "react-fast-marquee";

const Skills = () => {
	return (
		<div className="md-mx:px-6 my-10 px-6 md:px-12 font-sans" id="skills">
			<h1 className="sm-mx:text-3xl xs-mx:text-2xl mb-12 text-center text-5xl font-bold">
				<span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">02.&nbsp;</span>
				<span className="text-white">Tech Stack & Skills</span>
			</h1>
			<div className="md-mx:justify-between sm-mx:justify-center md-mx:gap-2 flex flex-wrap justify-around gap-4">
				<div className="my-12 w-full">
					<Marquee
						gradient={false}
						speed={120}
						pauseOnHover={true}
						pauseOnClick={true}
						delay={0}
						play={true}
						direction="left"
					>
						{skillsData.map((skill: string, id: number) => (
							<div
								className="group relative m-3 flex h-fit w-36 min-w-fit cursor-pointer flex-col items-center justify-center rounded-xl transition-all duration-500 hover:scale-110 sm:m-5"
								key={id}
							>
								<div className="relative mb-5 h-full w-full rounded-xl border border-zinc-700/50 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 shadow-none transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
									<div className="flex -translate-y-[1px] justify-center">
										<div className="w-3/4">
											<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										</div>
									</div>
									<div className="flex flex-col items-center justify-center gap-3 p-6">
										<div className="h-8 sm:h-10 filter group-hover:brightness-125 transition-all duration-300">
											<img
												src={`skills/${skill.toLowerCase()}.svg`}
												alt={skill}
												width={40}
												height={40}
												className="h-full w-auto rounded-lg"
											/>
										</div>
										<p className="text-sm font-semibold text-zinc-300 sm:text-base group-hover:text-white transition-colors duration-300">{skill}</p>
									</div>
								</div>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	);
};
export default Skills;
