import type { Work } from "../types/project";
import Experience from "./Experience";

const WorkComponent = ({ workMap }: { workMap: Work[] }) => {
  return (
    <div className="flex flex-col p-32 w-full relative h-full">
      <div className="flex flex-col gap-20 bg-black/90 rounded-xl border-2 border-yellow-50/50 p-10 z-10">
        <h2 className="text-5xl font-bold text-yellow-50">Work Experience</h2>
        {workMap.map((work) => {
          return <Experience key={work._id} work={work} />;
        })}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default WorkComponent;
