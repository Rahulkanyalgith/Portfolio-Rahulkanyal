"use client";
import { useState } from "react";
import { FaCode, FaLink } from "react-icons/fa";
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
    <div className="mb-4">
      <div
        className=" relative cursor-pointer m-7 p-5 border-2 rounded-2xl  sm:w-[450px] sm:h-60 stroke-slate-100 shadow-xl shadow-white/30"
        onClick={() => setIsHovered(!isHovered)}
      >
        <Image
          src={img}
          className="w-full h-full object-cover rounded-xl"
          alt="Project Image"
          loading="lazy"
        />
        {isHovered && (
          <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-violet-950 bg-opacity-95 text-white z-50">
            <div className=" mx-5 md:mx-40 flex flex-col items-center text-center"> 
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-5">{title}</h2>
            <h2 className="text-lg md:text-xl font-mono font-medium mb-2 ">{description}</h2>
              </div>

            <div className="flex justify-center mt-5">
              <ul className="text-white flex font-mono p-2 rounded-md overflow-x-auto">
                {skil &&
                  skil.map((skill: string, index: number) => (
                    <Type key={index} skill={skill} />
                  ))}
              </ul>
            </div>
            <div className="flex space-x-16 mt-5">
              <a href={githubLink} target="_blank">
                <FaCode size={40} />
              </a>
              <a href={deployedLink} target="_blank">
                <FaLink size={40} />
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center font-mono font-bold text-xl">{title}</div>

      <div className="flex justify-center">
        <ul className="text-white flex p-2 font-mono rounded-md overflow-x-auto">
          {skil &&
            skil.map((skill: string, index: number) => (
              <Type key={index} skill={skill} />
            ))}
        </ul>
      </div>
    </div>
  );
}

function Type({ skill }: any) {
  return (
    <div>
      <i>
        <li className="mr-3 py-1 px-2 font-mono bg-gray-700 rounded">{skill}</li>
      </i>
    </div>
  );
}

export default ProjectCard;
