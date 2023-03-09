import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Logo } from './Logo'
import { BlendFunction } from 'postprocessing'
import { BrowserView, isBrowser } from 'react-device-detect'

export default function Scene() {
  return (
    <div className='three-canvas-container'>
      <Canvas style={{height: 'inherit'}}>
        <fog attach="fog" color="rgb(210, 210, 210)" near={4.5} far={8.5} />
        <Logo />
        <directionalLight position={[3.3, 1.0, 4.4]} />
        <Environment files="/HDR_040_Field_Env_edit.hdr" />
        {isBrowser ? <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={400} blendFunction={BlendFunction.MULTIPLY} />
        </EffectComposer> : null}
      </Canvas>
    </div>
  )
}