const express = require('express');
const axios = require('axios');

const router = express.Router();
const gitApiUrl = 'https://api.github.com/users/';

router.get('/', async (req, res) => {
	try {
		const data = await axios.get(gitApiUrl + req.query.name).then(x => x.data);

		const responseBuilder = data => {
			const dateBuilder = string => {
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
				const dateString = `${
					months[Number(string.match(regexMonth)[1]) - 1]
				} ${string.match(regexYear)[1]}`;

				return dateString;
			};

			const referralName = data.name ? data.name : data.login;

			const affiliationText = data.company
				? 'currently this person is affiliated with ' + data.company
				: 'this person is currently not affiliated with any company';

			const profileText = `${referralName} has been on github since ${dateBuilder(
				data.created_at
			)}, during this time this person has created a total of ${
				data.public_repos
			} repositories, and was last active in ${dateBuilder(
				data.updated_at
			)}. ${affiliationText}`;

			return {
				userName: data.login,
				realName: data.name,
				id: data.id,
				image: data.avatar_url,
				text: profileText,
				link: data.html_url,
			};
		};

		res.send(responseBuilder(data));
	} catch (err) {
		res.send(err);
	}
});

module.exports.router = router;
