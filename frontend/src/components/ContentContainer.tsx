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
      className={cn("w-full flex flex-col items-center justify-center")}
    >
      <div className={cn("w-11/12 md:w-3/4 md:pb-20 pb-10 text-yellow-50")}>
        {children}
      </div>
    </section>
  );
};

const ContentContainer = ({ children, id, isFirst = false }: Props) => {
  return <Content children={children} id={id} />;
};

export default ContentContainer;
