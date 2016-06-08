mygame.Preloader = function(game){
	// define global variables width and height of the game
	mygame.GAME_WIDTH = 480;
	mygame.GAME_HEIGHT = 720;
};
mygame.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.loadingbar_bg = this.add.sprite(80, 240, 'loadingbar_bg');
		this.loadingbar_fill = this.add.sprite(80, 240, 'loadingbar_fill');
		this.load.setPreloadSprite(this.loadingbar_fill);

		// load sprites
		// sprite sheet created with Leshy SpriteSheet Tool -> https://www.leshylabs.com/apps/sstool/
		this.load.atlasJSONHash('spritesheet',  'img/spritesheet.png',  'img/spritesheet.json');
	},
	
	create: function() {
		// start the mainmenu state	
		this.state.start('MainMenu');
	},
};