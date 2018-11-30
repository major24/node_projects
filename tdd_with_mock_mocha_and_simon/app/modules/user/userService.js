
// userService.js

module.exports = function(){

	var userService = {};

	userService.get = function(){
		console.log('in real userService');
		// now get data from Api or db. 
		// for now return test data
		return ["Steve", "Xavier", "Yogan"];
	};

	userService.getEmail = function(username){
		// now get data from Api or db. 
		// for now return test data
		return "get from db";
	};


	// other ftns..

	
	return userService;
};
