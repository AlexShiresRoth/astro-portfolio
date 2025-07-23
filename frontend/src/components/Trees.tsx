import { cn } from "../lib/utils";


type Props = {
  xCoord: string;
};

export const TreeBig = (props: Props) => {
  return (
    <span
      className={cn("absolute bottom-0 z-20 h-24 w-5 bg-amber-900", {
        [props.xCoord]: true,
      })}
    >
      <span className="absolute -left-4 -top-4 h-14 w-16 rounded-full bg-emerald-500" />
      <span className="absolute -right-[2px] top-1 h-12 w-14 rounded-full bg-emerald-600" />
      <span className="absolute left-[4px] top-1 h-12 w-14 rounded-full bg-emerald-400" />
      <span className="absolute -left-4 top-4 h-14 w-16 rounded-full bg-emerald-500" />
    </span>
  );
};


  
  export const TreeRegular = (props: Props) => {
    return (
      <span
        className={cn("absolute bottom-0 z-20 h-16 w-4 bg-amber-800", {
          [props.xCoord]: true,
        })}
      >
        <span className="absolute -left-2 -top-4 h-10 w-10 rounded-full bg-emerald-500" />
        <span className="absolute right-[1px] top-1 h-10 w-10 rounded-full bg-emerald-600" />
        <span className="absolute left-[4px] top-1 h-10 w-10 rounded-full bg-emerald-400" />
      </span>
    );
  };
  