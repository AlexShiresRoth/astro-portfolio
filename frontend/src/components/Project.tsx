import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import { cn } from "../lib/utils";
import type { Project } from "../types/project";

type Props = {
  project: Project;
};

const ProjectComponent = ({ project }: Props) => {
  return (
    <div className="flex flex-col border-2 border-black rounded-lg bg-white/60">
      <div className="p-4 flex justify-between border-b border-black gap-2">
        {project.sourceCodeLink ? (
          <a
            href={project.sourceCodeLink}
            target="__blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1 text-sm"
          >
            Source <ArrowUpRight size={14} />
          </a>
        ) : (
          <>
            <Lock size={16} />
          </>
        )}
        <div className="flex gap-2 items-center">
          <span className="h-1 w-1 rounded-full bg-black block" />
          <span className="h-1 w-1 rounded-full bg-black block" />
          <span className="h-1 w-1 rounded-full bg-black block" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start p-4 py-8">
        <a
          href={project.liveLink}
          target="__blank"
          rel="noopener noreferrer"
          className="w-full max-w-md"
        >
          {project.optImage && (
            <img
              src={project.optImage?.width(850).url()}
              alt={project.title}
              className="bg-center hover:shadow-none transition-all duration-300 w-full h-full object-cover border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] rounded-lg"
            />
          )}
        </a>
        <div className="flex gap-2 w-full text-black">
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            <div className="flex items-center justify-between w-full">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="__blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:underline font-semibold flex items-center gap-1"
                >
                  {project.title}{" "}
                  <span>
                    <ExternalLink size={16} />
                  </span>
                </a>
              ) : (
                <h2 className="text-xl font-semibold">{project.title}</h2>
              )}
            </div>
            <div className="flex flex-col gap-4">
              {project.problem && (
                <div className="flex flex-col">
                  <h2 className="font-bold text-amber-500">Challenge</h2>
                  <p className="text-black/90">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="flex flex-col">
                  <h2 className="font-bold text-amber-500">Solution</h2>
                  <p className="text-black/90">{project.solution}</p>
                </div>
              )}
              {project.overview && (
                <div className="flex flex-col">
                  <h2 className="font-bold text-amber-500">Overview</h2>
                  <p className="text-black/90">{project.overview}</p>
                </div>
              )}
              {!!project.contributions && (
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
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "flex items-center gap-2 flex-wrap p-4 border-t border-black",
          project.code.length > 3 ? "justify-between" : "justify-start",
        )}
      >
        {project.code.map((code) => (
          <span key={code} className="text-xs md:text-sm text-black/80">
            {code}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
