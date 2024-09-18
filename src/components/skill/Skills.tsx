"use client";
import skillsData from "@/components/skill/SkillData";
import Marquee from "react-fast-marquee";

const Skills = () => {
	return (
		<div className="md-mx:px-6 my-10 px-16 font-mono" id="skills">
			<h1 className="sm-mx:text-3xl xs-mx:text-2xl mb-10 text-center text-4xl font-bold text-white">
				<span className="text-primaryColor">02.&nbsp;</span>Tech Stack | Skills
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
								className="group relative m-3 flex h-fit w-36 min-w-fit cursor-pointer flex-col items-center justify-center rounded-lg transition-all duration-500 hover:scale-[1.15] sm:m-5"
								key={id}
							>
								<div className="border-primaryColor mb-5 h-full w-full rounded-lg  border shadow-none shadow-gray-50 hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#64FFDA80]">
									<div className="flex -translate-y-[1px] justify-center">
										<div className="w-3/4">
											<div className="h-[1px] w-full bg-gradient-to-r from-transparent  to-transparent" />
										</div>
									</div>
									<div className="flex flex-col items-center justify-center gap-3 p-6">
										<div className="h-8 sm:h-10">
											<img
												src={`skills/${skill.toLowerCase()}.svg`}
												alt={skill}
												width={40}
												height={40}
												className="h-full w-auto rounded-lg"
											/>
										</div>
										<p className="text-sm text-white sm:text-lg">{skill}</p>
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
