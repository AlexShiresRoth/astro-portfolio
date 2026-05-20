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

export default NavigationButton;
