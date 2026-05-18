import type { Work } from "../types/project";
import ProjectComponent from "./Project";

const WorkComponent = ({ workMap }: { workMap: Work[] }) => {
  return (
    <div className="flex flex-col p-32 bg-black  border-t-8 border-t-amber-900 border-b-8 border-gray-500 w-full">
      <div className="flex flex-col gap-20">
        {workMap.map((work) => {
          return (
            <div className="flex items-center gap-4 h-full" key={work._id}>
              <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-bold text-2xl text-amber-400">
                    {work.title}
                  </h3>
                  <div className="flex flex-col gap-2 mr-10">
                    <p className="text-gray-300">{work.dateRange}</p>
                    <p className="text-gray-300">{work.description}</p>
                    <p className="text-gray-300">{work.responsibilities}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  {work.Projects?.map((project) => {
                    return (
                      <ProjectComponent key={project._id} project={project} />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkComponent;
