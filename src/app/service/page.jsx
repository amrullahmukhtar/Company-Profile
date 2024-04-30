import React from "react";
import "../service/service.css";
import { SparklesCore } from "../../components/ui/sparkles";
import TabService from "../_component/tab";

export default function page() {
  return (
    <div className="service h-[1500px] md:h-[1200px] bg-center">
      <div className=' bg-[rgba(255,255,255,0.7)] h-[1500px] md:h-[1200px]'>

      <div className="h-[10rem] relative w-full bg-black flex gap-4 flex-col items-center justify-center overflow-hidden">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Build great services.
        </h1>
      </div>

          <div className="px-[40px] md:px-[80px] lg:px-[100px] h-[200px] mx-10">
            <div>
              <TabService />
            </div>
          </div>{" "}
          {/* p  */}

      </div>
    </div>
  );
}
