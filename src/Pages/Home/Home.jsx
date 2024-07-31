import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SearchBox from '../../Components/SearchBox/SearchBox'
import Header from '../../Components/Header/Header'

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <SearchBox />
        <Header />
      </div>
    </div>
  )
}
