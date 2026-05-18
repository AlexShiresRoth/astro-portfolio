import { useContext } from "react";
import { NavContext } from "../context/NavigationContextProvider";
import { cn } from "../lib/utils";

const NavigationButton = ({
  children,
  callback,
  isActive,
}: {
  children: React.ReactNode;
  callback: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      className={cn(
        "text-white font-bold p-2 px-4 border-2 rounded-full border-white",
        isActive && "bg-white text-black",
      )}
      onClick={() => callback()}
    >
      {children}
    </button>
  );
};

const Navigation = () => {
  const { navIndex, setNavIndex } = useContext(NavContext);

  return (
    <nav className="w-screen fixed top-2 left-0 py-8 z-50 flex items-center px-24">
      <div className="flex gap-8">
        <NavigationButton
          callback={() => setNavIndex(0)}
          isActive={navIndex === 0}
        >
          Home
        </NavigationButton>
        <NavigationButton
          callback={() => setNavIndex(1)}
          isActive={navIndex === 1}
        >
          Work
        </NavigationButton>
        <NavigationButton
          callback={() => setNavIndex(2)}
          isActive={navIndex === 2}
        >
          About
        </NavigationButton>
        <NavigationButton
          callback={() => setNavIndex(3)}
          isActive={navIndex === 3}
        >
          Contact
        </NavigationButton>
      </div>
    </nav>
  );
};

export default Navigation;
