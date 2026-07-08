import type { Work } from "../types/project";
import Experience from "./Experience";
import Subheading from "./Subheading";

const WorkComponent = ({ workMap }: { workMap: Work[] }) => {
  return (
    <>
      <Subheading text="Experience" />
      {workMap.map((work) => (
        <Experience key={work._id} work={work} />
      ))}
    </>
  );
};

export default WorkComponent;
