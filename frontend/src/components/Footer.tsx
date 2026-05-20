import Links from "./Links";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center w-full justify-center py-4 border-t border-yellow-50">
      <p className="text-yellow-50 text-lg">
        Made with 👾 by Alex Rothenberg ©{new Date().getFullYear()}
      </p>
      <div className="flex gap-8 text-yellow-50 text-sm">
        <Links />
      </div>
    </footer>
  );
};

export default Footer;
