import { useState } from "react";
import { CircleHelp, MoveLeft, MoveRight, Plus } from "lucide-react";
import defaultImage from "../assets/default-image.jpeg";

const Box2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  const handleNext = () => {
    if (currentIndex < Math.floor(images.length / 3)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedImages = images.slice(currentIndex * 3, currentIndex * 3 + 3); // Show 3 images at a time

  return (
    <div className="flex-center flex-col gap-5 w-full text-sm">
      <div className="flex-col flex-center gap-12 box relative px-12 py-6 w-full text-sm">
        <div className="flex-center text-[#888989] w-fit top-2.5 left-2.5 absolute text-sm">
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
        <div className="flex items-center justify-between w-full text-sm">
          <div
            className="bg-[#171717] rounded-[15px] flex-center px-10 py-3 text-lg text-sm"
            style={{
              boxShadow:
                "inset 0px 4.96001px 12.4px 2.48px rgba(0, 0, 0, 0.25)",
            }}
          >
            Gallery
          </div>
          <div className="flex items-center min-[880px]:gap-10 gap-1">
            <label className="add-image cursor-pointer flex-center px-4 py-2 text-sm hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transition">
              <Plus size={15} />
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              ADD IMAGE
            </label>
            <div className="flex-center min-[880px]:gap-4 gap-0.5">
              <button
                className="arrow rounded-full p-2 text-[#6F787C] flex-center hover:scale-105 hover:-translate-y-1 transition"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <MoveLeft size={20} />
              </button>
              <button
                className="arrow rounded-full p-2 text-[#6F787C] flex-center hover:scale-105 hover:-translate-y-1 transition"
                onClick={handleNext}
                disabled={currentIndex >= Math.floor(images.length / 3)}
              >
                <MoveRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-[#969696] grid grid-cols-3 min-[1240px]:gap-4 gap-1 text-sm">
          {displayedImages.length > 0 ? (
            displayedImages.map((image, index) => (
              <div className="flex-center" key={index}>
                <img
                  src={image}
                  alt="uploaded"
                  className="rounded-lg min-[880px]:w-40 flex-center min-[880px]:h-40 w-28 h-28"
                />
              </div>
            ))
          ) : (
            <>
              {[defaultImage, defaultImage, defaultImage].map((img, index) => (
                <div className="flex-center" key={index}>
                  <img
                    src={img}
                    alt="default"
                    fetchPriority="high"
                    className="rounded-lg min-[880px]:w-40 flex-center min-[880px]:h-40 w-28 h-28"
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Box2;
