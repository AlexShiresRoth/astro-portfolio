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
      className="flex flex-col w-full fixed bottom-1 left-0 z-0 h-screen border-b-8 border-b-slate-700"
    >
      {children}
      <div className="fixed bottom-0 left-0 w-full h-full bg-[#111]/80 md:bg-[#111]/70 backdrop-blur-xs md:backdrop-blur-none" />
    </div>
  );
};

const HeroBackground = () => {
  const windowColor = "bg-slate-400/60";
  const bottomColor = "border-b-slate-800/50";
  const borderColor = "border-gray-700";
  const secondLayerWindowColor = "bg-slate-600/60";
  const secondLayerBottomColor = "border-b-slate-800/50";
  const secondLayerBorderColor = "border-gray-800";

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
        <div
          data-testid="buildings-layer-1"
          className="absolute z-0 bottom-0 left-0"
        >
          <BuildingOne
            xCoord="left-2"
            windowColor={windowColor}
            bottomColor={bottomColor}
          />
          <BuildingTwo
            xCoord="left-[6.5vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingThree
            xCoord="left-[14vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingFour
            xCoord="left-[82vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingFive
            xCoord="left-[65vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingSix
            xCoord="left-[20vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingOne
            xCoord="left-[50.5vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
          />
          <Tower
            xCoord="left-[58vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingTwo
            xCoord="left-[37.5vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingThree
            xCoord="left-[45vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <BuildingFour
            xCoord="left-[28vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <Tower
            xCoord="left-[92.5vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
          <TowerTwo
            xCoord="left-[75vw]"
            windowColor={windowColor}
            bottomColor={bottomColor}
            borderColor={borderColor}
          />
        </div>
        <div
          data-testid="buildings-layer-2"
          className="absolute -z-10 bottom-0 left-0 w-full border-b-8 border-b-slate-700"
        >
          <BuildingOne
            xCoord="left-[87vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
          />
          <BuildingTwo
            xCoord="left-[95vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingThree
            xCoord="left-[25vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingFour
            xCoord="left-[10vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingFive
            xCoord="left-[18vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingSix
            xCoord="left-[33vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingOne
            xCoord="left-[26vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
          />
          <BuildingThree
            xCoord="left-[72vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingTwo
            xCoord="left-[79vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingFour
            xCoord="left-[58vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <TowerTwo
            xCoord="left-[5vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingThree
            xCoord="left-[41vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingFive
            xCoord="left-[-6vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingSix
            xCoord="left-[48vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
          <BuildingTwo
            xCoord="left-[53vw]"
            windowColor={secondLayerWindowColor}
            bottomColor={secondLayerBottomColor}
            borderColor={secondLayerBorderColor}
          />
        </div>
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
          windowColor={windowColor}
          bottomColor={bottomColor}
        />

        <TowerTwo
          xCoord="left-[75vw]"
          windowColor={windowColor}
          bottomColor={bottomColor}
          borderColor={borderColor}
        />
        <BuildingFour
          xCoord="left-[36vw]"
          windowColor={windowColor}
          bottomColor={bottomColor}
          borderColor={borderColor}
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
