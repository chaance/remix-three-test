import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// if you comment out the drei import, the whole dev build should work again, production builds seem to always work

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      test
      <Canvas>
        <Box args={[3, 3, 3]}></Box>
      </Canvas>
    </div>
  );
}
