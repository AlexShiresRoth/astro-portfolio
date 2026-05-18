import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/project";

type Props = {
  project: Project;
};

const ProjectComponent = ({ project }: Props) => {
  return (
    <div className="flex flex-col items-center border-2 border-yellow-50/50 rounded">
      {project.optImage && (
        <img
          src={project.optImage?.width(450).url()}
          alt={project.title}
          className="bg-center w-full h-full object-cover"
        />
      )}
      <div className="flex flex-col gap-2 w-full text-yellow-50 p-4 bg-[#111]">
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
            <p className="text-yellow-50 text-sm">{project.body}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {project.languages.map((language) => (
              <span key={language} className="text-xs text-yellow-50/80">
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
