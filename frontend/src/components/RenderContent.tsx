import { useContext } from "react";
import { NavContext } from "../context/NavigationContextProvider";
import type { Work } from "../types/project";
import Header from "./Header";
import WorkComponent from "./Work";

type Props = {
  work: Work[];
};
const RenderContent = ({ work }: Props) => {
  const { navIndex } = useContext(NavContext);
  console.log(work);
  return (
    <>
      {navIndex === 0 && <Header />}
      {navIndex === 1 && <WorkComponent workMap={work} />}
    </>
  );
};

export default RenderContent;
