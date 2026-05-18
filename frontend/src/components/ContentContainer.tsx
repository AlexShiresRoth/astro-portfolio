import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
};

const ContentContainer = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className="w-full flex flex-col items-center justify-center relative z-10"
    >
      {children}
    </section>
  );
};

export default ContentContainer;
