import React from "react";
import ProjectList from "./ProjectList";

export default function ProjectSection() {
	return (
		<div className="flex h-max flex-col items-center w-full">
			<div className="mb-8 mt-20 text-4xl md:text-5xl font-bold text-center" id="projects">
				<span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">03.&nbsp;</span>
				<span className="text-white">Featured Projects</span>
			</div>
			<div className="w-full">
				<ProjectList />
			</div>
		</div>
	);
}
