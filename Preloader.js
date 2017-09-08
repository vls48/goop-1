gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
	preload: function () {
		console.log("State-Preloader");
		this.stage.backgroundColor = '#333';

        // Progress bar animation code
        var progBg = this.preloadBg = this.add.sprite((820 - 297) / 2, (700 - 145) / 2, 'preloaderBg');
        var progBar = this.preloadBar = this.add.sprite((820 - 158) / 2, (700 - 50) / 2, 'preloaderBar');
         this.load.setPreloadSprite(this.preloadBar);

        
		 //load graphics
            this.load.image('backgroundslime','assets/bg.jpg');
            this.load.image('backgroundwater','assets/bgwater.jpg');
            this.load.image('arrowsx1', 'assets/arrowsx1.png');
            this.load.image('point', 'assets/point.png');
            this.load.image('title', 'assets/GOOPkittens.png');
            this.load.image('cat', 'assets/cat.png');
            this.load.image('logo', 'assets/logo.png');
            this.load.image('heart', 'assets/pixel-heart.png');
		 //load sprite sheets
            this.load.spritesheet('play', 'assets/play.png', 223, 90);
         //load fonts
            this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

         //WINS
            this.load.image('backgroundwater','assets/bgwater.jpg');
            this.load.image('wintitle', 'assets/winscreen.png');
            this.load.image('win', 'assets/wincat.png');

            this.load.spritesheet('winscreenanim', 'assets/winscreenanim.png', 563, 457, 4);



            //load sprite sheets
            this.load.spritesheet('playagain', 'assets/playagain.png', 223, 90);

        //PLAY
         	//load graphics
            this.load.image('slimecat','assets/slimecat.png');
            this.load.image('freecat','assets/cat.png');
            this.load.image('bucket', 'assets/bucket.png');
            this.load.image('bottomslime', 'assets/bottomslime.png');
            this.load.image('gun', 'assets/gun.png');

            this.load.image('arrow', 'assets/squirtgun.png');
            this.load.image('bullet', 'assets/water.png');

            
            this.load.image('counter', 'assets/wincat.png');
            this.load.image('bg2', 'assets/bg2.png');

        //LOSE 
        	 //load graphics
            this.load.image('backgroundlose','assets/losebg.png');
            this.load.image('ohno', 'assets/ohno.png');
            this.load.image('win', 'assets/wincat.png');


            //load sprite sheets
            this.load.spritesheet('play', 'assets/playagain.png', 223, 90);
            this.load.spritesheet('winbut', 'assets/win.png', 108, 90);
            this.load.spritesheet('losebut', 'assets/lose.png', 108, 90);
            this.load.spritesheet('pointsbut', 'assets/pointsbtn.png', 108, 90);
        //INSTRUCTIONS
            //load graphics

            //load sprite sheets
            this.load.spritesheet('go', 'assets/go.png', 223, 90);

	},
	create: function () {
		this.state.start('Main');
	}
};