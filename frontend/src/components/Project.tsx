import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";
import type { Project } from "../types/project";

type Props = {
  project: Project;
};

const ProjectComponent = ({ project }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 md:gap-12 items-start py-8">
        <div className="w-full flex items-center justify-between gap-8">
          <a
            href={project.liveLink}
            target="__blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex hidden w-1/3"
          >
            {project.optImage && (
              <img
                src={project.optImage?.width(850).url()}
                alt={project.title}
                className="w-full"
              />
            )}
          </a>
          <div className="flex flex-col gap-8 w-full md:w-2/3">
            <div className="flex items-center justify-between">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="__blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:underline hover:text-amber-700 transition-all duration-300 flex items-center gap-1"
                >
                  {project.title}{" "}
                  <span>
                    <ExternalLink size={16} />
                  </span>
                </a>
              ) : (
                <h2 className="text-3xl">{project.title}</h2>
              )}
              {project.sourceCodeLink && (
                <a
                  href={project.sourceCodeLink}
                  target="__blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 text-sm"
                >
                  Source <ArrowUpRight size={14} />
                </a>
              )}
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
            <p className="text-black/60">{project.solution}</p>
            <div
              className={cn(
                "flex items-center gap-4 justify-start flex-wrap border-t border-black/5 pt-4",
              )}
            >
              {project.code.map((code) => (
                <span key={code} className="text-xs md:text-sm text-black/50">
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* {project.problem && (
                <div className="flex flex-col">
                  <h2 className="font-bold text-amber-700">Challenge</h2>
                  <p className="text-black/90">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="flex flex-col">
                  <h2 className="font-bold text-amber-700">Solution</h2>
                  <p className="text-black/90">{project.solution}</p>
                </div>
              )}
              {project.overview && (
                <div className="flex flex-col">
                  <h2 className="font-bold text-amber-500">Overview</h2>
                  <p className="text-black/90">{project.overview}</p>
                </div>
              )} */}
          {/* {!!project.contributions && (
            <div className="flex flex-col">
              <h2 className="font-bold text-amber-500">Contributions</h2>
              <ul>
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="text-black/90 list-disc list-inside"
                  >
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
