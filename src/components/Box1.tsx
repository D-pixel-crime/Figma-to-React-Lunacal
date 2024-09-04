import { CircleHelp } from "lucide-react";
import { useState } from "react";

const Box1 = () => {
  const [tab, setTab] = useState<"about" | "license" | "recommended">("about");

  return (
    <div className="flex-center flex-col gap-5 w-full max-[800px]:text-sm">
      <div className="flex-col flex-center gap-8 box relative px-12 py-6 w-full max-[800px]:text-sm">
        <div className="flex-center text-[#888989] w-fit top-2.5 left-2.5 absolute max-[800px]:text-sm">
          <CircleHelp size={20} />
        </div>
        <div className="side-line max-[800px]:text-sm"></div>
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
          className="w-full bg-[#171717] rounded-[23px] flex p-2 max-[800px]:text-sm"
          style={{
            boxShadow: "inset 0px 4.96001px 12.4px 2.48px rgba(0, 0, 0, 0.25)",
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setTab("about");
            }}
            className={`${
              tab === "about" ? "h2-selected" : "text-[#A3ADB2]"
            } flex-center min-[1400px]:px-10 px-5 py-2.5 w-full max-[800px]:text-sm`}
          >
            About Me
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setTab("license");
            }}
            className={`${
              tab === "license" ? "h2-selected" : "text-[#A3ADB2]"
            } flex-center min-[1400px]:px-10 px-5 py-2.5 w-full max-[800px]:text-sm`}
          >
            Licenses
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setTab("recommended");
            }}
            className={`${
              tab === "recommended" ? "h2-selected" : "text-[#A3ADB2]"
            } flex-center min-[1400px]:px-10 px-5 py-2.5 w-full max-[800px]:text-sm`}
          >
            Recomended
          </button>
        </div>
        <p className="w-full text-[#969696] text-base text-justify max-[800px]:text-sm">
          {tab === "about" && (
            <>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. <br />
              <br />I was born and raised in Albany, NY& have been living in
              Santa Carla for the past 10 years my wife Tiffany and my 4 year
              old twin daughters- Emma and Ella. Both of them are just starting
              school, so my calender is usually blocked between 9-10 AM. This is
              a...
            </>
          )}
          {tab === "license" && <>MIT License</>}
          {tab === "recommended" && <>These types of design is very good.</>}
        </p>
      </div>
    </div>
  );
};
export default Box1;
