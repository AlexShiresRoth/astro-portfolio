import type { Work } from "../types/project";
import Experience from "./Experience";
import Subheading from "./Subheading";

const WorkComponent = ({ workMap }: { workMap: Work[] }) => {
  return (
    <>
      <Subheading text="Experience" />
      <div className="flex flex-col gap-12">
        {workMap.map((work) => (
          <div className={"border-t border-stone-50/5 pt-8"} key={work._id}>
            <Experience key={work._id} work={work} />
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkComponent;
