gameObj.Play = function (game) {
    var txScore;
    var timerObj;
    var txTime;
    var TimerSeconds;

    var catTimeOBJ;

    var spBucket;
    var spGun;
    var speedNum;

    var spShoot;
    var bullets;

    var fireRate;
    var nextFire;
    var MAX_CATS;
    var spBottom;
    //var lives;
};
    


gameObj.Play.prototype = {

  create: function () {
    console.log('State - Play');

      this.physics.startSystem(Phaser.Physics.ARCADE);

      fireRate = 100;
      nextFire = 0;

      meowObj = this.add.audio('meow');    
      music = this.add.audio('chip');

      music.play();
    // being that mps3 files take time to decode we need to check
    //soundsLoadedFlag = false; 
    //this.sound.setDecodedCallback([meowObj], this.collisionHandler, this);
    

//GRAPHICS
      //Add background image
        var spBG = this.add.sprite(0, 0, 'bg2');

      // Add graphics!
       // var spSlimeCat = this.add.sprite(450, 100, 'slimecat');
       // var spSlimeCat1 = this.add.sprite(130, -25, 'slimecat');
       // var spFreeCat = this.add.sprite(80, 370, 'freecat');
        spBucket = this.add.sprite(60, 535, 'bucket');
        spBucket.anchor.setTo(.5, 0);


        spBottom = this.add.sprite(this.world.centerX, 640, 'bottomslime');
        spBottom.anchor.setTo(.5, 0);

       
        
      this.lives = this.game.add.group();
      this.lives.create(this.game.world.centerX - 64, this.game.world.centerY + 220, 'heart').anchor.set(0.5);
      this.lives.create(this.game.world.centerX - 32, this.game.world.centerY + 220, 'heart').anchor.set(0.5);
      this.lives.create(this.game.world.centerX, this.game.world.centerY + 220, 'heart').anchor.set(0.5);
      this.lives.create(this.game.world.centerX + 32, this.game.world.centerY + 220, 'heart').anchor.set(0.5);
      this.lives.create(this.game.world.centerX + 64, this.game.world.centerY + 220, 'heart').anchor.set(0.5);
      this.lives.create(this.game.world.centerX + 96, this.game.world.centerY + 220, 'heart').anchor.set(0.5);
          
  //BULLETS
      bullets = this.add.group();
      bullets.enableBody = true;
      bullets.physicsBodyType = Phaser.Physics.ARCADE;

      bullets.createMultiple(8, 'bullet');
      bullets.setAll('checkWorldBounds', true);
      bullets.setAll('outOfBoundsKill', true);
      
      spShoot = spBucket.addChild(this.make.sprite(0, 10, 'gun'));  
      spShoot.anchor.set(0.4, 1);

      this.enemyPool = this.add.group();
      this.enemyPool.enableBody = true;
      this.enemyPool.physicsBodyType = Phaser.Physics.ARCADE;
      this.enemyPool.createMultiple(4, 'slimecat');
      this.enemyPool.setAll('anchor.x', 0.5);
      this.enemyPool.setAll('anchor.y', 0.5);
      this.enemyPool.setAll('outOfBoundsKill', true);
      this.enemyPool.setAll('checkWorldBounds', true);

      this.nextEnemyAt = 0;
      this.enemyDelay = 1000;



        var spCounter = this.add.sprite(620, 685, 'counter');

      // add text stylings!
         var generalStyle = {
          wordWrapWidth: 450,
          font: '18px 3x5',
          fill: 'white',
          align: 'center',
          wordWrap: true
        };

        var generalStyle2 = {
          wordWrapWidth: 500,
          font: '28px 3x5',
          fill: 'white',
          align: 'center',
          wordWrap: true
        };

        var generalStyle3 = {
          width: '150px',
          font: '20px 3x5',
          fill: 'teal',
          align: 'left'
        };


// -- - - - - - - - POINTS / TIMER- - - - -

        gameObj.gScore = 0;

      //Add text
        var scoreStr = '0';
        var timeStr = '2:00';

        txScore = this.add.text(670, 700, 'x' + scoreStr, generalStyle);
        txTime = this.add.text(50, 684, timeStr, generalStyle2);

      // actual text 
        var txtRescue = this.add.text(600, 665, 'RESCUED', generalStyle);

      //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        //var btWin = this.add.button(500, 550, 'winbut', this.winnerFun, this, 1, 0, 2);
        //var btLose = this.add.button(610, 550, 'losebut', this.loserFun, this, 1, 0, 2);
       // var btPoints = this.add.button(310,550, 'pointsbut', this.kill, this, 1, 0, 2);

       //Setup timer
        timerSeconds = 120;

      //Create timer object
        timerObj = this.game.time.create(false);
      //Set timer event to occur every 1 second
        timerObj.loop(1000, this.updateTimeFun, this);
      //Start timer
        timerObj.start();

        speedNum = 3;

        catTimeOBJ = this.game.time.create(false);
        var catNum = this.rnd.integerInRange(2000, 3000);
        console.log('catNum ' + catNum);
        catTimeOBJ.loop(catNum, this.dropCatFun, this);
        catTimeOBJ.start();

  //BUCKET / GUN PHYSICS

      this.physics.enable(spBucket, Phaser.Physics.ARCADE);
      this.physics.enable(spBottom, Phaser.Physics.ARCADE);
      spBucket.body.collideWorldBounds = true;


  }, 
  winnerFun: function () {
    console.log('winnerFun');
    this.state.start('Winner');
        
  },
  loserFun: function () {
    console.log('loserFun');
    this.state.start('Loser');       
  },
  pointsFun: function () {
    console.log('pointsFun called');
    gameObj.gScore+= 1;
    txScore.text = 'x' + gameObj.gScore;

  },
  updateTimeFun: function () {
    console.log('updateTimeFun called');
    timerSeconds--;
    if (timerSeconds > 0){
    //txTime.text = timerSeconds;
    var displayMin = Math.floor(timerSeconds / 60) % 60;
    var displaySec = Math.floor(timerSeconds) % 60;
    if (displaySec < 10){
        displaySec = '0' + displaySec;
    }
    gameObj.gTime = displayMin + ':' + displaySec;
    txTime.text = gameObj.gTime;
    } else {
    //time is up
        this.state.start('Winner');
    
         
    }
  },

 
  update: function () {
    console.log(this.lives.length);
    //console.log(this.physics.arcade.angleToPointer(spBucket));
    //spGun.rotation = this.physics.arcade.angleToPointer(spBucket) + 1.57;
    
    spShoot.rotation = this.physics.arcade.angleToPointer(spBucket) + 1.57;
    if (this.input.activePointer.isDown)
        {
            console.log('help');
            this.fire();
            
        }


    if (this.input.keyboard.isDown(Phaser.Keyboard.A)){
      //move bucket left
      spBucket.x -= speedNum;
      //spBucket.scale.x *= -1;
      //spGun.x -= speedNum;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.D)){
      //move bucket left
      spBucket.x += speedNum;
      //spGun.x += speedNum;
    }

    this.physics.arcade.overlap(
      this.bulletPool, this.enemyPool, this.enemyHit, null, this
      );


    if (this.nextEnemyAt < this.time.now && this.enemyPool.countDead() > 0) {
      this.nextEnemyAt = this.time.now + this.enemyDelay;
      var enemy = this.enemyPool.getFirstExists(false);
      // spawn at a random location top of the screen
      enemy.reset(this.rnd.integerInRange(20, 780), 0);
      // also randomize the speed
      enemy.body.velocity.y = this.rnd.integerInRange(70, 140);
    }

    this.physics.arcade.overlap(bullets, this.enemyPool, this.collisionHandler, null, this);
    this.physics.arcade.overlap(spBottom, this.enemyPool, this.groundHandler, null, this);
    this.physics.arcade.overlap(spBucket, this.enemyPool, this.bucketHandler, null, this);
  }, 

  fire: function () {

    console.log('fired');
    if (this.time.now > nextFire && bullets.countDead() > 0)
    {
        nextFire = this.time.now + fireRate;

        var bullet = bullets.getFirstDead();

        //bullet.reset(spShoot.x - 8, spShoot.y - 8);
        console.log(spBucket.x, spBucket.y);
        bullet.reset(spBucket.x-14, spBucket.y-5);

        this.physics.arcade.moveToPointer(bullet, 300);
    }
  },
  dropCatFun: function() {
    console.log('dropCat works');

  },
  kill: function(){
    this.lives.getTop().destroy();
    if(this.lives.length == 0){
      alert("dead!!");
      setTimeout(function(){
        this.state.restart();
      }, 1000);
    }
  },

  collisionHandler: function(bullet,enemy){
    console.log('faef');
    bullet.kill();
    enemy.kill();
    this.pointsFun();
    meowObj.play();
  },
  groundHandler: function(spBottom, enemy){
    enemy.kill();
    console.log('touched');
    this.lives.getTop().destroy();
    //this.lives.getTop().destroy();
    if(this.lives.length == 0){
      this.loserFun();
    }
  },
  bucketHandler: function(spBottom, enemy){
    enemy.kill();
    console.log('touched');
    this.lives.getTop().destroy();
    //this.lives.getTop().destroy();
    if(this.lives.length == 0){
      this.loserFun();
    }
  },
  
  render: function () {
    //this.add.text(32, 32, 'Active Bullets: ' + bullets.countLiving() + ' / ' + bullets.total);
   
  }
    
};
