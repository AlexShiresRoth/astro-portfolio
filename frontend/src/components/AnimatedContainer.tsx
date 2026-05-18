import BackgroundShapes from "./Background";

type Props = {
  children: React.ReactNode;
};

const AnimatedContainer = ({ children }: Props) => {
  return (
    <section className="w-full ">
      {children}
      <BackgroundShapes />
    </section>
  );
};

export default AnimatedContainer;
