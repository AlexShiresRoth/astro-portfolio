import type { ReactNode } from "react";
import {
  BuildingFive,
  BuildingFour,
  BuildingOne,
  BuildingSix,
  BuildingThree,
  BuildingTwo,
  TowerTwo,
} from "./Buildings";
import FlyingCar, { FlyingCar2, FlyingCar3 } from "./FlyingCar";
import { TreeBig, TreeRegular } from "./Trees";

type Props<T> = {
  children: T;
};

const Canvas = ({ children }: Props<ReactNode>) => {
  return (
    <div id="canvas" className="flex flex-col w-full">
      {children}
      {/* <div className="fixed bottom-0 left-0 w-full h-full backdrop-blur-xs md:backdrop-blur-none" /> */}
    </div>
  );
};

const HeroBackground = () => {
  const windowColor = "bg-amber-500";
  const bottomColor = "border-b-slate-800";
  const borderColor = "border-gray-700";

  return (
    <Canvas>
      <AlwaysVisible>
        {/* Clouds */}
        {/* <CloudSmall />
        <CloudMedium />
        <Cloud /> */}
        {/* Cars */}
        <FlyingCar />
        <FlyingCar2 />
        <FlyingCar3 />
      </AlwaysVisible>
      <HideOnMobile>
        {/* Buildings */}
        <div
          data-testid="buildings-layer-1"
          className="flex items-end gap-2 flex-row-reverse z-0 mr-2 animate-buildingsFadeIn"
        >
          <TowerTwo
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingFive
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingOne windowColor={windowColor} bottomColor={bottomColor} />
          <BuildingTwo
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingThree
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingFour
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingSix
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
        </div>
        <div className="animate-treesFadeIn relative">
          <TreeRegular xCoord="left-[77vw]" scale="scale-110" />
          <TreeBig xCoord="left-[92vw]" scale="scale-75" />
          <TreeBig xCoord="left-[98vw]" scale="scale-125" />
          <TreeRegular xCoord="left-[59vw]" scale="scale-90" />
          <TreeBig xCoord="left-[83vw]" scale="scale-75" />
          <TreeRegular xCoord="left-[70vw]" scale="scale-110" />
          <TreeBig xCoord="left-[86vw]" scale="scale-90" />
        </div>
      </HideOnMobile>
      <HideOnDesktop>
        <div className="absolute z-0 bottom-0 left-0 flex items-end gap-6">
          <BuildingOne windowColor={windowColor} bottomColor={bottomColor} />
          <TowerTwo
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingFour
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
        </div>
        <TreeBig xCoord="right-0" scale="scale-125" />
        <TreeRegular xCoord="right-4" scale="scale-90" />
        <TreeBig xCoord="left-[60vw]" scale="scale-75" />
        <TreeRegular xCoord="left-[62vw]" scale="scale-110" />
        <TreeBig xCoord="left-[36vw]" scale="scale-90" />
        <TreeRegular xCoord="left-[38vw]" scale="scale-75" />
      </HideOnDesktop>
    </Canvas>
  );
};

const HideOnMobile = ({ children }: Props<ReactNode>) => (
  <div className="hidden md:block">{children}</div>
);

const HideOnDesktop = ({ children }: Props<ReactNode>) => (
  <div className="md:hidden">{children}</div>
);

const AlwaysVisible = ({ children }: Props<ReactNode>) => <>{children}</>;
export default HeroBackground;
