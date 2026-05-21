import type { Project } from "../types/project";
import ProjectComponent from "./Project";
import Subheading from "./Subheading";
import WrapperWithBorder from "./WrapperWithBorder";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <WrapperWithBorder>
      <Subheading text="Projects" />
      <div className="flex gap-4 md:gap-8 md:grid sm:grid-cols-2 md:grid-cols-3 flex-wrap">
        {projects.map((project) => {
          return <ProjectComponent key={project._id} project={project} />;
        })}
      </div>
    </WrapperWithBorder>
  );
};

export default Projects;
