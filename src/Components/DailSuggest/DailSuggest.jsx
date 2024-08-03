import React from 'react'
import "../DailSuggest/DailSuggest.css"
import { HiStar } from "react-icons/hi2";
import { BiRepost } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export default function DailSuggest() {
  return (
    <div className='DailSuggest-container'>
        <div className="sale-card">
            <div className="sale-card--header">
                <p className="sale-card--header__discount">تخفیف ۳۰ %</p>
                <h2 className="sale-card--header__title">ابزار های تخفیف دار</h2>
                <div className="sale-card--btn">خرید کنید</div>
            </div>
            <div className="sale-card--img">
                <img src="saleCard.png" alt="img" />
            </div>
        </div>
        <div className="suggest-card">
            <div className="suggest-card--img">
                <img src="dailySuggest.png" alt="img" />
            </div>
            <div className="suggest-card-content">
                <a href="#" className='suggest-card-content__btn'>پیشنهاد روز</a>
                <h4 className="suggest-card--content__title">ابزار با کیفیت از شرکت های مورد تائید کشورهای صنعتی</h4>
                <div className="review-container">
                    <a href="#"><HiStar className='score'/></a>
                    <a href="#"><HiStar className='score'/></a>
                    <a href="#"><HiStar className='score'/></a>
                    <a href="#"><HiStar className='score'/></a>
                    <a href="#"><HiStar className='score'/></a>
                </div> 
                <p className='suggest-card--cost'><span>۹۹.۰۰ریال</span>۱۳۲.۰۰ریال</p>
                <p className="suggest-card--description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون  و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، 
                </p>
                <div className="timer-container">
                    <div className="timer">
                        <span className="timer-count">618</span>
                        <span className="timer-type">روز</span>
                    </div>
                    <div className="timer">
                        <span className="timer-count">9</span>
                        <span className="timer-type">ساعت</span>
                    </div>
                    <div className="timer">
                        <span className="timer-count">34</span>
                        <span className="timer-type">دقیقه</span>
                    </div>
                    <div className="timer">
                        <span className="timer-count">52</span>
                        <span className="timer-type">ثانیه</span>
                    </div>
                </div>
                <div className="share-container">
                    <a href="#" className="share-add">اضافه کردن به کارت</a>
                    <a href="#" className="share-btn"><BiRepost /></a>
                    <a href="#" className="share-btn"><FaHeart /></a>
                </div>
            </div>
        </div>
    </div>
  )
}
