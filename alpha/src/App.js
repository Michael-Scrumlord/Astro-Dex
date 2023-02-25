import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls, useGLTF } from "@react-three/drei";
import './index.css';
import {useRef,useState} from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './Mars_1_6792.glb';
//import { Physics, useBox } from 'use-cannon' // this could be cool
// npm run build - I'm going to forget this later, so storing it here

/*
function Object(){
  const loader = new GLTFLoader();
  return (    
    <mesh>
      <sphereBufferGeometry attach="geometry" /> 
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  )
}

function Model(props) {
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group {...props} dispose={null} scale={100}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}
*/ 
function Model(props) {
  const { nodes, materials } = useGLTF('/planet-test.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[20, 20, 20]} rotation={[-1.68, 0, 0]} scale={.25
      }>
        <mesh geometry={nodes.Ground.geometry} material={materials.Sand} position={[-5.54, -74.67, 83.97]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Grass.geometry} material={materials.Grass} position={[-4.57, -77.39, 66.77]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Water.geometry} material={materials.Water} position={[-2.16, -68.18, 75.35]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Mountains.geometry} material={materials.Rock} position={[-13.17, -57.3, 26.59]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Mountaintop.geometry} material={materials['Grey material']} position={[47.07, 37.11, 9.66]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Rocky_Mountains.geometry} material={materials.Rocks} position={[-5.32, -81.5, 109.21]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Volcano.geometry} material={materials['Volcanic rocks']} position={[10.1, -16.09, 147.75]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Lava.geometry} material={materials.Lava} position={[4.37, -7.17, 156.32]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.City.geometry} material={materials.Metal} position={[19.9, 18.79, 61.46]} rotation={[0, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Forest.geometry} material={materials.Trees} position={[-21.64, -24.76, 10.59]} rotation={[0, 0, Math.PI]} scale={18.19} />
        <mesh geometry={nodes.Smoke.geometry} material={materials.Fume} position={[13.83, 4.85, 159.67]} scale={18.19} />
      </group>
    </group>
  )
}

function Object(props) {
  const { nodes, materials } = useGLTF('/Earth_1_12756.glb')
  return (
    <group {...props} dispose={null} scale={.05}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
    </group>
  )
}


function CollapseMenu(){
  return(
    <div className="CollapseMenu">
      <h1>Earth Model From NASA.</h1>
    </div>
  )
}

function App() {
  const ref=useRef()
  return (
    <div style = {{width: "100vw", height: "90vh"}}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
       /* <mesh ref={ref}>
            <boxGeometry attach='geometry' args={[2,2,2]}/> 
          </mesh>*/ 
          <Object /> 
          <Model /> 
          

        </Suspense>
        <Stars />
        <OrbitControls />
        <spotLight position = {[10, 15, 10]} angle = {0.3} />
      </Canvas>
      <CollapseMenu />
    </div>
  );
}

export default App;
