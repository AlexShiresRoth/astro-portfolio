import { FaMapMarkerAlt } from "react-icons/fa";
import type { Work } from "../types/project";

type Props = {
  work: Work;
};

const Experience = ({ work }: Props) => {
  return (
    <div className="flex items-center gap-4 h-full" key={work._id}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl md:text-2xl text-yellow-50">
            {work.title}
          </h3>
          <div className="flex flex-col gap-2 mr-10">
            <p className="text-[rgba(255,100,100,1)] flex items-center gap-1">
              <FaMapMarkerAlt size={16} /> {work.location}
            </p>
            <p className="text-yellow-50">{work.dateRange}</p>
            <p className="text-yellow-50">{work.description}</p>
            <p className="text-yellow-50">{work.responsibilities}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
