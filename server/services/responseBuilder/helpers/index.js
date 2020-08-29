const determineReferralName = require('./determineReferralName')
	.determineReferralName;
const dateBuilder = require('./dateBuilder').dateBuilder;
const determineCompanyAffiliation = require('./determineCompanyAffiliation')
	.determineCompanyAffiliation;
const profileTextBuilder = require('./profileTextBuilder').profileTextBuilder;

module.exports = {
	determineCompanyAffiliation,
	dateBuilder,
	determineReferralName,
	profileTextBuilder,
};
