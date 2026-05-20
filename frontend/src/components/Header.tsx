import Links from "./Links";

const Header = () => {
  return (
    <header className="w-full h-[99.5vh] text-yellow-50 flex flex-col justify-center">
      <div className="flex flex-col w-fit gap-2 md:gap-4 relative z-10 rounded-xl max-w-5xl">
        <h1 className="text-left font-extrabold text-3xl md:text-9xl font-robotoMono">
          Hello, I'm Alex
        </h1>
        <p className="md:text-xl">
          I create performant and user-friendly web applications, with a focus
          on code organization and quality.
        </p>
        <p className="md:text-xl">
          I enjoy building things with Typescript and React and other frontend
          technologies. Currently exploring things with Svelte and Astro, and
          dabbling in Godot.
        </p>
        <div className="flex gap-8 text-[rgba(255,100,100,1)]">
          <Links />
        </div>
      </div>
    </header>
  );
};

export default Header;
