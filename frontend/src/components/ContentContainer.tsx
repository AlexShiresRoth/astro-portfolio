import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  children: ReactNode;
  id: string;
  isFirst?: boolean;
};

const Content = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full flex flex-col items-center justify-center relative animate-fadeInAndUp",
      )}
    >
      <div className="w-11/12 md:w-3/4 md:py-20 py-10 gap-8 flex flex-col">
        {children}
      </div>
      <div className="h-0.5 w-full bg-black/50 mt-8 animate-growWidth absolute bottom-0 left-0" />
    </section>
  );
};

const ContentContainer = ({ children, id, isFirst = false }: Props) => {
  return <Content children={children} id={id} />;
};

export default ContentContainer;
