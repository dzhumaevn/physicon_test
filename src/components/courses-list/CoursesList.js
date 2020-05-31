import React from "react";
import Course from "../course/Course";
import './CoursesList.css';

const CoursesList = ({courses, priceToggle, coursesLoaded}) => {
	const coursesElements = courses.map((course) => <Course key={course.id} course={course} priceToggle={priceToggle}/>);
	const spinner = (
			<div className="col-12">
				<div className="d-flex justify-content-center m-5">
					<div className="spinner-border" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			</div>
	);
	const content = coursesLoaded ? coursesElements : spinner;
	return (
		<div className="row">
			{content}
		</div>
	)
};

export default CoursesList;
