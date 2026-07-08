import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  children: ReactNode;
  id: string;
  isLast?: boolean;
};

const Content = ({ children, id, isLast = false }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full flex flex-col items-center justify-center relative animate-fadeInAndUp",
      )}
    >
      <div className="w-11/12 md:w-3/4 max-w-6xl md:py-20 py-10 gap-8 flex flex-col">
        {children}
      </div>
      {!isLast && (
        <div className="h-0.5 w-full bg-black/50 mt-8 animate-growWidth absolute bottom-0 left-0" />
      )}
    </section>
  );
};

const ContentContainer = ({ children, id, isLast = false }: Props) => {
  return <Content children={children} id={id} isLast={isLast} />;
};

export default ContentContainer;
