import React from 'react'
import "../SearchBox/SearchBox.css"
import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  return (
    <div className='searchBox'>
        <div className="search">
            <button><FiSearch className='search-icon'/></button>
            <input type="search" name="search" id="search" placeholder='جستجو'/>
        </div>
        <img src="logo.png" alt="logo" />
    </div>
  )
}
