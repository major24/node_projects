// brickService.js

module.exports = function(){

	var brickService = {};

	brickService.get = function(){
		console.log('in real brickService');
		return 'data from brickService';
	};



	// other ftns..

	
	return brickService;
};
