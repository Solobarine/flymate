"use client";

import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import Card from "./destinationCard";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import LoadingIndicator from "./loadingIndicator";
import Button from "../button";
import { Object3D } from "three";
import { PerspectiveCamera as P } from "three";

const EarthScene = () => {
  const group = useRef<Object3D>(null);
  const cameraRef = useRef<P>(null);
  const earth = useGLTF("/assets/earth-cartoon/source/earth-cartoon.glb");

  const { actions } = useAnimations(earth.animations, group);

  useEffect(() => {
    // Play all available animations
    Object.values(actions).forEach((action) => {
      action?.play();
    });
  }, [actions]);

  useEffect(() => {
    const updateZ = () => {
      const width = window.innerWidth;

      // Customize the breakpoints and values as needed
      const z = width > 1200 ? -0.08 : width > 800 ? 0.1 : 0.5;

      if (cameraRef.current) {
        cameraRef.current.position.z = z;
      }
    };

    window.addEventListener("resize", updateZ);
    updateZ(); // initial run

    return () => window.removeEventListener("resize", updateZ);
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.rotation.y = clock.elapsedTime * 0.05;
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[2.367, -0.13, -0.08]}
        fov={75}
        near={0.01}
        far={10000}
      />

      <group ref={group}>
        <primitive object={earth.scene} />;
      </group>
    </>
  );
};

const Destinations = () => {
  const destinationRef = useRef(null);

  const destinations = [
    {
      name: "Rome",
      country: "Italy",
      image: "/cities/rome.jpg",
    },
    {
      name: "Tokyo",
      country: "Japan",
      image: "/cities/tokyo.jpg",
    },
    {
      name: "Santorini",
      country: "Greece",
      image: "/cities/santorini.avif",
    },
    {
      name: "Las Vegas",
      country: "USA",
      image: "/cities/las_vegas.jpg",
    },
  ];

  return (
    <section className="py-20 px-2 sm:px-4">
      <div className="flex items-center gap-3 justify-between flex-wrap mb-8">
        <h2 className="text-4xl font-semibold">Some Popular Destinations</h2>
        <Button>Show More</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Canvas className="min-h-60">
          <Suspense fallback={<LoadingIndicator />}>
            <ambientLight intensity={3} />
            <EarthScene />
            <OrbitControls />
          </Suspense>
        </Canvas>
        <div ref={destinationRef} className="destinations-list self-start">
          {destinations.map((destination, index) => (
            <Card key={index} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
