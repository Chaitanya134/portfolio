import Image, { StaticImageData } from "next/image";
import { projects } from "../utils/projects";
import { BsGithub } from "react-icons/bs";

interface ProjectProps {
    name: string,
    description: string,
    description2: string,
    src: StaticImageData,
    techUsed: string[],
    demoLink: string,
    githubRepoLink: string
}

const Projects: React.FC = () => {
    return (
        <section className="pt-12">
            <h4 className="text-center text-[#BCBCBC] font-semibold text-2xl mb">What I build</h4>
            {
                projects.map(project => (
                    <Project key={project.name} {...project} />
                ))
            }
        </section>
    )
}

const Project: React.FC<ProjectProps> = ({ name, description, description2, src, techUsed, demoLink, githubRepoLink }) => {
    return (
        <div className="relative">
            <div className="py-8 px-lg h-screen sticky top-0 -z-10">
                <h2 className="text-center text-5xl font-bold mb-12">{name}</h2>
                <div className="w-full h-3/4 rounded-2xl relative overflow-hidden"
                    style={{ boxShadow: "0 0 1rem #00000040" }}>
                    <Image src={src} objectFit="fill" layout="fill" />
                </div>
            </div>
            <div className="py-20 px-lg h-screen z-10 bg-dark text-white flex items-center flex-col gap-6">
                <h2 className="text-center text-5xl font-bold mb-12">{name}</h2>
                <div className="text-center opacity-80 grow tracking-wide">
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
                    <button className="bg-white hover:bg-[#e0e0e0] focus:bg-[#e0e0e0] transition text-dark py-2 px-6 rounded text-lg font-bold">
                        <a href={demoLink} target="_blank">
                            LIVE DEMO
                        </a>
                    </button>
                    <button className="bg-white hover:bg-[#e0e0e0] focus:bg-[#e0e0e0] transition text-dark py-2 px-6 rounded text-lg font-bold">
                        <a href={githubRepoLink} target="_blank" className="flex items-center gap-2">
                            <BsGithub />Github
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects;