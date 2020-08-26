const userRoute = require('./userRoute').router;
const addUserToListRoute = require('./addUserToListRoute').router;
const removeUserFromListRoute = require('./removeUserFromListRoute').router;
const userListRoute = require('./userListRoute').router;

module.exports = {
	userRoute,
	addUserToListRoute,
	removeUserFromListRoute,
	userListRoute,
};
