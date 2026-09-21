import { FaMapMarkerAlt } from "react-icons/fa";
import type { Work } from "../types/project";

type Props = {
  work: Work;
};

const Experience = ({ work }: Props) => {
  return (
    <div className="flex flex-col gap-4" key={work._id}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-amber-700 flex items-center gap-1 text-sm ">
            <FaMapMarkerAlt size={12} /> {work.location}
          </p>
        </div>
        <p className="text-black/50 text-sm">{work.dateRange}</p>
      </div>
      {!work.link ? (
        <p className="text-xl md:text-2xl">{work.title}</p>
      ) : (
        <a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl text-black hover:underline hover:italic transition-all duration-300"
        >
          {work.title}
        </a>
      )}
      <div className="flex flex-col gap-4">
        {work.description.map((description) => (
          <p className="text-black/50" key={description}>
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Experience;
