import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "../types/project";

export default function ProjectFooter({
  previousProject,
  nextProject,
}: {
  previousProject?: Project;
  nextProject: Project;
}) {
  return (
    <div className="w-full border-t border-slate-50/5 flex items-center justify-center py-8 animate-fadeInAndUp">
      <div className="w-11/12 md:w-3/4 max-w-6xl flex items-center justify-between">
        <a
          href={
            previousProject ? `/projects/${previousProject.slug.current}` : "/"
          }
          className="text-sm text-slate-400 flex items-center gap-2 hover:text-slate-300 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          {previousProject ? "Previous: " + previousProject.title : "Back Home"}
        </a>
        <a
          href={`/projects/${nextProject.slug.current}`}
          className="text-sm text-slate-400 flex items-center gap-2 hover:text-slate-300 transition-colors duration-300"
        >
          Next: {nextProject.title}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
