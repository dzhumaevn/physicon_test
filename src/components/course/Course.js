import React from "react";
import './Course.css';
import formatGrade from "../utils/formatGrade";

const Course = (props) => {
		const {id, subject, grade, genre, price, priceBonus, detailsUrl} = props.course;
		const priceToggle = props.priceToggle;

		const priceText = priceToggle === 'rub' ? `${price} руб.` : `${priceBonus} бонусов`;

		return (
			<div className="col-6 col-md-3 col-lg-5th courseCol mb-4">
					<div className="card courseContent">
						<img src={`https://www.imumk.ru/svc/coursecover/${id}`} className="card-img-top" alt="..."/>
						<div className="card-body courseInfo">
							<h6 className="courseTitle">{subject}</h6>
							<h6 className="courseGrade mb-1">{formatGrade(grade)}</h6>
							<p className="courseGenre mb-2">{genre}</p>

							<p className="courseMeta mb-2">
								<a href={detailsUrl}>Подробнее</a>
							</p>
							<p className="coursePrice">{priceText}</p>
						</div>
					</div>
			</div>
		)
};

export default Course;
