const Header = () => {
  return (
    <header className="block min-h-screen">
      <div className="sticky top-16">
        <div className="flex w-full flex-col items-start gap-2 md:gap-4">
          <h1 className="uppercase text-black text-left font-bold text-5xl">
            Alex Rothenberg
          </h1>
          <p className="text-xl w-3/4 text-black/90">
            I'm a <b>Front End Engineer</b>, crafting scalable and user-centric
            front end solutions with React & Typescript.
          </p>
        </div>
        <div className="my-2 md:my-8">
          <a
            href={"/blog"}
            className="bg-emerald-500 border-2 border-black px-4 text-black py-2 font-semibold md:px-6 md:py-4 md:text-lg hover:shadow-none shadow-bottom-black transition-shadow hover:text-black"
          >
            Read Stuff
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
