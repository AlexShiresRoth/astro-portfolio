import type { Project } from "../types/project";
import ProjectComponent from "./Project";
import Subheading from "./Subheading";
import WrapperWithBorder from "./WrapperWithBorder";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <WrapperWithBorder>
      <Subheading text="Projects" />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        {projects.map((project) => {
          return <ProjectComponent key={project._id} project={project} />;
        })}
      </div>
    </WrapperWithBorder>
  );
};

export default Projects;
