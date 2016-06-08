mygame.Game = function(game) {
	// reference to main game object
	this.game = game;

	this._banner = null;
	this._btnback = null;

	this._tile1 = null;
	this._tile2 = null;
	this._tile3 = null;
	this._tile4 = null;
};

mygame.Game.prototype = {
	// -------------------------------------
	// create Phaser.game object
	// -------------------------------------
	create: function() {

		// center vertically and horizontally
		var xcenter = this.game.width / 2;
		var ycenter = this.game.height / 2;

		// initialise clouds background
		this.stage.backgroundColor = '#7CB872'; // green
		
		this._banner = this.game.add.sprite(0, 0, 'spritesheet', 'bannergame');
		this._btnback = this.game.add.button(xcenter-140, ycenter+120, 'spritesheet', this.doBtnBack, this, 'back2', 'back1');

		// add some random tiles
		this._tile1 = this.game.add.sprite(xcenter-30, 60, 'spritesheet', 'tile1'); // top center
		this._tile2 = this.game.add.sprite(xcenter-30, this.game.height-60-30, 'spritesheet', 'tile2'); // bottom center
		this._tile3 = this.game.add.sprite(60, ycenter, 'spritesheet', 'tile3'); // left
		this._tile4 = this.game.add.sprite(this.game.width-60-30, ycenter, 'spritesheet', 'tile4'); // right

		// game state, set handler for resizing the layout
		//this.game.scale.onSizeChange.add(this.resize, this);
	},

	// -------------------------------------
	// Phaser.game update function
	// -------------------------------------
	update: function() {

	},

	// -------------------------------------
	// Phaser.game render function for debug stuff
	// -------------------------------------
	render: function() {
		// debug info
		//this.game.debug.body(this._banner);
	},

	// -------------------------------------
	// functions scaling and resizing
	// -------------------------------------
	resize: function() {
		console.log('resize() in Game -> size = ' + window.innerHeight + ' x ' + window.innerWidth);
    
		// center vertically and horizontally
		// var xcenter = this.game.width / 2; xcenter will stay the same, because see Boot.resizeCallback
		var ycenter = this.game.height / 2;

		// re-position some elements, so the layout is centered
		this._btnback.y = ycenter+120;
		// this._tile1.y = 60; // tile1 doesn't change
		this._tile2.y = this.game.height-60-30;
		this._tile3.y = ycenter;
		this._tile4.y = ycenter;
	},

	doBtnBack: function() {
		// switch back to MainMenu state
		this.state.start('MainMenu');
	},

};
