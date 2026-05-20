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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = useCallback(
    (body: HTMLElement, sectionPositions: number[]) => {
      if (body.scrollTop > 100) {
        setIsScrolling(true);
        const index = sectionPositions.findIndex(
          (position, i, arr) =>
            body.scrollTop + 100 >= position &&
            body.scrollTop + 100 < (arr[i + 1] ?? Infinity),
        );
        setNavIndex(index);
      } else {
        setIsScrolling(false);
        setNavIndex(0);
      }
    },
    [],
  );

  useEffect(() => {
    const body = document.body;
    const sectionPositions = sections.map((section) => {
      const element = document.getElementById(section.name);
      return element?.getBoundingClientRect().top ?? -1;
    });
    body.addEventListener(
      "scroll",
      () => {
        handleScroll(body, sectionPositions);
      },
      {
        passive: true,
      },
    );
    return () => {
      body.removeEventListener("scroll", () => {
        setIsScrolling(false);
      });
    };
  }, []);

  return (
    <nav
      className={cn(
        "w-screen fixed top-2 left-0 py-8 z-50 flex items-center justify-center",
        isScrolling &&
          "py-2 md:py-4 transition-all top-0 bg-[#111]/90 backdrop-blur-md",
      )}
    >
      <div className="flex w-11/12 md:w-3/4 gap-2 md:gap-8 justify-between md:justify-start">
        {sections.map((navItem, i) => (
          <NavigationButton
            key={navItem.name}
            callback={() => handleNavigation(i)}
            isActive={navIndex === i}
            isScrolling={isScrolling}
          >
            {navItem.title}
          </NavigationButton>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
