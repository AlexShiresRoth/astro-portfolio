import type { Work } from "../types/project";
import Experience from "./Experience";
import Subheading from "./Subheading";

const WorkComponent = ({ workMap }: { workMap: Work[] }) => {
  return (
    <>
      <Subheading text="Experience" />
      <div className="flex flex-col">
        {workMap.map((work, index) => (
          <Experience key={work._id} work={work} index={index} />
        ))}
      </div>
    </>
  );
};

export default WorkComponent;
