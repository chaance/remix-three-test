import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// if imported in a second route, things seems to behave as expected. When used
// in more than 1 entrypoint esbuild can properly split things out and the issue
// doesn't show up. If it's just in one entrypoint it breaks as it tries to
// inline the lib in the route module instead of being in it's own chunk and
// blows up.

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
