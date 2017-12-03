gameObj.Winner = function (game) {};

gameObj.Winner.prototype = {
	create: function () {
		console.log('State-Winner');
    console.log('hey');
		 // add graphics!
        var spBackground = this.add.sprite(0, 0, 'backgroundwater');
        //var spTitle = this.add.sprite(this.world.centerX, 20, 'wintitle');
       

        //var spHeart = this.add.sprite(390, 545, 'heart');

        //var spHeart2 = this.add.sprite(0, 0, 'heart').alignTo(spHeart, Phaser.RIGHT_CENTER, 16);

        var wincat = this.add.sprite(410, 435, 'win');



        
       var sWin = this.add.sprite(this.world.centerX, 20, 'winscreenanim');
        //  Here we add a new animation called 'walk'
        //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
        var walk = sWin.animations.add('walk');
        //  And this starts the animation playing by using its key ("walk")
        //  30 is the frame rate (30fps)
        //  true means it will loop when it finishes
        sWin.animations.play('walk', 3, true);
        sWin.anchor.setTo(0.5, 0);
        sWin.scale.setTo(.8);
        // add text stylings!
         var generalStyle = {
          wordWrapWidth: 450,
          font: '18px Courier',
          fill: '#263223',
          align: 'center',
          wordWrap: true
        };

        var generalStyle2 = {
          wordWrapWidth: 500,
          font: '18px Courier',
          fill: '#263223',
          align: 'center',
          wordWrap: true
        };

        var generalStyle3 = {
          width: '150px',
          font: '20px 3x5',
          fill: 'white',
          align: 'left'
        };

        var scoreStr = gameObj.gScore;
        var timeStr = '0:00';
        // actual text 
        var txtMove = this.add.text(250, 500, 'Time Left:', generalStyle);
        var txtMove = this.add.text(370, 500, timeStr, generalStyle3);
        var txtPoint = this.add.text(250, 450, 'Kittens Saved:', generalStyle);
        var txtPoint = this.add.text(460, 450, 'x' + scoreStr, generalStyle3);
        //var txtLives = this.add.text(250, 550, 'Hearts Left:', generalStyle);

      // this.livesW = this.game.add.group();
      // this.livesW.create(this.game.world.centerX - 64, this.game.world.centerY + 40, 'heart').anchor.set(0.5);
      // this.livesW.create(this.game.world.centerX - 32, this.game.world.centerY + 40, 'heart').anchor.set(0.5);
      // this.livesW.create(this.game.world.centerX, this.game.world.centerY + 40, 'heart').anchor.set(0.5);
      // this.livesW.create(this.game.world.centerX + 32, this.game.world.centerY + 40, 'heart').anchor.set(0.5);
      // this.livesW.create(this.game.world.centerX + 64, this.game.world.centerY + 40, 'heart').anchor.set(0.5);
      // this.livesW.create(this.game.world.centerX + 96, this.game.world.centerY + 40, 'heart').anchor.set(0.5);
          

        //var life = lives.length;
        //console.log(life + ' aosfsan');

        // add buttons!
        var btPlay = this.add.button(260, 610, 'playagain', this.replayFun, this, 1, 0, 2);

        
      }, // end create   

      replayFun: function () {
        console.log('replayFun called');
        this.state.start('Play');
	}
};