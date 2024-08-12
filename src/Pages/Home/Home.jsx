import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Header from "../../Components/Header/Header";
import "../Home/Home.css";
import Card from "../../Components/Card/Card";
import DailSuggest from "../../Components/DailSuggest/DailSuggest";
import Slider from "../../Components/Slider/Slider";
import Category from "../../Components/Category/Category";
export default function Home() {
	return (
		<div className="home-container">
			<div>
				<Navbar />
				<SearchBox />
				<Header />
			</div>
			<section>
				<p className="par">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
					استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
					ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
				</p>
				<div className="slider-container">
					<div className="slider">
						{/* <img src="slide1.jpg" alt="slide1" /> */}
						<p className="slider-par">انتخاب گسترده ای از ابزار صنعتی</p>
						<h1 className="slider-title">با نازل ترین قیمت!</h1>
						<button>همین الان انتخاب کنید</button>
					</div>
					<div className="filters">
						<h1 className="filters-title">قطعات مورد نیاز را انتخاب کنید</h1>
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<button>یافتن ابزار</button>
					</div>
				</div>
			</section>
			<section className="most-sell">
				<p className="sell-par">پر فروش هفته</p>
				<h2 className="heading">
					{" "}
					<span>.</span> پر فروش ترین ها <span>.</span>{" "}
				</h2>
				<div className="row">
					<Card src="card1.png" />
					<Card src="card2.png" />
					<Card src="card3.png" />
					<Card src="card4.png" />
					<Card src="card5.png" discount={true} />
					<Card src="card6.png" />
					<Card src="card7.png" discount={true} />
					<Card src="card8.png" />
				</div>
			</section>
			<DailSuggest />
			<section className="newst">
				<p className="sell-par">جدیدترین ابزارهای هفته</p>
				<h2 className="heading">
					{" "}
					<span>.</span> ابزارهای تازه رسیده <span>.</span>{" "}
				</h2>
				<Slider />
			</section>
			<section className="newDicount">
				<div className="new">
					<div className="newDiscount-box">
						<span className="newDiscount-box--title">تازه رسیده ها</span>
						<span className="newDiscount-box--desc">ابزارها و تجهیزات فنی</span>
						<a href="#" className="newDiscount-box--btn">
							همین الان بخرید
						</a>
					</div>
				</div>
				<div className="discount">
					<div className="newDiscount-box">
						<span className="newDiscount-box--title">تخفیف ۷۰%</span>
						<span className="newDiscount-box--desc">
							ابزارهای مورد نیاز صنعتی
						</span>
						<a href="#" className="newDiscount-box--btn">
							همین الان بخرید
						</a>
					</div>
				</div>
			</section>
			<section className="category">
				<Category />
			</section>
		</div>
	);
}
