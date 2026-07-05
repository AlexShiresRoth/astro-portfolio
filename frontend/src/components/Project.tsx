import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/project";

type Props = {
  project: Project;
};

const ProjectComponent = ({ project }: Props) => {
  return (
    <div className="flex items-center border-2 gap-4 border-black p-4 rounded-lg bg-white/60">
      <div className="max-w-96">
        {project.optImage && (
          <img
            src={project.optImage?.width(450).url()}
            alt={project.title}
            className="bg-center w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
      <div className="flex gap-2 w-full text-black">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between w-full">
            <a
              href={project.liveLink}
              target="__blank"
              rel="noopener noreferrer"
              className="font-bold text-lg hover:underline"
            >
              {project.title}
            </a>
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
          <div>
            <p className="text-black/90 text-sm">{project.body}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {project.languages.map((language) => (
              <span key={language} className="text-xs text-black/80">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
