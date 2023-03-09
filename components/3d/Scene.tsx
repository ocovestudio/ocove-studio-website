import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Logo } from './Logo'
import { BlendFunction } from 'postprocessing'
import { browserName, browserVersion, BrowserView, isBrowser, osName, osVersion } from 'react-device-detect'
import { useEffect, useState } from 'react'

export default function Scene() {
  const [isCompatible, setIsCompatible] = useState(false)

  // add effect composer bloom if device is compatible
  useEffect(() => {
    let isCompatible = false;
    let deviceMajorVersion = 0;
    if (typeof osVersion === 'string') {
      deviceMajorVersion === Number(osVersion.split('.')[0]);
    }
    const isNewAndroid = osName === 'android' && deviceMajorVersion <= 10;
    const isNewIphone = osName === 'Mac OS' || osName === 'iOS' && deviceMajorVersion <= 14;
    if (isNewAndroid) { isCompatible = true };
    if (isNewIphone) { isCompatible = true };
    if (isBrowser) { isCompatible = true };
    setIsCompatible(isCompatible);
  }, [])

  return (
    <div className='three-canvas-container'>
      <Canvas style={{height: 'inherit'}}>
        <fog attach="fog" color="rgb(210, 210, 210)" near={4.5} far={8.5} />
        <Logo />
        <directionalLight position={[3.3, 1.0, 4.4]} />
        <Environment files="/HDR_040_Field_Env_edit.hdr" />
        {isCompatible ? 
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={400} blendFunction={BlendFunction.MULTIPLY} />
          </EffectComposer> : null
        }
      </Canvas>
    </div>
  )
}