import type { Project } from "../types/project";
import ProjectComponent from "./Project";
import Subheading from "./Subheading";

const Projects = ({
  personalProjects,
  professionalProjects,
}: {
  personalProjects: Project[];
  professionalProjects: Project[];
}) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <Subheading text="Personal Work" />
        <div className="flex flex-col gap-8">
          {personalProjects.map((project) => {
            return <ProjectComponent key={project._id} project={project} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Subheading text="Professional Work" />
        <div className="flex flex-col gap-8">
          {professionalProjects.map((project) => {
            return <ProjectComponent key={project._id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
