import React, { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import Stars from "./Stars.jsx";
import SearchBar from "./SearchBar.jsx";
import { PlanetData } from "./PlanetData";
import InfoCard from "./InfoCard";

// This renders the catalog, side bar and planet 3D object. will need to
// seperate Sidebar and Planet into 2 components and create a "Catalog View"

export default function Catalog() {
  // using state to change the planets onClick
  console.log(PlanetData[0]);
  const [planet, setPlanets] = useState({
    name: PlanetData[0]["title"],
    link: PlanetData[0]["link"],
    desc: PlanetData[0]["Description"],
    slogan: PlanetData[0]["slogan"],
    gravity_cmp: PlanetData[0]["surface_g_comp"],
    image: PlanetData[0]["image"],
  });

  const [filteredData, setFilteredData] = useState(PlanetData);

  return (
    <div className="CatalogContainer">
      <div className="Sidebar">
        <ul className="SidebarList">
          <SearchBar planet="planet" setFilteredData={setFilteredData} />
          {filteredData.map((val, key) => {
            return (
              <li
                key={key}
                className="SideBarRow"
                onClick={() =>
                  setPlanets({
                    name: val.title,
                    link: val.link,
                    desc: val.Description,
                    slogan: val.slogan,
                    gravity_cmp: val.surface_g_comp,
                    image: val.image,
                  })
                }
              >
                <div>{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="PlanetContainer">
        <Canvas
          camera={{
            fov: 10,
            zoom: 0.05,
            near: 1,
            far: 1000,
            position: [-6, 0, 0],
          }}
          style={{
            position: "absolute",
            backgroundColor: "#1b1b1c",
            height: "93.74%", //Just to offset the height of the navbar (40px)
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <Suspense fallback={null}>
            <pointLight position={[-100, 200, 0]} />
            <Model name={planet.name} link={planet.link} />
          </Suspense>
          <Stars />
          <OrbitControls minDistance={7} maxDistance={15} />
          <spotLight position={[10, 15, 10]} angle={0.3} intensity={1} />
        </Canvas>
      </div>
      <div className="InfoCard-Container">
        <InfoCard
          title={planet.name}
          subtitle={planet.slogan}
          detail={planet.desc}
          gravity_cmp={planet.gravity_cmp}
          image={planet.image}
          position={[0, 0, 10]}
        />
      </div>
    </div>
  );
}
