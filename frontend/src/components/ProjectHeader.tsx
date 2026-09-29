import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/project";
import ContentContainer from "./ContentContainer";

type Props = {
  project: Project;
};

export default function ProjectHeader({ project }: Props) {
  return (
    <header className="w-full flex-col flex items-center justify-center mt-14 bg-slate-400/5 border-b border-slate-50/10">
      <ContentContainer id="project-header" shouldAnimate={false}>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <span className="text-accent text-xs">Case Study</span>
            <span> - </span>
            <span className="text-slate-300 text-xs">
              {new Date(project.publishedAt ?? "")?.getFullYear()}
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="max-w-lg">
              <img
                src={project.optImage?.width(850).url()}
                alt={project.title}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold md:text-6xl break-words">
                {project.title}
              </h1>
              <p className=" max-w-3xl">{project.overview}</p>
              <div className="flex gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400/80 gap-1 flex items-center p-2 border hover:text-emerald-500 border-slate-50/30 hover:border-emerald-500 transition-colors duration-300"
                  >
                    View Live Site <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.sourceCodeLink && (
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm gap-1 text-slate-400/80 flex items-center p-2 border hover:text-emerald-500 border-slate-50/30 hover:border-emerald-500 transition-colors duration-300"
                  >
                    View Source Code <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </header>
  );
}
