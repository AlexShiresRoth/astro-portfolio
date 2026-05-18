import type { Work } from "../types/project";
import ProjectComponent from "./Project";

type Props = {
  work: Work;
};

const Experience = ({ work }: Props) => {
  return (
    <div className="flex items-center gap-4 h-full" key={work._id}>
      <div className="grid grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-bold text-2xl text-yellow-50">{work.title}</h3>
          <div className="flex flex-col gap-2 mr-10">
            <p className="text-yellow-50">{work.dateRange}</p>
            <p className="text-yellow-50">{work.description}</p>
            <p className="text-yellow-50">{work.responsibilities}</p>
          </div>
        </div>
        <div className="flex gap-4">
          {work.Projects?.map((project) => {
            return <ProjectComponent key={project._id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
