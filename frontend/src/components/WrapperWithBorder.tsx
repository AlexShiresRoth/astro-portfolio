const WrapperWithBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full md:gap-12 gap-6 py-12">{children}</div>
  );
};

export default WrapperWithBorder;
