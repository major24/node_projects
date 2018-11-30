
//user.js

module.exports = function(userService){

	var user = {};

	user.getUsers = function(){
		console.log('in real user module');
		return userService.get();
	};

	user.getEmailAddress = function(username) {
		return userService.getEmail(username);
	};


	// other mocules..


	return user;
};



