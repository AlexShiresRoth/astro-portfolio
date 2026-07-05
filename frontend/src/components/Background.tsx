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
    <div id="canvas" className="flex flex-col w-full md:opacity-100 opacity-10">
      {children}
    </div>
  );
};

const HeroBackground = () => {
  const windowColor = "bg-amber-500";
  const bottomColor = "border-b-slate-800";
  const borderColor = "border-gray-700";

  return (
    <Canvas>
      {/* Cars */}
      <FlyingCar />
      <FlyingCar2 />
      <FlyingCar3 />
      {/* Buildings */}
      <div
        data-testid="buildings-layer-1"
        className="flex items-end gap-8 md:gap-2 flex-row-reverse z-0 mr-2 animate-buildingsFadeIn"
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
    </Canvas>
  );
};
export default HeroBackground;
