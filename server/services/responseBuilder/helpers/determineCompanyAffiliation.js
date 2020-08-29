module.exports.determineCompanyAffiliation = company => {
	return company
		? 'currently this person is affiliated with ' + company
		: 'this person is currently not affiliated with any company';
};
