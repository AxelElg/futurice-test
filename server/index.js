//testing
const express = require('express');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
const app = express();
const dbDir = './db/profiles.json';
const gitApiUrl = 'https://api.github.com/users/';

app.use(express.static(path.join(__dirname, '../client/build')));

// gets a desired profile from githubs API and returns a custom built exerpt.
app.get('/get-git-info', async (req, res) => {
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
				: 'this person currently affiliated with any company';
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

// returns all profiles in the database
app.get('/all-profiles', (req, res) => {
	const data = fs
		.readFileSync(dbDir, err => console.log(err))
		.map(profile => JSON.parse(profile));
	res.send(data);
});

// adds profiles to the database
app.post('/', (req, res) => {
	const profile = JSON.parse(req.query.profile);
	const newData = JSON.parse(fs.readFileSync(dbDir, err => console.log(err)));
	if (newData.filter(e => e.id === profile.id).length === 0) {
		newData.push(profile);
		fs.writeFileSync(dbDir, JSON.stringify(newData, null, 2));
	}
	res.sendStatus(200);
});

// edits (removes a profile from ..) the database
app.put('/', (req, res) => {
	const profileId = Number(req.query.id);
	const data = JSON.parse(fs.readFileSync(dbDir, err => console.log(err)));
	data.splice(
		data.findIndex(p => p.id === profileId),
		1
	);
	fs.writeFileSync(dbDir, JSON.stringify(data, null, 2));
	res.send(data);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
