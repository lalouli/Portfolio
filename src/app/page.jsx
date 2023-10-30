"use client";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useState } from "react";
import { Experience } from "./../components/Experience";
import { Interface } from "../components/Interface";
import { ScrollManager } from "../components/ScrollManager";
import Logo from "../../public/Logo.svg"
import Image from "next/image";
import Particles, { loadSlim } from "react-particles";
export default function Home() {
  const [section, setSection] = useState(0);
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div className="w-screen h-screen bg-[#0D0D0D] " id="top-page">
      <Canvas
        shadows
        camera={{ position: [3, 3, 3], fov: 30 }}
      >
     
        <ScrollControls pages={5} damping={0.1} >
          <ScrollManager section={section} onSectionChange={setSection}/>
          <Experience />
          <Scroll html>
          <Image
              src={Logo}
              alt="level icon"
              className="ml-10 mt-10 "
              width={80}
              height={60}
            />
           <Interface/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
