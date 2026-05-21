import Subheading from "./Subheading";
import WrapperWithBorder from "./WrapperWithBorder";

type Technology = {
  name: string;
  icon: React.ReactNode;
};

// get rid of icons and just make array of strings
const technologies: string[] = [
  "React",
  "Typescript",
  "Next.js",
  "Tailwind CSS",
  "Sanity",
  "Astro",
  "Supabase",
  "GraphQL",
  "Svelte",
  "Vite",
  "Contentful",
  "Drizzle",
];

const Tech = () => {
  return (
    <WrapperWithBorder>
      <Subheading text="Tech I use" />
      <ul className="flex justify-between items-center gap-4 flex-wrap md:flex-nowrap">
        {technologies.map((t) => (
          <p
            key={t}
            className="text-yellow-50 italic text-lg text-nowrap px-4 p-2 bg-slate-800/80 rounded"
          >
            {t}
          </p>
        ))}
      </ul>
    </WrapperWithBorder>
  );
};

export default Tech;
