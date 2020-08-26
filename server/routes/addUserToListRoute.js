const express = require('express');
const fs = require('fs');

const dbDir = './db/profiles.json';

const router = express.Router();

router.post('/', (req, res) => {
	const profile = JSON.parse(req.query.profile);
	const newData = JSON.parse(fs.readFileSync(dbDir, err => console.log(err)));
	if (newData.filter(e => e.id === profile.id).length === 0) {
		newData.push(profile);
		fs.writeFileSync(dbDir, JSON.stringify(newData, null, 2));
	}
	res.sendStatus(200);
});

module.exports.router = router;
