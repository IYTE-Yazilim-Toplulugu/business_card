//src/components/LogoCanvas.jsx

import React from 'react';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

const LogoCanvas = () => {
  return (
    <div>
        <div className='w-full h-64 max-w-full max-h-full'>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <ambientLight />
            </Canvas>
        </div>
    </div>
  )
}

export default LogoCanvas