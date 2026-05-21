const WrapperWithBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full md:gap-12 gap-6">
      <div className="h-0.5 w-full bg-yellow-50/50"></div>
      {children}
    </div>
  );
};

export default WrapperWithBorder;
