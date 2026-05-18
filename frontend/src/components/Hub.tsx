import { NavigationContextProvider } from "../context/NavigationContextProvider";
import type { Work } from "../types/project";
import AnimatedContainer from "./AnimatedContainer";
import Navigation from "./Navigation";
import RenderContent from "./RenderContent";

type Props = {
  work: Work[];
};

const Hub = ({ work }: Props) => {
  return (
    <NavigationContextProvider>
      <Navigation />
      <AnimatedContainer>
        <RenderContent work={work} />
      </AnimatedContainer>
    </NavigationContextProvider>
  );
};

export default Hub;
