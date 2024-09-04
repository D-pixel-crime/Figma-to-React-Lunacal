import { useEffect, useState } from "react";
import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);
  }, []);

  return isInitialLoad ? (
    <TailSpin
      wrapperClass="h-screen w-screen bg-slate-900 flex-center"
      visible={true}
      height={65}
      width={65}
      radius={1}
      color="#363C4F"
    />
  ) : (
    <div className="min-h-screen max-w-screen bg-black text-white text-sm">
      <div className="background w-full min-h-screen grid min-[1325px]:grid-cols-2 max-[1325px]:grid-cols-3 gap-20 lg:px-28 lg:py-14 md:px-10 md:py-6 px-8 py-6 text-sm">
        <div className="col-start-1"></div>
        <div className="col-start-2 flex-center flex-col gap-5 w-full max-[1325px]:col-span-2 text-sm">
          <Box1 />
          <div className="line-below"></div>
          <Box2 />
          <div className="line-below"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
