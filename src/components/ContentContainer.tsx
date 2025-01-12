import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentContainer = ({ children }: Props) => {
  return (
    <section className="w-full flex flex-col items-center justify-center z-30 relative">
      <div className="w-11/12 md:w-3/4 grid grid-cols-2 p-16 min-h-screen">
        {children}
      </div>
    </section>
  );
};

export default ContentContainer;
