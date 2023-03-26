import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

export default function Stars(props) {
  const rotate = props.rotate;
  const ref = useRef();
  const [sphere] = useState(() =>
    random.onSphere(new Float32Array(5000), { radius: 30 })
  );
  useFrame((state, delta) => {
    if (rotate == "on") {
      ref.current.rotation.x -= delta / 80;
      ref.current.rotation.y -= delta / 65;
    } else {
      return;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="white"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
