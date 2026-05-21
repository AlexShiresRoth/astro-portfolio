import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  children: ReactNode;
  id: string;
  overlay?: boolean;
};

const ContentContainer = ({ children, id, overlay = true }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full flex flex-col items-center justify-center relative text-yellow-50 md:pb-20 pb-10",
        overlay ? "z-20 backdrop-blur-sm" : "z-10",
      )}
    >
      <div className="w-11/12 md:w-3/4">{children}</div>
    </section>
  );
};

export default ContentContainer;
