import React from 'react'
import "../Navbar/Navbar.css"
export default function Navbar() {
  return (
    <nav>
        <div className="login">
            <a href="#">ورود</a>
            /
            <a href="#">ثبت نام</a>
        </div>
        <div className="language">
            <a href="#">انگلیسی</a>
            <a href="#">فارسی</a>
        </div>
    </nav>
  )
}
