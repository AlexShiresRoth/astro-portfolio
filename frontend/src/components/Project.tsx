import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import type { Project } from "../types/project";

type Props = {
  project: Project;
  index: number;
};

const ProjectComponent = ({ project, index }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 md:gap-12 items-start py-8">
        <div className="w-full flex items-center justify-between gap-8">
          <div className="flex-1 md:flex hidden w-1/3 gap-8">
            <div>
              <span className="text-xs text-accent italic">0{index + 1}</span>
            </div>
            <a href={`/projects/${project.slug.current}`}>
              {project.optImage && (
                <img
                  src={project.optImage?.width(850).url()}
                  alt={project.title}
                  className="w-full rounded-sm"
                />
              )}
            </a>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-2/3">
            <div className="w-full flex items-center justify-between border-b border-slate-50/5 pb-4">
              <div>
                <a
                  href={`/projects/${project.slug.current}`}
                  className="hover:underline flex items-center gap-1 text-lg font-bold  hover:text-accent transition-colors duration-300"
                >
                  {project.title}
                </a>
              </div>
              <div className="flex items-center gap-2 ">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="__blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1 text-sm"
                  >
                    View Live Site
                    <ArrowUpRight size={14} />
                  </a>
                )}

                {project.sourceCodeLink && (
                  <a
                    href={project.sourceCodeLink}
                    target="__blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1 text-sm"
                  >
                    View Source <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
            <a
              href={project.liveLink}
              target="__blank"
              rel="noopener noreferrer"
              className="w-full md:hidden visible"
            >
              {project.optImage && (
                <img
                  src={project.optImage?.width(850).url()}
                  alt={project.title}
                  className="w-full"
                />
              )}
            </a>
            <p className="">{project.solution}</p>
            <div
              className={cn(
                "flex items-center gap-4 justify-start flex-wrap border-t border-slate-50/5 pt-4",
              )}
            >
              {project.code.map((code) => (
                <span key={code} className="text-xs md:text-sm ">
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
