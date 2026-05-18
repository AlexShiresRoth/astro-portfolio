import { ArrowUpRight } from "lucide-react";

const Header = () => {
  return (
    <header className="px-8 md:p-28 w-full h-[99.5vh] text-yellow-50 flex flex-col justify-center">
      <div className="flex flex-col w-fit gap-2 md:gap-4 relative z-10 rounded-xl md:p-4 max-w-5xl">
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
          <a
            href="https://github.com/AlexShiresRoth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center"
          >
            Github
            <ArrowUpRight size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-rothenberg-603112110/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center"
          >
            LinkedIn
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
