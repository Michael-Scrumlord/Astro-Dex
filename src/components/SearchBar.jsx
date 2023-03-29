import React from 'react'
import { PlanetData } from './PlanetData'

export default function SearchBar({ planet, setFilteredData }) {
  const handleFilter = (event) => {
    const searchPlanet = event.target.value
    const newFilter = PlanetData.filter((value) => {
      return value.title.toLowerCase().startsWith(searchPlanet.toLowerCase())
    });

    if (searchPlanet === "") {
      setFilteredData(PlanetData)
    }
    setFilteredData(newFilter);
  };

  return (
      <form className='SearchBar'>
        <ul>
          <input autoComplete='off' className='Input' id="search" type="search" placeholder="Search..." onChange={handleFilter} autofocus required />
        </ul>
      </form>

  )
}
