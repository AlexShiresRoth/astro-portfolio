import { cn } from "../lib/utils";

const NavigationButton = ({
  children,
  callback,
  isActive,
  isScrolling,
  index,
}: {
  children: React.ReactNode;
  callback: () => void;
  isActive: boolean;
  isScrolling: boolean;
  index: number;
}) => {
  return (
    <button
      className={cn(
        "transition-all duration-300 text-sm",
        isActive && "text-accent",
        isScrolling && "md:p-1 md:text-sm",
        index === 0 && "animate-fadeIn",
        index === 1 && "animate-fadeIn2",
        index === 2 && "animate-fadeIn3",
      )}
      onClick={() => callback()}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
