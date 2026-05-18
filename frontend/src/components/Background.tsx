import type { ReactNode } from "react";
import {
  BuildingFive,
  BuildingFour,
  BuildingOne,
  BuildingSix,
  BuildingThree,
  BuildingTwo,
  Tower,
  TowerTwo,
} from "./Buildings";
import { Cloud, CloudMedium, CloudSmall } from "./Clouds";
import FlyingCar, { FlyingCar2, FlyingCar3 } from "./FlyingCar";
import Shrub from "./Shrub";
import { TreeBig, TreeRegular } from "./Trees";

type Props<T> = {
  children: T;
};

const Canvas = ({ children }: Props<ReactNode>) => {
  return (
    <div
      id="canvas"
      className="flex flex-col w-full fixed bottom-1 left-0 z-0 h-screen border-b-8 border-b-gray-400"
    >
      {children}
      <div className="fixed z-20 bottom-0 left-0 w-full h-full bg-[#111]/80 md:bg-[#111]/70 backdrop-blur-xs md:backdrop-blur-none" />
    </div>
  );
};

const HeroBackground = () => {
  return (
    <Canvas>
      <AlwaysVisible>
        {/* Clouds */}
        <CloudSmall />
        <CloudMedium />
        <Cloud />
        {/* Cars */}
        <FlyingCar />
        <FlyingCar2 />
        <FlyingCar3 />
      </AlwaysVisible>
      <HideOnMobile>
        {/* Buildings */}
        <BuildingOne
          xCoord="left-2"
          windowColor="bg-rose-400"
          bottomColor="border-b-gray-600"
        />
        <BuildingTwo
          xCoord="left-[6.5vw]"
          windowColor="bg-indigo-500"
          bottomColor="border-b-emerald-300"
          borderColor="border-indigo-500"
        />
        <BuildingThree
          xCoord="left-[14vw]"
          windowColor="bg-amber-400"
          bottomColor="border-b-amber-600"
        />
        <BuildingFour
          xCoord="left-[82vw]"
          windowColor="bg-orange-400"
          bottomColor="border-b-orange-600"
        />
        <BuildingFive
          xCoord="left-[65vw]"
          windowColor="bg-sky-400"
          bottomColor="border-b-sky-500"
        />
        <BuildingSix
          xCoord="left-[20vw]"
          windowColor="bg-emerald-400"
          bottomColor="border-b-emerald-600"
        />
        <BuildingOne
          xCoord="left-[50.5vw]"
          windowColor="bg-teal-400"
          bottomColor="border-b-gray-500"
        />
        <Tower
          xCoord="left-[58vw]"
          windowColor="bg-stone-900"
          bottomColor="border-b-violet-400"
          borderColor="border-violet-400"
        />{" "}
        <BuildingTwo
          xCoord="left-[37.5vw]"
          windowColor="bg-blue-500"
          bottomColor="border-b-blue-300"
          borderColor="border-blue-500"
        />{" "}
        <BuildingThree
          xCoord="left-[45vw]"
          windowColor="bg-green-400"
          bottomColor="border-b-green-300"
          borderColor="border-green-500"
        />
        <BuildingFour
          xCoord="left-[28vw]"
          windowColor="bg-fuchsia-400"
          bottomColor="border-b-fuchsia-600"
        />
        <Tower
          xCoord="left-[92.5vw]"
          windowColor="bg-gray-800"
          bottomColor="border-b-emerald-300"
          borderColor="border-emerald-300"
        />
        <TowerTwo
          xCoord="left-[75vw]"
          windowColor="bg-gray-800"
          bottomColor="border-blue-300"
          borderColor="bg-blue-300"
        />
        {/* Trees */}
        <TreeBig xCoord="-right-2" />
        <TreeBig xCoord="-left-1" />
        <TreeRegular xCoord="left-[7vw]" />
        <TreeRegular xCoord="left-[64vw]" />
        <TreeBig xCoord="left-[60vw]" />
        <TreeBig xCoord="left-[20vw]" />
        <TreeRegular xCoord="left-[74vw]" />
        <TreeRegular xCoord="left-[80vw]" />
        <TreeRegular xCoord="left-[36vw]" />
        <TreeRegular xCoord="left-[57vw]" />
        <Shrub xCoord="left-[13.5vw]" />
        <Shrub xCoord="left-[89vw]" />
        <Shrub xCoord="left-[83.5vw]" />
        <Shrub xCoord="left-[39.5vw]" />
        <Shrub xCoord="left-[51.5vw]" />
      </HideOnMobile>
      <HideOnDesktop>
        <BuildingOne
          xCoord="left-2"
          windowColor="bg-rose-400"
          bottomColor="border-b-gray-600"
        />

        <TowerTwo
          xCoord="left-[75vw]"
          windowColor="bg-gray-800"
          bottomColor="border-blue-300"
          borderColor="bg-blue-300"
        />
        <BuildingFour
          xCoord="left-[36vw]"
          windowColor="bg-orange-400"
          bottomColor="border-b-orange-600"
        />
        <TreeBig xCoord="-right-2" />
        <TreeBig xCoord="-left-1" />
        <TreeBig xCoord="left-[60vw]" />
        <TreeRegular xCoord="left-[36vw]" />
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
