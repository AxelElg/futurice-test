//testing
const express = require('express');
const path = require('path');
const fs = require('fs');
const dbDir = './db/profiles.json';

const {
	userRoute,
	addUserToListRoute,
	userListRoute,
	removeUserFromListRoute,
} = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

// gets a desired profile from githubs API and returns a custom built exerpt.
app.use('/get-git-info', userRoute);

// returns all profiles in the database
app.use('/all-profiles', userListRoute);

// adds profiles to the database
app.use('/', addUserToListRoute);

// edits (removes a profile from ..) the database
app.put('/', removeUserFromListRoute);

app.listen(PORT, () => {
	console.log('App is listening on port ' + PORT);
});
