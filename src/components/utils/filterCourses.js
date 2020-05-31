import isSearchedCourse from "./isSearchedCourse";

const filterBySubj = (courses, subj) => subj ? courses.filter((course) => course.subject.includes(subj)) : courses;
const filterByGenre = (courses, genre) => genre ? courses.filter((course) => course.genre.includes(genre)) : courses;
const filterByGrade = (courses, grade) => {
	if (grade) {
		return courses.filter((course) => course.grade.split(';').includes(grade));
	}
	return courses;
};

const filterBySearchTerm = (courses, searchStr) => {
	const subStrings = searchStr.split(' ').filter((item) => item);
	if (subStrings.length !== 1) {
		return courses;
	}
	return courses.filter((course) => isSearchedCourse(course, subStrings));
};

const filterCourses = (courses, {subj, genre, grade, searchStr}) => {
	let filteredCourses = [...courses];

	filteredCourses = filterBySubj(filteredCourses, subj);
	filteredCourses = filterByGenre(filteredCourses, genre);
	filteredCourses = filterByGrade(filteredCourses, grade);

	filteredCourses = filterBySearchTerm(filteredCourses, searchStr);
	return filteredCourses;
};

export default filterCourses;
