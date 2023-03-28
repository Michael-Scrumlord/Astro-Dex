import React from 'react'
import { PlanetData } from './PlanetData'

export default function SearchBar({ planet, setFilteredData }) {
  const handleFilter = (event) => {
    const searchPlanet = event.target.value
    const newFilter = PlanetData.filter((value) => {
      return value.title.toLowerCase().includes(searchPlanet.toLowerCase())
    });

    if (searchPlanet === "") {
      setFilteredData(PlanetData)
    }
    setFilteredData(newFilter);
  };

  return (
    <div>
      <form className='SearchBar' role="search">
        <ul>
          <input autoComplete='off' className='text' id="search" type="search" placeholder="Search..." onChange={handleFilter} autofocus required />

        </ul>


      </form>
    </div>
  )
}
