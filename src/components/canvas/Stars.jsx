import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

/**
 * Generates a sphere of stars in 3D space.
 *
 * @param {{}} props Component props
 * @returns {JSX.Element} The stars component
 */
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    // Generate a sphere of 5000 points with a radius of 1.2
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    // Rotate the sphere around the x and y axes over time
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          // Make the stars transparent
          transparent
          // Set the color of the stars
          color="#f272c8"
          // Set the size of the stars
          size={0.002}
          // Make the stars size decrease with distance
          sizeAttenuation={true}
          // Do not write to the depth buffer
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
