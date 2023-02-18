import React from 'react';
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls, useGLTF } from "@react-three/drei";
import './App.css';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './Mars_1_6792.glb';
//import { Physics, useBox } from 'use-cannon' // this could be cool
// npm run build - I'm going to forget this later, so storing it here

function Object(){
  const loader = new GLTFLoader();
  return (    
    <mesh>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="gray" />
    </mesh>
  )
}


function CollapseMenu(){
  return(
    <div className="CollapseMenu">
      <h1>This is Some Sample Text.</h1>
    </div>
  )
}

function App() {
  return (
    <div style = {{width: "100vw", height: "90vh"}}>
      <Canvas>
        <Stars />
        <OrbitControls />
        <spotLight position = {[10, 15, 10]} angle = {0.3} />
        <Object />
      </Canvas>
      <CollapseMenu />
    </div>
  );
}

export default App;