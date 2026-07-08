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
          {!work.link ? (
            <p className="text-xl md:text-2xl text-black">{work.title}</p>
          ) : (
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-black hover:underline hover:italic hover:text-amber-500 transition-all duration-300"
            >
              {work.title}
            </a>
          )}
          <div className="flex flex-col gap-2 mr-10">
            <p className="text-amber-500 flex items-center gap-1">
              <FaMapMarkerAlt size={16} /> {work.location}
            </p>
            <p className="text-black/80">{work.dateRange}</p>
            <div className="flex flex-col gap-2">
              {work.description.map((description) => (
                <p className="text-black/80" key={description}>
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
