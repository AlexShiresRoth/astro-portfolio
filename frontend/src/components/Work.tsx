import type { Work } from "../types/project";
import Experience from "./Experience";
import Subheading from "./Subheading";
import WrapperWithBorder from "./WrapperWithBorder";

const WorkComponent = ({ workMap }: { workMap: Work[] }) => {
  return (
    <WrapperWithBorder>
      <Subheading text="Work Experience" />
      {workMap.map((work) => (
        <Experience key={work._id} work={work} />
      ))}
    </WrapperWithBorder>
  );
};

export default WorkComponent;
