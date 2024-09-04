import { CircleHelp, MoveLeft, MoveRight, Plus } from "lucide-react";

const Box2 = () => {
  return (
    <div className="flex-center flex-col gap-10 w-full">
      <div className="flex-col flex-center gap-8 box relative px-12 py-10 w-full">
        <div className="flex-center text-[#A3ADBA] w-fit top-2.5 left-2.5 absolute">
          <CircleHelp size={20} />
        </div>
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
        <div className="flex items-center justify-between w-full">
          <div
            className="bg-[#171717] rounded-[15px] flex-center px-10 py-3 text-lg"
            style={{
              boxShadow:
                "inset 0px 4.96001px 12.4px 2.48px rgba(0, 0, 0, 0.25)",
            }}
          >
            Gallery
          </div>
          <div className="flex items-center gap-10">
            <button
              onClick={(e) => e.preventDefault()}
              className="add-image flex-center gap-1 px-4 py-2 text-sm hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transition"
            >
              <Plus size={15} />
              ADD IMAGE
            </button>
            <div className="flex-center gap-4">
              <button
                className="arrow rounded-full p-2 text-[#6F787C] flex-center hover:scale-105 hover:-translate-y-1 transition"
                onClick={(e) => e.preventDefault()}
              >
                <MoveLeft size={20} />
              </button>
              <button
                className="arrow rounded-full p-2 text-[#6F787C] flex-center hover:scale-105 hover:-translate-y-1 transition"
                onClick={(e) => e.preventDefault()}
              >
                <MoveRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-[#969696] grid grid-cols-3 gap-2">
          <div className="w-full">hello</div>
          <div className="w-full">hello</div>
          <div className="w-full">hello</div>
        </div>
      </div>
      <div className="line-below"></div>
    </div>
  );
};
export default Box2;
