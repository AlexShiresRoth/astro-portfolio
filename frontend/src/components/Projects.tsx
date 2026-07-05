import type { Project } from "../types/project";
import ProjectComponent from "./Project";
import Subheading from "./Subheading";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <Subheading text="Projects" />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        {projects.map((project) => {
          return <ProjectComponent key={project._id} project={project} />;
        })}
      </div>
    </>
  );
};

export default Projects;
