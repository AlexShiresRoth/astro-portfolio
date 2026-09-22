import type { Header as HeaderType } from "../types/project";
import Links from "./Links";

const Header = ({ header }: { header: HeaderType }) => {
  const words = ["designing", "building"];
  const titleMap = header.title.split(" ").map((word) => {
    return {
      word,
      isHighlighted: words.includes(word.toLowerCase()),
    };
  });

  return (
    <header className="w-full flex flex-col justify-center items-center pt-20 pb-8 md:py-32 md:pt-40 relative overflow-x-hidden">
      <div className="flex w-11/12 md:w-3/4 max-w-6xl">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-left text-5xl md:text-8xl font-hankenGrotesk font-bold  animate-fadeIn2 leading-none flex flex-wrap gap-2">
              {titleMap.map((item) => (
                <span
                  key={item.word}
                  className={item.isHighlighted ? "text-accent italic" : ""}
                >
                  {item.word}
                </span>
              ))}
            </h1>
          </div>
          <div>
            <p className="text-xl max-w-2xl animate-fadeIn3">
              {header.subtitle}
            </p>
          </div>
          <div className="flex gap-8 animate-fadeIn4">
            <Links />
          </div>
        </div>
      </div>
      <div className="styled-border bottom-0 absolute left-0" />
    </header>
  );
};

export default Header;
