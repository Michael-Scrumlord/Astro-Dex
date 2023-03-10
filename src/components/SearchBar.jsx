import React from 'react'

export default function SearchBar() {
  return (
    <div>
        <form className='SearchBar' role="search">
        <input className='Input' id="search" type="search" placeholder="Search..." autofocus required /> 
        </form>
    </div>
  )
}
