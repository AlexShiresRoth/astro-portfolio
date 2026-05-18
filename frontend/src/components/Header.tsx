const Header = () => {
  return (
    <header className="p-32 w-full h-[99.5vh] text-yellow-50">
      <div className="flex w-full flex-col justify-center h-full  gap-2 md:gap-4 relative z-10">
        <h1 className="text-left font-extrabold text-9xl font-robotoMono">
          Alex
        </h1>
        <p className="text-3xl">Front End Engineer</p>
        <p className="text-xl">
          Passionate about building user-friendly and efficient web
          applications.
        </p>
      </div>
    </header>
  );
};

export default Header;
