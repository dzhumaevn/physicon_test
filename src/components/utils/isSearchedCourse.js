// Немного перемудрил с поиском. Забыл, что требуется поиск только по названию.
const isSearchedCourse = (course, subStrings) => {
	for (const str of subStrings) {
		const gradeStr = course.grade.toLowerCase();
		const genreStr = course.genre.toLowerCase();
		const subjectStr = course.subject.toLowerCase();

		const subStr = str.toLowerCase();
		if (!(gradeStr.includes(subStr) || genreStr.includes(subStr) || subjectStr.includes(subStr))) {
			return false;
		}
	}
	return true;
};

export default isSearchedCourse;
