import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Group, Mesh, MeshStandardMaterial } from 'three';

export const Logo = (props: any) => {
    // @ts-ignore
    const { nodes, materials } = useGLTF("/ocove.glb");
    const [hover, setHover] = useState(false);
    const ref = useRef<Group>();
  
    useFrame(({mouse}) => {
        if (ref?.current) {
            ref.current.rotation.x+=-(mouse.y/100);
            ref.current.rotation.y+=(mouse.x/100);
            ref.current.position.z=(mouse.y/1);
            ref.current.position.x=-(mouse.x/1);
        }
    });
    
    return (
      <group {...props} dispose={null} scale={25} ref={ref} rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          material={materials['Material.001']}
          geometry={nodes.Curve.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
        />
      </group>
    );
}

useGLTF.preload("/ocove.glb")