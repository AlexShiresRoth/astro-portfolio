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
        "text-yellow-50 font-bold p-2 px-4 border-2 rounded-full border-yellow-50 hover:shadow-[4px_4px_0_0_rgba(255,100,100,1)] hover:bg-yellow-50 hover:text-black transition-all duration-300",
        isActive &&
          "bg-yellow-50 text-black shadow-[4px_4px_0_0_rgba(255,100,100,1)] hover:bg-transparent hover:text-yellow-50",
        isScrolling && "p-1 text-sm",
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
  const sections = ["home", "work", "about", "contact"];
  const handleNavigation = (index: number) => {
    setNavIndex(index);
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const body = document.body;
    body.addEventListener(
      "scroll",
      () => {
        if (body.scrollTop > 100) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
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
        "w-screen fixed top-2 left-0 py-8 z-50 flex items-center px-32",
        isScrolling && "py-4 transition-all top-0 bg-black/80 backdrop-blur-md",
      )}
    >
      <div className="flex gap-8">
        <NavigationButton
          callback={() => handleNavigation(0)}
          isActive={navIndex === 0}
          isScrolling={isScrolling}
        >
          Home
        </NavigationButton>
        <NavigationButton
          callback={() => handleNavigation(1)}
          isActive={navIndex === 1}
          isScrolling={isScrolling}
        >
          Work
        </NavigationButton>
        <NavigationButton
          callback={() => handleNavigation(2)}
          isActive={navIndex === 2}
          isScrolling={isScrolling}
        >
          About
        </NavigationButton>
        <NavigationButton
          callback={() => handleNavigation(3)}
          isActive={navIndex === 3}
          isScrolling={isScrolling}
        >
          Contact
        </NavigationButton>
      </div>
    </nav>
  );
};

export default Navigation;
