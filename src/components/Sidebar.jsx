import React, { useState, Suspense } from 'react'
import { PlanetData } from './PlanetData.js' // contains planet dictionary, links and names
import "../App.css"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import { Model } from './Model';
import Stars from './Stars.jsx';

// This renders the catalog, side bar and planet 3D object. will need to seperate Sidebar and Planet into 2 components and create a "Catalog View"

export default function Sidebar() {
    // using state to change the planets onClick
    const [planet, setPlanets] = useState({name: "Earth", link: "EarthClouds_1_12756.glb"})

    return (
        <div className='CatalogContainer'>
            <div className='Sidebar'>
                <ul className='SidebarList'>
                    
                    {PlanetData.map((val, key) => {
                        return <li key={key} className='row' onClick={() => setPlanets({name: val.title, link: val.link})}><div>{val.title}</div></li>;
                    })}
                </ul>
            </div>
            <div className='PlanetContainer'>
                <Canvas
                camera={{ fov: 35, zoom: 0.1, near: 1, far: 1000, position: [-6,0 ,0] }}
                style={{
                backgroundColor: '#020C1C',
                height: "100%",
                width: "100%"
                }}>
                    <Suspense fallback={null}>
                        <pointLight position={[-100,200,0]}/>
                        <Model name={planet.name} link={planet.link}/>
                    </Suspense>
                    <Stars />
                    <OrbitControls minDistance={7} maxDistance={15}/>
                    <spotLight position = {[10, 15, 10]} angle = {0.3} />
                </Canvas> 
            </div>
        </div>
    )
}
