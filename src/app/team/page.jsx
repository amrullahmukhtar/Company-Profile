import React from "react";
import TeamList from "../_component/team";
import TeamList2 from "../_component/team2";
import { SparklesCore } from "../../components/ui/sparkles";
import "../team/team.css";



export default function team() {
  return (
    <main>
      <div className="bg-[rgba(255,255,255,0.7)]">
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
        </div >
        <h1 className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Our Team, Your Success.
        </h1>

      </div>

      <TeamList></TeamList>
      <div className="flex flex-col justify-center m-10">
        <span className="text-5xl font-bold text-center">Our Partner</span>
        <p className="text-base text-center mt-5">
          Our partners are spread across several countries
        </p>
      </div >
      <div className="pb-10">
      <TeamList2 />
      </div>
      </div>
    </main>
  );
}
