gameObj.Main = function (game) {};

gameObj.Main.prototype = {

  create: function () {
    console.log('State - Main');
        var spBackground = this.add.sprite(0, 0, 'backgroundslime');
        var spLogo = this.add.sprite(this.world.centerX, 70, 'logo');
        spLogo.anchor.setTo(.5, 0);
        spLogo.scale.setTo(.8);
 
        var spTitle = this.add.sprite(this.world.centerX, 270, 'title');
        spTitle.anchor.setTo(0.5, 0);

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
       
        // add buttons!
        var btPlay = this.add.button(this.world.centerX, 500, 'play', this.actionOnClick, this, 1, 0, 2);
        btPlay.scale.setTo(.8);
        btPlay.anchor.setTo(.5, 0);
     
      }, // end create 

      // end create text 

    actionOnClick: function () {
    console.log('yoooo');
    this.state.start('Instr');
  }

};


