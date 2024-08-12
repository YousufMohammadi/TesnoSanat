import React from "react";

export default function CategoryCard(props) {
	return (
		<div className="category-card">
			<div className="category-card--img">
				<img src={props.src} alt="img" />
			</div>
			<div className="card-category--content">
				<h3 className="card-category--title">{props.title}</h3>
				<ul className="card-category--list">
					<li>لاستیک</li>
					<li>لاستیک</li>
					<li>لاستیک</li>
					<li>لاستیک</li>
					<li>لاستیک</li>
				</ul>
				<a href="#" className="card-category--btn">
					بیشتر ببینید
				</a>
			</div>
		</div>
	);
}
