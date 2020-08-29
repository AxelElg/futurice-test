const {
	determineReferralName,
	determineCompanyAffiliation,
	profileTextBuilder,
} = require('./helpers');

const responseBuilder = data => {
	const referralName = determineReferralName(data);
	const companyAffiliationText = determineCompanyAffiliation(data.company);
	const profileText = profileTextBuilder(
		referralName,
		data.created_at,
		data.updated_at,
		data.public_repos,
		companyAffiliationText
	);

	return {
		userName: data.login,
		realName: data.name,
		id: data.id,
		image: data.avatar_url,
		text: profileText,
		link: data.html_url,
	};
};

module.exports.responseBuilder = responseBuilder;
