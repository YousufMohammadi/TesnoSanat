import React from 'react'
import "../Header/Header.css"
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header>
        <div className="menu">
            <a href="#" className="mune-link">خانه</a>
            <a href="#" className="mune-link">تازه ها</a>
            <a href="#" className="mune-link">تماس با ما</a>
            <a href="#" className="mune-link">درباره ما</a>
            <a href="#" className="mune-link">پرسش و پاسخ</a>
        </div>
        <div className="categories">
            <RxHamburgerMenu className='category-icon'/>
            <span className='category'>همه محصولات</span>
        </div>
    </header>
  )
}
