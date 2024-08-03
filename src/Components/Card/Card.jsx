import React from 'react'
import "../Card/Card.css"
import { HiStar } from "react-icons/hi2";

export default function Card(props) {
  return (
    <div className='card'>
        <div className="cardImage-container">
            <img src={props.src} alt="card" />
            {
                props.discount && <span className='card-discount'>-۲۵%</span>
            }
        </div>
        <div className="card-content">
            <h5 className='card-title'>مجموعه قیچی صنعتی</h5>
            <div className="review-container">
                <a href="#"><HiStar className='score'/></a>
                <a href="#"><HiStar className='score'/></a>
                <a href="#"><HiStar className='score'/></a>
                <a href="#"><HiStar className='score'/></a>
                <a href="#"><HiStar className='score'/></a>
            </div>
            <p className='card-cost'>{props.discount && <span>۹۹.۰۰ریال</span>}۱۳۲.۰۰ریال</p>
        </div>
    </div>
  )
}
