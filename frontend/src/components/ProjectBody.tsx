import type { Project } from "../types/project";
import ContentContainer from "./ContentContainer";

type Props = {
  project: Project;
};

export default function ProjectBody({ project }: Props) {
  const problem =
    project?.problem?.split("\n").map((line, index) => (
      <p className="leading-relaxed" key={index}>
        {line}
      </p>
    )) ?? "";
  const solution =
    project?.solution?.split("\n").map((line, index) => (
      <p className="leading-relaxed" key={index}>
        {line}
      </p>
    )) ?? "";
  return (
    <ContentContainer id="project-body" shouldAnimate={false}>
      <div className="flex md:flex-row flex-col gap-10 w-full">
        <div className="flex flex-col gap-4 min-w-96">
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
        <div className="flex flex-col gap-10 w-full max-w-3xl">
          <div>
            <h3 className="text-sm text-accent mb-2">Problem</h3>
            <div className="flex flex-col gap-2 text-slate-300">{problem}</div>
          </div>
          <div>
            <h3 className="text-sm text-accent mb-2">Solution</h3>
            <div className="flex flex-col gap-2 text-slate-300">{solution}</div>
          </div>
          <div className="flex flex-col gap-4 self-start">
            <h4 className="text-accent text-sm">Contributions</h4>
            <ul className="ml-2 list-inside flex flex-col gap-4">
              {[...(project.contributions || [])].map((contribution, index) => (
                <li className="flex gap-1" key={contribution}>
                  <span
                    className="text-accent text-xs italic whitespace-nowrap mt-1"
                    key={contribution}
                  >
                    0{index + 1} -
                  </span>
                  <p className="text-sm leading-relaxed">{contribution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
