const formatGrade = (grade) => {
	if (grade.includes(';')) {
		const classes = grade.split(';');
		const lowClass = classes[0];
		const highClass = classes[classes.length-1];
		return `${lowClass}-${highClass} классы`;
	} else {
		return `${grade} класс`;
	}
};

export default formatGrade;
