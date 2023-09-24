"use client";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Experience } from "./../components/Experience";
import { Interface } from "../components/Interface";

export default function Home() {

  return (
    <div className="w-screen h-screen bg-[#0D0D0D] ">
      <Canvas
        shadows
        camera={{ position: [3, 3, 3], fov: 30 }}
      >
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <Scroll html>
           <Interface/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
