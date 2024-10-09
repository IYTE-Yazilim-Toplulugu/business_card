/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 iss1.gltf --transform
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('./Logo/iss1-transformed.glb');
  return (
    <group {...props} dispose={null} scale={[0.75, 0.75, 0.75]}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[0.31, -2.5, 0]} scale={[0.14, 1, 0.14]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.003']} position={[-0.31, 2.5, 0]} rotation={[0, 0, Math.PI]} scale={[0.14, 1, 0.14]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.003']} position={[0.71, -2.5, 0]} scale={[0.06, 1, 0.14]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.003']} position={[-0.21, 0.73, 0]} scale={[0.06, 1, 0.14]} />
    </group>
  )
}

useGLTF.preload('./Logo/iss1-transformed.glb');
