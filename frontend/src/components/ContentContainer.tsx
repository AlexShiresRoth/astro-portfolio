import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
};

const ContentContainer = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className="w-full flex flex-col items-center justify-center relative z-10 my-10"
    >
      <div className="w-11/12 md:w-3/4">{children}</div>
    </section>
  );
};

export default ContentContainer;
