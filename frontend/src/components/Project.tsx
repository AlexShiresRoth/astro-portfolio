import type { Project } from "../types/project";

type Props = {
  project: Project;
};

const ProjectComponent = async ({ project }: Props) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      {project.optImage && (
        <img
          src={project.optImage?.width(450).url()}
          alt={project.title}
          className="rounded"
        />
      )}
      {/* <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
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
            <span key={lang} className="text-sm">
              {lang}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProjectComponent;
