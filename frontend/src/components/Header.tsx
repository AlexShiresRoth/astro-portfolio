const Header = () => {
  return (
    <header className="p-24 w-full bg-yellow-400 min-h-[60vh]">
      <div className="flex w-full flex-col items-start gap-2 md:gap-4">
        <h1 className="text-left font-bold text-7xl">Alex Rothenberg</h1>
        <p className="text-xl w-3/4 ">
          I'm a <b>Front End Engineer</b> @The Agora Companies
        </p>
      </div>
    </header>
  );
};

export default Header;
