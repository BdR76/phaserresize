var MENU_ENTER_LEFT  = 1;
var MENU_ENTER_RIGHT = 2;
var MENU_EXIT_LEFT   = 3;
var MENU_EXIT_RIGHT  = 4;

var BLOCKGAME_VERION = 'v0.2b';

mygame.MainMenu = function(game){
	// define needed variables for mygame.MainMenu
	this.game = game;

	// main menu variables
	this._banner = null;
	this._btnstart = null;
};
	
mygame.MainMenu.prototype = {
	create: function(){

		// initialise clouds background
		this.stage.backgroundColor = '#4FA4B3'; // blue

		// center vertically and horizontally
		var xcenter = this.game.width / 2;
		var ycenter = this.game.height / 2;
		
		this._banner = this.game.add.sprite(0, 0, 'spritesheet', 'bannermenu');
		this._btnstart = this.game.add.button(xcenter-140, this.game.height-80, 'spritesheet', this.doBtnStart, this, 'start2', 'start1');

		// add some random tiles
		this._tile1 = this.game.add.sprite( 30, ycenter, 'spritesheet', 'tile1');
		this._tile2 = this.game.add.sprite(150, ycenter, 'spritesheet', 'tile2');
		this._tile3 = this.game.add.sprite(270, ycenter, 'spritesheet', 'tile3');
		this._tile4 = this.game.add.sprite(390, ycenter, 'spritesheet', 'tile4');
		
		// menu state, set handler for resizing the layout
		//this.game.scale.onSizeChange.add(this.resize, this);
	},
	
	// -------------------------------------
	// functions scaling and resizing
	// -------------------------------------
	resize: function() {
		console.log('resize() in MainMenu -> size = ' + window.innerHeight + ' x ' + window.innerWidth);

		// center vertically and horizontally
		// var xcenter = this.game.width / 2; xcenter will stay the same, because see Boot.resizeCallback
		var ycenter = this.game.height / 2;

		// re-position some elements, so the layout is centered
		this._btnstart.y = this.game.height-80;
		this._tile1.y = ycenter;
		this._tile2.y = ycenter;
		this._tile3.y = ycenter;
		this._tile4.y = ycenter;
	},

	update: function() {
		// nothing yet
	},

	doBtnStart: function() {
		// switch to Game state
		this.state.start('Game');
	}
};