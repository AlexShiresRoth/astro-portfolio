import type { Project } from "../types/project";

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  return (
    <div
      id="project-details"
      className="bg-slate-400/5 w-full border-b border-t border-slate-50/10 flex items-center justify-center py-4 animate-fadeInAndUp"
    >
      <div className="md:grid grid-cols-3 items-center w-11/12 md:w-3/4 max-w-6xl flex flex-col gap-4">
        <div className="flex flex-col gap-2 self-start">
          <h4 className="text-accent text-sm">Contributions</h4>
          <p>{project.contributions}</p>
        </div>
        <div className="md:flex items-center justify-center self-center hidden">
          <span className="h-20 w-0.5 bg-slate-50/5"></span>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-accent text-sm">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.code.map((technology) => (
              <span
                key={technology}
                className="text-slate-400 text-xs p-1 bg-slate-400/20 border border-slate-50/30"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
