import type { Header as HeaderType } from "../types/project";
import Links from "./Links";

const Header = ({ header }: { header: HeaderType }) => {
  return (
    <header className="w-full flex flex-col h-[95vh]">
      <div className="flex flex-col w-fit gap-6 rounded-xl max-w-5xl sticky md:top-1/3 top-1/4">
        <h1 className="text-left font-extrabold text-6xl md:text-9xl font-robotoMono">
          {header.title}
        </h1>
        {header.contentList?.map((content) => (
          <p key={content} className="md:text-xl">
            {content}
          </p>
        ))}
        <div className="flex gap-8 text-[rgba(255,100,100,1)]">
          <Links />
        </div>
      </div>
    </header>
  );
};

export default Header;
