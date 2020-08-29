module.exports.dateBuilder = string => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const regexMonth = /^\d+-(\d+)-\d+/;
	const regexYear = /^(\d+)-\d+-\d+/;
	const dateString = `${months[Number(string.match(regexMonth)[1]) - 1]} ${
		string.match(regexYear)[1]
	}`;

	return dateString;
};
