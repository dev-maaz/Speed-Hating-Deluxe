import { Link } from "react-router-dom";
import CanvasBackground from "../components/CanvasBackground";


function HomePage() {
  return (
    <>
      <CanvasBackground />
      <div className="flex w-screen h-screen justify-center items-center flex-col text-slate-100 font-mono gap-2 z-10">
        <div className="p-4 flex flex-col items-center ">
          <h1 className=" rubik-mono-one-regular text-8xl flex items-center gap-4 hover:scale-110">
            Speed <span className="material-symbols-outlined">bolt</span>
          </h1>
          <h1 className=" rubik-mono-one-regular text-8xl text-red-500 hover:scale-110">
            Hating
          </h1>
        </div>

        <div className="flex p-8 flex-col items-center">
          <p className="">
            The hating webapp for keyboard warriors who not only can survive
          </p>
          <div className="flex gap-2">
            <p>but</p>
            <p className="text-red-500 font-extrabold">thrive</p>
            <p>in the internet of today. </p>
          </div>
        </div>

        <Link
          to="/play"
          className="p-4 px-24 rounded-full bg-slate-100 text-slate-950 hover:scale-110 font-mono"
        >
          Play
        </Link>
      </div>
    </>
  );
}

export default HomePage;
