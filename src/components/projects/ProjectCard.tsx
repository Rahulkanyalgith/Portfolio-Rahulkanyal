"use client";
import { useState } from "react";
import { FaCode, FaLink, FaTimes } from "react-icons/fa";
import Image from "next/image";

type Data = {
  img: any;
  title: string;
  githubLink: string;
  deployedLink: string;
  skil?: any[];
  description?: string;
};

function ProjectCard({
  img,
  title,
  githubLink,
  deployedLink,
  skil,
  description,
}: Data) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-8">
      <div
        className="relative cursor-pointer m-6 p-0 rounded-2xl sm:w-[450px] sm:h-64 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40"
        onClick={() => setIsHovered(!isHovered)}
      >
        <Image
          src={img}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
          alt="Project Image"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-zinc-300 line-clamp-2">{description}</p>
          </div>
        </div>
        {isHovered && (
          <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-black/90 backdrop-blur-md text-white z-50 p-4 animate-fade-in">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsHovered(false);
              }}
              className="absolute top-6 right-6 text-2xl text-white hover:text-violet-400 transition-colors"
            >
              <FaTimes />
            </button>
            <div className="mx-5 md:mx-40 flex flex-col items-center text-center max-w-2xl"> 
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{title}</h2>
              <h2 className="text-base md:text-lg text-zinc-300 font-light mb-6">{description}</h2>
            </div>

            <div className="flex justify-center mt-6 flex-wrap gap-2">
              <div className="flex flex-wrap gap-2 justify-center">
                {skil &&
                  skil.map((skill: string, index: number) => (
                    <Type key={index} skill={skill} />
                  ))}
              </div>
            </div>
            <div className="flex space-x-10 mt-8">
              <a 
                href={githubLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FaCode size={20} />
                <span className="font-semibold">Source Code</span>
              </a>
              <a 
                href={deployedLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-violet-500 rounded-lg hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FaLink size={20} />
                <span className="font-semibold">Live Demo</span>
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center font-bold text-lg text-white mt-3">{title}</div>

      <div className="flex justify-center flex-wrap gap-2 mt-2">
        {skil &&
          skil.map((skill: string, index: number) => (
            <Type key={index} skill={skill} />
          ))}
      </div>
    </div>
  );
}

function Type({ skill }: any) {
  return (
    <div>
      <span className="inline-block py-1 px-3 text-xs font-semibold bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 border border-violet-500/50 text-violet-300 rounded-full hover:from-violet-600/50 hover:to-fuchsia-600/50 transition-all duration-300">
        {skill}
      </span>
    </div>
  );
}

export default ProjectCard;
