import React, {useRef} from 'react';
import {useGLTF} from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

// Render 3D model of Planets Dynamically.
// Will move some of the code out of this file when we have the DB set up.


export function Model(props) {
  const { nodes, materials } = useGLTF(props.link);
  const myMesh = useRef();
  
  let text = "";

  // Planet Rotation
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() * 0.05;
  })

  // Different jsx code based on the planets. 
  switch (props.name) {
    case 'Earth':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh ref={myMesh} geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
      </group>;
      break;
    case 'Mars':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh ref={myMesh} geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
      </group>;
      break;
    case 'Jupiter':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh geometry={nodes.cubemap.geometry} material={materials.None} />
    </group>;
      break;
    case 'Mercury':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh ref={myMesh} geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
      </group>
      break;
    case 'Neptune':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh ref={myMesh} geometry={nodes.Neptune.geometry} material={materials['Default OBJ.001']}/>
      </group>;
      break;
    case 'Saturn':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh ref={myMesh} geometry={nodes.Saturn001.geometry} material={materials.None} />
      <mesh ref={myMesh}geometry={nodes.RingsTop.geometry} material={materials.SaturnRings} />
      <mesh ref={myMesh} geometry={nodes.RingsBottom.geometry} material={materials.SaturnRings} />
      </group>;
      break;
    case 'Sun':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh ref={myMesh} geometry={nodes.Cube001.geometry} material={materials.None} rotation={[Math.PI / 2, 0, 0]} scale={1000} />
      </group>;
      break;
    case 'Uranus':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh ref={myMesh} geometry={nodes.Uranus.geometry} material={materials['Default OBJ.001']} rotation={[Math.PI / 2, 0, 0]} />
      </group>;
      break;
    case 'Venus':
      text = <group {...props} dispose={null} scale={.0095}>
      <mesh ref={myMesh} geometry={nodes.cylindrically_mapped_sphereMesh.geometry} material={materials['Default OBJ']} />
      </group>;
      break;
    default:
      text = <group {...props} dispose={null} scale={.0095} rotation={[-0.5, 0.6 ,0.6]}>
      <mesh ref={myMesh} geometry={nodes.Cube001.geometry} material={materials['Default OBJ']}/>
      </group>;

  }
  return (
    text
  )
}


