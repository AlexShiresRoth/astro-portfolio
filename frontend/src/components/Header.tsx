import type { Header as HeaderType } from "../types/project";
import Links from "./Links";

const Header = ({ header }: { header: HeaderType }) => {
  return (
    <header className="w-full h-[99.5vh] text-yellow-50 flex flex-col justify-center">
      <div className="flex flex-col w-fit gap-2 md:gap-4 relative z-10 rounded-xl max-w-5xl">
        <h1 className="text-left font-extrabold text-3xl md:text-9xl font-robotoMono">
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
