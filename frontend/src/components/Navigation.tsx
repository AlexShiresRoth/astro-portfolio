import { useCallback, useEffect, useState } from "react";
import { sections } from "../constants";
import { cn } from "../lib/utils";
import NavigationButton from "./NavigationButton";

const Navigation = () => {
  const [navIndex, setNavIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavigation = (index: number) => {
    setNavIndex(index);
    const element = document.getElementById(sections[index].name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = useCallback((sn: number, sectionPositions: number[]) => {
    if (sn > 100) {
      setIsScrolling(true);
      const index = sectionPositions.findIndex(
        (position, i, arr) =>
          sn + 150 >= position && sn + 150 < (arr[i + 1] ?? Infinity),
      );
      setNavIndex(index);
    } else {
      setIsScrolling(false);
      setNavIndex(0);
    }
  }, []);

  useEffect(() => {
    const sectionPositions = sections.map((section) => {
      const element = document.getElementById(section.name);
      return element?.offsetTop ?? -1;
    });

    window.addEventListener(
      "scroll",
      () => {
        handleScroll(window.scrollY, sectionPositions);
      },
      {
        passive: true,
      },
    );
    return () => {
      window.removeEventListener("scroll", () => {
        setIsScrolling(false);
      });
    };
  }, [handleScroll]);

  return (
    <nav
      className={cn(
        "w-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center pt-4 transition-all duration-300 font-firaSans",
        isScrolling && "backdrop-blur-md pt-2",
      )}
    >
      <div className="flex justify-between items-center w-11/12 md:w-3/4 gap-8 max-w-6xl">
        <div>
          <p className="font-semibold text-sm">Alex Rothenberg</p>
        </div>
        <div className="flex gap-2 md:gap-8 items-center">
          {sections.map((navItem, i) => (
            <NavigationButton
              index={i}
              key={navItem.name}
              callback={() => handleNavigation(i)}
              isActive={navIndex === i}
              isScrolling={isScrolling}
            >
              {navItem.title}
            </NavigationButton>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="mailto:alexrothenberg10@gmail.com">
            <p className="text-sm underline decoration-emerald-600 underline-offset-8">
              Contact
            </p>
          </a>
        </div>
      </div>

      <div
        className={cn("styled-border self-end mt-4", isScrolling && "mt-2")}
      />
    </nav>
  );
};

export default Navigation;
