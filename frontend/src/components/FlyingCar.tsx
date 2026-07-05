const FlyingCar = () => {
  return (
    <span className="absolute bottom-[20vh] -left-30 flex h-4 w-16 animate-moveReverse rounded-b-md rounded-t-lg bg-black">
      <span className="absolute -top-[100%] flex h-4 w-8 translate-x-1/2 justify-center rounded-t-full border-b-4 border-t-4 border-white border-b-slate-700 bg-slate-400"></span>
      <div className="flex items-center justify-end gap-1 px-1">
        <span className="roudned-full h-1 w-1 bg-slate-700"></span>
        <span className="roudned-full h-1 w-1 bg-slate-700"></span>
        <span className="roudned-full h-1 w-1 bg-slate-700"></span>
      </div>
    </span>
  );
};

export const FlyingCar2 = () => {
  return (
    <span className="absolute bottom-[15vh] -left-20 flex animate-move flex-col items-center">
      <span className="flex h-4 w-8 justify-center rounded-tl-full rounded-tr-full border-t-2 border-t-slate-200 bg-slate-300"></span>
      <span className="flex h-4 w-14  items-center justify-between rounded-md rounded-t-lg bg-amber-500 px-1">
        <div className="flex items-center justify-center gap-1 w-full">
          <span className="rounded-full h-1 w-full bg-amber-400"></span>
        </div>
      </span>
    </span>
  );
};
export const FlyingCar3 = () => {
  return (
    <span className="absolute bottom-[10vh] -left-50 flex animate-moveReverse2 flex-col items-center">
      <span className="flex h-4 w-8 justify-center rounded-tl-full rounded-tr-full bg-slate-300"></span>
      <span className="flex h-4 w-14  items-center justify-between rounded-md rounded-t-lg bg-black px-1">
        <div className="flex items-center gap-1 justify-between">
          <span className="roudned-full h-1 w-1 bg-amber-500"></span>
          <span className="roudned-full h-1 w-1 bg-amber-500"></span>
          <span className="roudned-full h-1 w-1 bg-amber-500"></span>
        </div>
      </span>
    </span>
  );
};

export default FlyingCar;
