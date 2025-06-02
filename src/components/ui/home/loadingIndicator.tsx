import { Html, useProgress } from "@react-three/drei";
import { Loader } from "lucide-react";

const LoadingIndicator = () => {
  const { progress } = useProgress();

  return (
    <Html center className="grid gap-3 w-fit p-3 rounded-md">
      <Loader className="animate-spin mx-auto" size={60} />
      <p className="text-xl font-semibold subtext text-center text-nowrap">
        {progress.toFixed(2)} %
      </p>
    </Html>
  );
};

export default LoadingIndicator;
