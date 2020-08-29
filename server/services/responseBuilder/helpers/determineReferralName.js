module.exports.determineReferralName = data =>
	data.name ? data.name : data.login;
