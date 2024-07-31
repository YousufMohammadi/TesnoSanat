import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SearchBox from '../../Components/SearchBox/SearchBox'
import Header from '../../Components/Header/Header'
import "../Home/Home.css"
export default function Home() {
  return (
    <div className='home-container'>
      <div>
        <Navbar />
        <SearchBox />
        <Header />
      </div>
      <section>
        <p className='par'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی</p>
        <div className="slider-container">
          <div className="slider">
            {/* <img src="slide1.jpg" alt="slide1" /> */}
            <p>انتخاب گسترده ای از ابزار صنعتی</p>
            <h1>با نازل ترین قیمت!</h1>
            <button>همین الان انتخاب کنید</button>
          </div>
          <div className="filters">
            <h1>قطعات مورد نیاز را انتخاب کنید</h1>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>یافتن ابزار</button>
          </div>
        </div>
      </section>
    </div>
  )
}
