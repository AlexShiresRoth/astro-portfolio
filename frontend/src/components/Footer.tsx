import Links from "./Links";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center w-full justify-center py-4">
      <p className="text-black text-lg">
        Made with 👾 by Alex Rothenberg ©{new Date().getFullYear()}
      </p>
      <div className="flex gap-8 text-black text-sm">
        <Links />
      </div>
    </footer>
  );
};

export default Footer;
