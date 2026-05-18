import type { Project } from "../types/project";
import ProjectComponent from "./Project";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="flex flex-col px-8 md:px-32 w-full relative">
      <div className="flex flex-col md:gap-20 gap-4 border-t-2 border-yellow-50/50 z-10">
        <h2 className="md:text-5xl text-3xl font-bold text-yellow-50 my-10">
          Projects
        </h2>
        <div className="flex gap-4 md:gap-8 md:grid sm:grid-cols-2 md:grid-cols-3 flex-wrap">
          {projects.map((project) => {
            return <ProjectComponent key={project._id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
