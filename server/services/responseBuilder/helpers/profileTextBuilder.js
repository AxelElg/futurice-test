const dateBuilder = require('./dateBuilder').dateBuilder;

module.exports.profileTextBuilder = (
	name,
	startDate,
	latestDate,
	repos,
	affiliations
) => {
	return `${name} has been on github since ${dateBuilder(
		startDate
	)}, during this time this person has created a total of ${repos} repositories, and was last active in ${dateBuilder(
		latestDate
	)}. ${affiliations}`;
};
