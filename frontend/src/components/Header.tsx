import type { Header as HeaderType } from "../types/project";
import BackgroundShapes from "./Background";
import Links from "./Links";

const Header = ({ header }: { header: HeaderType }) => {
  return (
    <header className="w-full flex flex-col justify-center items-center min-h-screen md:min-h-[85vh] relative overflow-x-hidden">
      <div className="flex w-11/12 md:w-3/4 max-w-6xl">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-left text-6xl md:text-8xl font-firaSans animate-fadeIn2 text-black">
              {header.title}
            </h1>
          </div>
          <p className="text-xl text-black/80 animate-fadeIn3">
            {header.subtitle}
          </p>
          <div className="flex flex-col gap-4">
            {header.contentList?.map((content) => (
              <p
                key={content}
                className="md:text-xl animate-fadeIn3 max-w-2xl text-black/80"
              >
                {content}
              </p>
            ))}
          </div>
          <div className="flex gap-8 text-black animate-fadeIn4">
            <Links />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <BackgroundShapes />
      </div>
      <div className="h-0.5 w-full bg-black/50 bottom-0 absolute left-0 animate-growWidth" />
    </header>
  );
};

export default Header;
