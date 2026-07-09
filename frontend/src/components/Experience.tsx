import { FaMapMarkerAlt } from "react-icons/fa";
import type { Work } from "../types/project";

type Props = {
  work: Work;
  index: number;
};

const Experience = ({ work, index }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {index !== 0 && <div className="h-8 w-1 bg-black" />}
      <div
        className="flex flex-col md:grid md:grid-cols-2 gap-8 bg-amber-500 border-2 border-black p-8 rounded-lg"
        key={work._id}
      >
        <div className="flex flex-col gap-2">
          {!work.link ? (
            <p className="text-xl md:text-2xl text-black font-semibold">
              {work.title}
            </p>
          ) : (
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-black font-semibold hover:underline hover:italic transition-all duration-300"
            >
              {work.title}
            </a>
          )}
          <div className="flex flex-col gap-2 mr-10">
            <p className="text-black/80 flex items-center gap-1">
              <FaMapMarkerAlt size={16} /> {work.location}
            </p>
            <p className="text-black/80">{work.dateRange}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {work.description.map((description) => (
            <p className="text-black/80" key={description}>
              {description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
