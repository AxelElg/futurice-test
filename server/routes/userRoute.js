const express = require('express');
const axios = require('axios');
const responseBuilder = require('../services/responseBuilder').responseBuilder;

const router = express.Router();
const gitApiUrl = 'https://api.github.com/users/';

router.get('/', async (req, res) => {
	try {
		const data = await axios.get(gitApiUrl + req.query.name).then(x => x.data);

		res.send(responseBuilder(data));
	} catch (err) {
		res.send(err);
	}
});

module.exports.router = router;
