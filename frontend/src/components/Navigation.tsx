import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const NavigationButton = ({
  children,
  callback,
  isActive,
  isScrolling,
}: {
  children: React.ReactNode;
  callback: () => void;
  isActive: boolean;
  isScrolling: boolean;
}) => {
  return (
    <button
      className={cn(
        "text-yellow-50 md:text-base text-sm font-bold p-1 md:p-2 md:px-4 md:border-2 rounded-full border-yellow-50 hover:shadow-[4px_4px_0_0_rgba(255,100,100,1)] hover:bg-yellow-50 hover:text-black transition-all duration-300",
        isActive &&
          "bg-yellow-50 text-black shadow-[4px_4px_0_0_rgba(255,100,100,1)] hover:bg-transparent hover:text-yellow-50",
        isScrolling && "md:p-1 md:text-sm",
      )}
      onClick={() => callback()}
    >
      {children}
    </button>
  );
};

const Navigation = () => {
  const [navIndex, setNavIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = [
    {
      name: "home",
      title: "Home",
    },
    {
      name: "projects",
      title: "Projects",
    },
    {
      name: "work",
      title: "Experience",
    },

    {
      name: "contact",
      title: "Contact",
    },
  ];

  const handleNavigation = (index: number) => {
    setNavIndex(index);
    const element = document.getElementById(sections[index].name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const body = document.body;
    const sectionPositions = sections.map((section) => {
      const element = document.getElementById(section.name);
      return element?.getBoundingClientRect().top;
    });
    body.addEventListener(
      "scroll",
      () => {
        if (body.scrollTop > 100) {
          setIsScrolling(true);
          const index = sectionPositions.findIndex(
            (position) => position >= body.scrollTop + 120,
          );
          setNavIndex(index);
        } else {
          setIsScrolling(false);
          setNavIndex(0);
        }
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
        "w-screen fixed top-2 left-0 py-8 z-50 flex items-center px-8 md:px-32",
        isScrolling &&
          "py-2 md:py-4 transition-all top-0 bg-[#111]/90 backdrop-blur-md",
      )}
    >
      <div className="flex w-full gap-2 md:gap-8 justify-between md:justify-start">
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
