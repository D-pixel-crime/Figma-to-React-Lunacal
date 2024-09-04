import { CircleHelp } from "lucide-react";

const Box1 = () => {
  return (
    <div className="flex-center flex-col gap-10">
      <div className="flex-col flex-center gap-8 box relative px-12 py-10">
        <div className="flex-center text-[#A3ADBA] w-fit top-2.5 left-2.5 absolute">
          <CircleHelp size={20} />
        </div>
        <div className="side-line"></div>
        <div className="side-boxes flex-center flex-col gap-[1.5px]">
          <div className="flex gap-[1.5px]">
            <div className="bg-[#4A4E54] h-[0.5rem] w-[0.5rem] rounded-[1.5px]"></div>
            <div className="bg-[#4A4E54] h-[0.5rem] w-[0.5rem] rounded-[1.5px]"></div>
          </div>
          <div className="flex gap-[1.5px]">
            <div className="bg-[#4A4E54] h-[0.5rem] w-[0.5rem] rounded-[1.5px]"></div>
            <div className="bg-[#4A4E54] h-[0.5rem] w-[0.5rem] rounded-[1.5px]"></div>
          </div>
          <div className="flex gap-[1.5px]">
            <div className="bg-[#4A4E54] h-[0.5rem] w-[0.5rem] rounded-[1.5px]"></div>
            <div className="bg-[#4A4E54] h-[0.5rem] w-[0.5rem]"></div>
          </div>
        </div>
        <div
          className="w-full bg-[#171717] rounded-[23px] flex p-2"
          style={{
            boxShadow: "inset 0px 4.96001px 12.4px 2.48px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h2 className="h2-selected flex-center px-10 py-2.5 w-full">
            About Me
          </h2>
          <h2 className="px-10 py-2.5 flex-center w-full text-[#A3ADB2]">
            Licenses
          </h2>
          <h2 className="px-10 py-2.5 flex-center w-full text-[#A3ADB2]">
            Recomended
          </h2>
        </div>
        <div className="w-full text-[#969696] text-base">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now. <br />
          <br />I was born and raised in Albany, NY& have been living in Santa
          Carla for the past 10 years my wife Tiffany and my 4 year old twin
          daughters- Emma and Ella. Both of them are just starting school, so my
          calender is usually blocked between 9-10 AM. This is a...
        </div>
      </div>
      <div className="line-below"></div>
    </div>
  );
};
export default Box1;
