import type { Work } from "../types/project";
import Experience from "./Experience";

const WorkComponent = ({ workMap }: { workMap: Work[] }) => {
  return (
    <div className="flex flex-col px-8 md:p-32 w-full relative h-full md:mt-0 mt-10">
      <div className="flex flex-col md:gap-20 gap-4 border-t-2 border-yellow-50/50 z-10">
        <h2 className="md:text-5xl text-3xl font-bold text-yellow-50 my-10">
          Work Experience
        </h2>
        {workMap.map((work) => {
          return <Experience key={work._id} work={work} />;
        })}
      </div>
    </div>
  );
};

export default WorkComponent;
