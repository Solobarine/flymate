"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Sparkles, OrbitControls } from "@react-three/drei";
import { Mouse } from "lucide-react";

import Airplane from "../models/airplane";
import Boeing737 from "../models/boeing737";
import LoadingIndicator from "./loadingIndicator";

export default function Hero() {
  return (
    <div className="relative max-w-screen hero overflow-hidden">
      <Canvas
        camera={{ position: [-1.3, -0.9, -4.8], fov: 60 }}
        className="h-full"
      >
        <Suspense fallback={<LoadingIndicator />}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
            color="#FFD1A4"
          />
          <Environment path="/" files={["sunflowers_puresky.hdr"]} background />
          <Airplane />
          <Boeing737 />
          <Sparkles count={2000} scale={[10, 2, 10]} speed={0.2} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>

      <div className="absolute top-1/2 -translate-y-1/2 pl-4 text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl">
          Fly Beyond Limits
        </h1>
        <p className="text-lg mt-4">Your journey starts here</p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all">
          Explore Now
        </button>
      </div>
      <button
        className="absolute p-1 rounded md animate-bounce bottom-5 left-1/2 -translate-x-1/2 text-primary-200 cursor-pointer"
        onClick={() =>
          scrollTo({
            top: innerHeight,
            behavior: "smooth",
          })
        }
      >
        <Mouse size={40} />
      </button>
    </div>
  );
}
