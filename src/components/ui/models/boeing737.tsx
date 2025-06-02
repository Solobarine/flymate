import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three/webgpu";

const Boeing737 = () => {
  const { scene } = useGLTF("/models/boeing_737/scene.gltf");
  const ref = useRef<Object3D>(null);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const speed = 2;
  const maxDistance = 20;

  useFrame((state, delta) => {
    if (ref.current) {
      // Add some slight up-down oscillation
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;

      // Slight tilting left and right
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;

      ref.current.position.x += direction * speed * delta;

      // Check boundaries and reverse
      if (ref.current.position.x > maxDistance) {
        setDirection(-1);
        ref.current.rotation.y = Math.PI / 2;
      } else if (ref.current.position.x < -maxDistance) {
        setDirection(1);
        ref.current.rotation.y = Math.PI + Math.PI / 2;
      }
    }
  });
  return (
    <group ref={ref} position={[12, 20, 0]}>
      <primitive object={scene} scale={0.001} />
    </group>
  );
};

export default Boeing737;
