const express = require('express');
const fs = require('fs');

const dbDir = './db/profiles.json';

const router = express.Router();

router.put('/', (req, res) => {
	const profileId = Number(req.query.id);
	const data = JSON.parse(fs.readFileSync(dbDir, err => console.log(err)));
	data.splice(
		data.findIndex(p => p.id === profileId),
		1
	);
	fs.writeFileSync(dbDir, JSON.stringify(data, null, 2));
	res.send(data);
});

module.exports.router = router;
