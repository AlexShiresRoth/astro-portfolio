const Subheading = ({ text }: { text: string }) => {
  return (
    <h2 className="md:text-5xl text-3xl font-firaSans text-black animate-fadeIn">
      {text}
    </h2>
  );
};

export default Subheading;
