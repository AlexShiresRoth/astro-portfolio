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
        "w-screen fixed top-2 left-0 md:pt-8 pt-4 z-50 flex flex-col items-center justify-center",
        isScrolling && "pt-2 md:pt-4 transition-all top-0 backdrop-blur-md",
      )}
    >
      <div className="flex w-11/12 md:w-3/4 gap-8 max-w-6xl">
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
      <div
        className={cn(
          "h-0.5 w-full bg-black/50 md:mt-8 mt-4 animate-growWidth self-end",
          isScrolling && "mt-2 md:mt-4",
        )}
      />
    </nav>
  );
};

export default Navigation;
