var gameObj = {
	//global variables
	gScore: 0,
	gTime: '01:30'
};

gameObj.Boot = function (game) {};

gameObj.Boot.prototype = {
	preload: function (){
		console.log('State - Boot');
		this.load.image('preloaderBg', 'assets/loading-bg.png');
    	this.load.image('preloaderBar', 'assets/loading-bar.png');
	},
	create: function (){
		this.state.start('Preloader');
	}
};