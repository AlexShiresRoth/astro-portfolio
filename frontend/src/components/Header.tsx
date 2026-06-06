import type { Header as HeaderType } from "../types/project";
import Links from "./Links";

const Header = ({ header }: { header: HeaderType }) => {
  return (
    <header className="a w-full flex flex-col sticky md:top-1/3 top-1/4 justify-center items-center z-10">
      <div className="flex flex-col w-11/12 md:w-3/4 justify-center text-yellow-50">
        <div className="max-w-5xl flex flex-col gap-6">
          <h1 className="text-left font-extrabold text-6xl md:text-9xl font-robotoMono animate-fadeIn2">
            {header.title}
          </h1>
          {header.contentList?.map((content) => (
            <p key={content} className="md:text-xl animate-fadeIn3">
              {content}
            </p>
          ))}
          <div className="flex gap-8 text-[rgba(255,100,100,1)] animate-fadeIn4">
            <Links />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
