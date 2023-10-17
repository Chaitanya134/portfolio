import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { projects } from "../utils/projects";
import { BsGithub } from "react-icons/bs";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

interface ProjectProps {
  name: string;
  description: string;
  description2: string;
  src: StaticImageData;
  techUsed: string[];
  demoLink: string;
  githubRepoLink: string;
}

const Projects: React.FC = () => {
  return (
    <section className="pt-12">
      <h4 className="text-center font-semibold text-xl -mb-4 text-slate-400">
        Projects
      </h4>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  description2,
  src,
  techUsed,
  demoLink,
  githubRepoLink,
}) => {
  const patternRef = useRef<HTMLDivElement>(null);
  const PATTERNS = 50

  const handleScroll = () => {
    if (!patternRef.current) return;

    const patternDiv = patternRef.current;
    const parentDiv = patternDiv.parentElement;
    if (patternDiv.hasChildNodes()) {
      for (let i = 0; i < PATTERNS - 1; i++) {
        const { top } = parentDiv?.getBoundingClientRect()!;
        const windowHeight = window.innerHeight;
        const height = Math.max(Math.random(), 0.1) * Math.min(windowHeight - top, 200);
        const child = patternDiv.children[i] as HTMLDivElement;
        if (height < 0) continue;
        const keyframes = {
            height: height + "px"
        }
        child.animate(keyframes, {
            duration: 50,
            fill: "forwards"
        })
      }
    } else {
      for (let i = 0; i < PATTERNS - 1; i++) {
        const child = document.createElement("div");
        child.className = "absolute top-1 bg-dark -translate-y-full";
        child.style.left = (100 / PATTERNS) * i + "vw";
        child.style.width = (100 / PATTERNS) + "vw";
        patternDiv.appendChild(child);
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="py-8 px-lg h-screen sticky top-0 -z-10">
        <h2 className="text-center text-5xl font-bold mb-12 text-container text-gradient italic">
          {name}
        </h2>
        <div
          className="h-3/4 aspect-[1280/543] rounded-2xl relative overflow-hidden mx-auto"
          style={{ boxShadow: "0 0 1rem #00000040" }}
        >
          <Image
            src={src}
            alt={name}
            objectFit="fill"
            layout="fill"
            className="text-container"
          />
        </div>
      </div>
      <div className="relative py-20 px-lg h-screen z-10 bg-dark text-white flex items-center flex-col gap-6">
        <div ref={patternRef} className="flex"></div>
        <h2 className="text-center text-5xl font-bold mb-12 text-gradient text-container italic">
          {name}
        </h2>
        <div className="text-center opacity-80 grow tracking-wide text-container">
          <p>{description}</p>
          <br />
          <p>{description2}</p>
          <br />
          <p className="mt-6">
            <b className="opacity-100">Built With:</b>
            &nbsp;&nbsp;
            {techUsed.join(", ")}
          </p>
        </div>
        <div className="flex items-center justify-center gap-24">
          <button
            className="bg-white hover:bg-[#e0e0e0] focus:bg-[#e0e0e0]
                         transition text-dark py-2 px-6 rounded text-lg font-bold text-container"
          >
            <a href={demoLink} target="_blank" rel="noreferrer">
              LIVE DEMO
            </a>
          </button>
          <button
            className="bg-white hover:bg-[#e0e0e0] focus:bg-[#e0e0e0]
                         transition text-dark py-2 px-6 rounded text-lg font-bold text-container"
          >
            <a
              href={githubRepoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <BsGithub />
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
