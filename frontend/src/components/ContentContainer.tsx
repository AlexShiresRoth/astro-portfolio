import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  children: ReactNode;
  id: string;
  isFirst?: boolean;
};

const withBumper = (children: ReactNode, isFirst: boolean) => {
  return (
    <div
      className={cn("flex flex-col relative z-10", isFirst ? "mt-[70vh]" : "")}
      id="bumper"
    >
      <div className="h-20 w-full bg-[#111]/10 flex bg-gradient-to-b from-transparent to-[#111]" />
      {children}
    </div>
  );
};

const Content = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full flex flex-col items-center justify-center z-10 bg-[#111] relative",
      )}
    >
      <div className={cn("w-11/12 md:w-3/4 md:pb-20 pb-10 text-yellow-50")}>
        {children}
      </div>
    </section>
  );
};

const ContentContainer = ({ children, id, isFirst = false }: Props) => {
  return isFirst ? (
    withBumper(<Content children={children} id={id} />, isFirst)
  ) : (
    <Content children={children} id={id} />
  );
};

export default ContentContainer;
