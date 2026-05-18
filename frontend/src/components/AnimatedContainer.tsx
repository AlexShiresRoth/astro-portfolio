import BackgroundShapes from "./Background";

type Props = {
  children: React.ReactNode;
};

const AnimatedContainer = ({ children }: Props) => {
  return (
    <section className="w-full border-b-8 border-b-gray-400">
      {children}
      <BackgroundShapes />
    </section>
  );
};

export default AnimatedContainer;
