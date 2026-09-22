import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

// TODO - use sanity to get these links
const Links = () => {
  return (
    <>
      <a
        href="https://github.com/AlexShiresRoth"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-all duration-300 flex items-center hover:text-accent"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/alex-rothenberg-603112110/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-all duration-300 flex items-center hover:text-accent"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="mailto:hello@alexr.dev"
        className="hover:scale-110 transition-all duration-300 flex items-center hover:text-accent"
      >
        <MdMail size={26} />
      </a>
    </>
  );
};

export default Links;
