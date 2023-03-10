import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Logo } from './Logo'
import { BlendFunction } from 'postprocessing'
import { browserName, browserVersion, BrowserView, isBrowser, osName, osVersion } from 'react-device-detect'
import { useEffect, useState } from 'react'



export default function Scene({children}: any) {
  const [isCompatible, setIsCompatible] = useState(false)

  // add effect composer bloom if device is compatible
  useEffect(() => {
    let isCompatible = false;
    let deviceMajorVersion = 0;
    const os = osName.toLocaleLowerCase();

    if (typeof osVersion === 'string') {
      if (osVersion.includes('.')) {
        deviceMajorVersion = Number(osVersion.split('.')[0]);
        console.log(deviceMajorVersion)
      } else {
        deviceMajorVersion = Number(osVersion.split('.')[0])
      }
    }

    console.log({
      os: os,
      version: osVersion
    })

    if (os === 'android') {
      if (deviceMajorVersion >= 10) {
        isCompatible = true;
        console.log('new android')
      }
    }

    if (os === 'ios' || os === 'mac oS') {
      if (deviceMajorVersion >= 14) {
        isCompatible = true;
        console.log('new iphone')
      }
    }

    if (isBrowser) { isCompatible = true };

    console.log(isCompatible)

    setIsCompatible(isCompatible);
  }, [])

  return (
    <div className='three-canvas-container'>
      <Canvas style={{height: 'inherit'}}>
        <fog attach="fog" color="rgb(210, 210, 210)" near={4.5} far={8.5} />
        {children}
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