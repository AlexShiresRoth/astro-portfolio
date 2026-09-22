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
        <Subheading text="Selected Work" />
        <div className="w-full border-b border-stone-50/5" />
        <div className="flex flex-col gap-2">
          {personalProjects.map((project, index) => {
            return (
              <ProjectComponent
                key={project._id}
                project={project}
                index={index}
              />
            );
          })}
          {professionalProjects.map((project, index) => {
            return (
              <ProjectComponent
                key={project._id}
                project={project}
                index={index + personalProjects.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
