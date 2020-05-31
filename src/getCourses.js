const getCourses = async () => {
	const response = await fetch('https://cors-anywhere.herokuapp.com/http://krapipl.imumk.ru:8082/api/mobilev1/update', {
		method: 'POST'
	});
	const {items, result, errorMessage} = await response.json();

	if (result === 'Ok') {
		return items.map(({courseId, subject, grade, genre, price, priceBonus, shopUrl}) => {
			const id = shopUrl.slice(34);
			return {
				id: courseId,
				detailsUrl: `https://www.imumk.ru/offer/${id}`,
				grade,
				subject,
				genre,
				price,
				priceBonus
			}
		});
	} else {
		throw new Error(errorMessage);
	}
};

export default getCourses;
