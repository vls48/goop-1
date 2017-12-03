gameObj.Instr = function (game) {};

gameObj.Instr.prototype = {
  create: function () {
    console.log('State - Instr');
        // add graphics!
        var spBackground = this.add.sprite(0, 0, 'backgroundslime');
        var spArrowsx1 = this.add.sprite(this.world.centerX - 70, 206, 'arrowsx1');
        var spPointer = this.add.sprite(this.world.centerX - 20, 60, 'point');


        var spHeart = this.add.sprite(this.world.centerX - 115, 420, 'heart');
        var spHeart2 = this.add.sprite(0, 0, 'heart').alignTo(spHeart, Phaser.RIGHT_CENTER, 16);
        var spHeart3 = this.add.sprite(0, 0, 'heart').alignTo(spHeart2, Phaser.RIGHT_CENTER, 16);
        var spHeart4 = this.add.sprite(0, 0, 'heart').alignTo(spHeart3, Phaser.RIGHT_CENTER, 16);
        var spHeart5 = this.add.sprite(0, 0, 'heart').alignTo(spHeart4, Phaser.RIGHT_CENTER, 16);
        var spHeart6 = this.add.sprite(0, 0, 'heart').alignTo(spHeart5, Phaser.RIGHT_CENTER, 16);

        

        // add text stylings!
         var generalStyle = {
          wordWrapWidth: 290,
          font: '16px Courier',
          fill: '#263223',
          align: 'center',
          wordWrap: true
        };

        var generalStyle2 = {
          wordWrapWidth: 500,
          font: '16px Courier',
          fill: '#263223',
          align: 'center',
          wordWrap: true
        };

        var generalStyle3 = {
          width: '150px',
          font: '20px 3x5',
          fill: '#263223',
          align: 'center'
        };

        // actual text 
        var txtMove = this.add.text(this.world.centerX - 130, 310, 'Move your boat left and right', generalStyle);
        var txtPoint = this.add.text(this.world.centerX - 130, 115, 'Point and click to shoot water at the kitten slimeballs', generalStyle);
        var txtLives = this.add.text(160, 458, 'Lose a life by getting hit by a kitten or letting one fall in the slime', generalStyle2);
        var txtTry = this.add.text(190, 570, 'See if you can survive the entire time!', generalStyle3);

        // add buttons!
        var btPlay = this.add.button(this.world.centerX, 620, 'go', this.actionOnClick, this, 1, 0, 2);
        btPlay.scale.setTo(.8);
        btPlay.anchor.setTo(.5, 0);
  },
  actionOnClick: function () {
    console.log('yoooo');
    this.state.start('Play');
  }
};