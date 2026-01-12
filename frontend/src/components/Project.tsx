import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/project";

type Props = {
  project: Project;
};

const ProjectComponent = async ({ project }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="pt-2">
        {project.optImage && (
          <img
            src={project.optImage?.width(450).url()}
            alt={project.title}
            height={400}
            width={500}
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <a
            href={project.liveLink}
            target="__blank"
            rel="noopener noreferrer"
            className="font-bold text-lg hover:underline"
          >
            {project.title}
          </a>
          <a
            href={project.sourceCodeLink}
            target="__blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1 text-sm"
          >
            Source <ArrowUpRight size={14} />
          </a>
        </div>
        <p>{project.body}</p>
        <div className="flex items-center gap-2">
          {project.languages.map((lang) => (
            <span key={lang} className="py-1 px-2 text-sm">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
