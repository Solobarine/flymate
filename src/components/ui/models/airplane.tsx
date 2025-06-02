import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Object3D } from "three";

const Airplane = () => {
  const { scene } = useGLTF("/models/airplane.glb");
  const ref = useRef<Object3D>(null);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const speed = 2;
  const maxDistance = 15;

  const { camera } = useThree();

  useFrame((state, delta) => {
    if (ref.current) {
      // Add some slight up-down oscillation
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;

      // Slight tilting left and right
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.3;

      ref.current.position.z += direction * speed * delta;

      // Check boundaries and reverse
      if (ref.current.position.z > maxDistance) {
        setDirection(-1);
        ref.current.rotation.y = Math.PI; // turn around
      } else if (ref.current.position.z < -maxDistance) {
        setDirection(1);
        ref.current.rotation.y = 0; // face original direction
      }
    }
  });
  return (
    <group onClick={() => console.log(camera.position)}>
      <primitive ref={ref} object={scene} scale={1} position={[0, 1, 0]} />;
    </group>
  );
};

export default Airplane;
