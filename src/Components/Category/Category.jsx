import React from "react";
import "../Category/Category.css";
import CategoryCard from "./CategoryCard";

export default function Category() {
	return (
		<div className="category-container">
			<p className="sell-par">مجموعه قطعات محبوب آبنده</p>
			<h2 className="heading">
				{" "}
				<span>.</span> خرید بر اساس طبقه بندی ابزارها <span>.</span>{" "}
			</h2>
			<div className="category-row">
				<CategoryCard src="card1.png" title="مجموعه انبر قفلی" />
				<CategoryCard src="card2.png" title="مجموعه گیره چوب" />
				<CategoryCard src="card3.png" title="گیره صنعتی" />
				<CategoryCard src="card5.png" title="دریل های با باطری" />
				<CategoryCard src="card6.png" title="قیچی صنعتی" />
				<CategoryCard src="card7.png" title="آچار فرانسه" />
			</div>
		</div>
	);
}
