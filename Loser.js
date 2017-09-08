gameObj.Loser = function (game) {};

gameObj.Loser.prototype = {
  create: function () {
    console.log('State - Loser');

       
       var spBackground = this.add.sprite(0, 0, 'backgroundlose');
        var spTitle = this.add.sprite(this.world.centerX, 20, 'ohno');
        spTitle.anchor.setTo(0.5, 0);
        spTitle.scale.setTo(.8);


        var wincat = this.add.sprite(410, 465, 'win');


        // add text stylings!
         var generalStyle = {
          wordWrapWidth: 450,
          font: '18px Courier',
          fill: '#DDDDDD',
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
        var timeStr = gameObj.gTime;

        // actual text 
        var txtMove = this.add.text(250, 540, 'Time Left:', generalStyle);
         var txtMove = this.add.text(370, 540, timeStr, generalStyle3);
        var txtPoint = this.add.text(250, 480, 'Kittens Saved:', generalStyle);
        var txtPoint = this.add.text(460, 480, 'x' + scoreStr, generalStyle3);
        // add buttons!
        var btPlay = this.add.button(260, 610, 'playagain', this.replayFun, this, 1, 0, 2);
  },
  replayFun: function () {
    console.log('heyyy');
    this.state.start('Play');
  }
};