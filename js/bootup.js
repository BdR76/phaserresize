// default screen aspect ratio
// the game is optimised for this size
// but it can scale to taller height
var GAME_WIDTH = 480;
var GAME_HEIGHT = 600;

// create a namespace called mygame
var mygame = {};

// -------------------------------------
// Phaser state
// -------------------------------------
mygame.Bootup = function(game){

};
mygame.Bootup.prototype = {
	preload: function(){
		// preload the loading indicator first before anything else
		this.load.image('loadingbar_bg',   'img/loadingbar_bg.png');
		this.load.image('loadingbar_fill', 'img/loadingbar_fill.png');
	},
	create: function(){
		// set scale options
		// example found here http://www.html5gamedevs.com/topic/18903-using-phaserresize-with-high-pixel-ratio-devices/
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // USER_SCALE;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;

		// set resize and scale callbacks
		this.game.scale.setResizeCallback(this.resizeCallback, this);
		this.game.scale.onSizeChange.add(this.onSizeChange, this);

		// start the preloader state
		this.state.start('Preloader');
	},
	
	// -------------------------------------
	// scale resize function
	// -------------------------------------
	resizeCallback: function(manager) {
		
		console.log('resizeCallback - common function');
		var ratio = window.innerHeight / window.innerWidth;
		if (GAME_WIDTH * ratio > GAME_HEIGHT) {
			this.scale.setGameSize(GAME_WIDTH, Math.floor(GAME_WIDTH * ratio)) // too tall, adjust height resolution
		} else {
			this.scale.setGameSize(GAME_WIDTH, GAME_HEIGHT); // too wide, just use fixed resolution with empty side bars
		};
		
	},

	onSizeChange: function() {
		// Calls the resize method in current state (make sure each state has this)
		this.game.state.callbackContext.resize();
	}
};
