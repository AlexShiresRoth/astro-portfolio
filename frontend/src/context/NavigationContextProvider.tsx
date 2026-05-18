import { createContext, useState } from "react";

export const NavContext = createContext({
  navIndex: 0,
  setNavIndex: (_index: number) => {},
});

export const NavigationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navIndex, setNavIndex] = useState(0);
  return (
    <NavContext.Provider value={{ navIndex, setNavIndex }}>
      {children}
    </NavContext.Provider>
  );
};
