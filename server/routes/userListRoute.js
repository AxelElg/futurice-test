const express = require('express');
const fs = require('fs');

const dbDir = './db/profiles.json';

const router = express.Router();

router.get('/', (req, res) => {
	const data = fs
		.readFileSync(dbDir, err => console.log(err))
		.map(profile => JSON.parse(profile));
	res.send(data);
});

module.exports.router = router;
