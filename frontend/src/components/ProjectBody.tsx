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
      <p className="leading-snug" key={index}>
        {line}
      </p>
    )) ?? "";
  return (
    <ContentContainer id="project-body">
      <div>
        <h3 className="text-sm text-accent mb-2">Problem</h3>
        <div className="flex flex-col gap-2 text-slate-300">{problem}</div>
      </div>
      <div>
        <h3 className="text-sm text-accent mb-2">Solution</h3>
        <div className="flex flex-col gap-2 text-slate-300">{solution}</div>
      </div>
    </ContentContainer>
  );
}
