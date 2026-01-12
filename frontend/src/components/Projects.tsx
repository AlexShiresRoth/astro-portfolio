import type { Project } from "../types/project";
import ProjectComponent from "./Project";

const Projects = async ({ projects }: { projects: Project[] }) => {
  return (
    <div className="flex flex-col p-24 bg-emerald-500 border-t-8 border-b-8 border-black">
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-4xl">Projects.</h2>
        <div className="grid grid-cols-2 gap-2">
          {projects.map((project) => {
            return <ProjectComponent key={project._id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
