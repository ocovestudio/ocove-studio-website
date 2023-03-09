import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Group, Mesh, MeshStandardMaterial } from "three";
import usePageSize from "../../hooks/usePageSize";
import { useMouseInfo } from "@faceless-ui/mouse-info";

export const Logo = (props: any) => {
  // @ts-ignore
  const { nodes, materials } = useGLTF("/ocove.glb");
  const [hover, setHover] = useState(false);
  const ref = useRef<Group>();
  const { x, y, xPercentage, yPercentage } = useMouseInfo();
  const { pageX, pageY } = usePageSize()

  useFrame(() => {
    const centeredX = x - (pageX * 0.5);
    const centeredY = y - (pageY * 0.5);
    if (ref?.current) {
      ref.current.rotation.x += centeredY/100000;
      ref.current.rotation.y += centeredX/100000;
    }
  });


  return (
    <group
      {...props}
      dispose={null}
      scale={25}
      ref={ref}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        material={materials["Material.001"]}
        geometry={nodes.Curve.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      />
    </group>
  );
};

useGLTF.preload("/ocove.glb");