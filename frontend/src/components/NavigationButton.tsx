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
        "text-black md:text-base text-sm font-bold p-1 md:p-2 md:px-4 md:border-2 rounded-full border-black md:hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:hover:bg-yellow-50 md:hover:text-black transition-all duration-300",
        isActive &&
          "bg-yellow-50 text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:hover:bg-transparent md:hover:text-yellow-50",
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
