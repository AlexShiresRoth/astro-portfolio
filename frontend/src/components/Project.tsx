import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "../types/project";

type Props = {
  project: Project;
};

const ProjectComponent = ({ project }: Props) => {
  return (
    <div className="flex flex-col border-2 border-black rounded-lg bg-white/60">
      <div className="p-4 flex items-center justify-between border-b border-black gap-2">
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
          <span className="h-2 w-2 rounded-full bg-black block" />
          <span className="h-2 w-2 rounded-full bg-black block" />
          <span className="h-2 w-2 rounded-full bg-black block" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 items-center p-4 py-8">
        <div className="w-full md:w-96">
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
            </div>
            <div>
              <p className="text-black/90 text-sm">{project.body}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 flex-wrap p-4 border-t border-black">
        {project.languages.map((language) => (
          <span key={language} className="text-xs text-black/80">
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
