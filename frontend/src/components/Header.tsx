import type { Header as HeaderType } from "../types/project";
import Links from "./Links";

const Header = ({ header }: { header: HeaderType }) => {
  return (
    <header className="w-full flex flex-col sticky md:top-1/3 top-1/4 justify-center items-center z-10">
      <div className="flex w-11/12 md:w-3/4 justify-center text-yellow-50">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-left font-extrabold text-6xl font-robotoMono animate-fadeIn2">
              {header.title}
            </h1>
            <p className="text-xl text-yellow-50/60">{header.subtitle}</p>
            <div className="flex gap-8 text-[rgba(255,100,100,1)] animate-fadeIn4">
              <Links />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {header.contentList?.map((content) => (
              <p key={content} className="md:text-xl animate-fadeIn3">
                {content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
