import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import Aurora from "./components/Aurora/Aurora";
import SplitText from "./components/SplitText/SplitText";
import { transformDirection } from "three/src/nodes/TSL.js";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <div className="container border mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="text-2xl text-white font-bold">
                  I'm Ready For Shake the World
                </div>
                <RotatingText
                  texts={["Web Dev", "Web Design", "UI/UX", "Cool!"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              <div className=" flex flex-col items-start">
                <SplitText
                  text="Hello, I'm Jati Nugroho!"
                  className="text-6xl font-semibold text-start"
                  delay={50}
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
                <SplitText
                  text="FullStack Dev!"
                  className="text-6xl font-semibold text-start text-[#C6F10E]"
                  delay={100}
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
