import React from "react";
import ProjectList from "./ProjectList";

export default function ProjectSection() {
	return (
		<div className="  flex  h-max flex-col items-center">
			<div className="mb-6 mt-20 text-4xl font-bold font-mono " id="projects">04. Project Section</div>
			<div>
				<ProjectList />
			</div>
		</div>
	);
}
