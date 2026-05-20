import { ArrowUpRight, Mail } from "lucide-react";

// TODO - use sanity to get these links
const Links = () => {
  return (
    <>
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
      <a
        href="mailto:hello@alexr.dev"
        className="hover:underline flex items-center gap-1"
      >
        Email Me
        <Mail size={20} />
      </a>
    </>
  );
};

export default Links;
