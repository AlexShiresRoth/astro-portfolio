import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentContainer = ({ children }: Props) => {
  return (
    <section className="w-full flex flex-col items-center justify-center z-30 relative">
      {children}
    </section>
  );
};

export default ContentContainer;
