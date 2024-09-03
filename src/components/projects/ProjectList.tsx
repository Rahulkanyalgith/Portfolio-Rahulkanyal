import React from 'react'
import { projectInfo } from './ProjectInfo'
import ProjectCard from './ProjectCard'

export default function ProjectList() {
  return (
    <div className="flex flex-wrap justify-center">
          {projectInfo.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img} 
              title={project.title}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
              skil= {project.skill}
              description = {project.description} 
            />
          ))}
        </div>
  )
}
