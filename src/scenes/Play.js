class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    counter = 0;
    //moveSpeed = 2;
    preload() {
        //load our images or sounds 
        this.load.image('bg', './assets/backPlay.png');
        this.load.image("ball", "assets/character.png");
        this.load.image("block", "assets/ground.png");
        this.load.image('t', './assets/tv.png');
        this.load.image('bm', './assets/broom.png');
        this.load.image('hk', './assets/homework.png');



        this.load.spritesheet('character', './assets/characteranimation.png', {frameWidth: 100, frameHeight: 100, startFrame: 0, endFrame: 3});
    }
    create() {
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.bg = this.add.tileSprite(0, 0, 960, 540, 'bg').setOrigin(0, 0);

        //Add music
        this.sound.add('music', {loop: false, volume : 0.1}).play();

         //Animation config
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('character', { 
                start: 0, 
                end: 4, 
                first: 0
            }),
            frameRate: 30,
            repeat: -1  
        });
        
        let character = this.add.sprite(100, 325, 'character').setOrigin(0,0);
        character.anims.play('walk');

        this.counter = 3;
        //Creates Item to Catch
        this.tv = this.physics.add.sprite(100, 0, "t")
            .setOrigin(0, 0)
                //.setScale(4)
            //.setCollideWorldBounds(true)
            .setGravityY(100);

        this.bo = this.physics.add.sprite(200, 0, "bm")
            .setOrigin(0, 0)
                //.setScale(4)
            //.setCollideWorldBounds(true)
            .setGravityY(100);

        this.he = this.physics.add.sprite(400, 0, "hk")
            .setOrigin(0, 0)
                //.setScale(4)
            //.setCollideWorldBounds(true)
            .setGravityY(100);
                //this.p1Score = 0;

        //Display score
            let scoreConfig = {
                fontFamily: 'Courier',
                fontSize: '20px',
                color: '#843605',
                align: 'center',
                padding: {
                    top: 5,
                    bottom: 5,
                },
                //fixedWidth: 100
                }
            this.scoreLeft = this.add.text(470, 15, "Hearts Left: " + this.counter, scoreConfig);
              
            let menuConfig = {
                fontFamily: 'Georgia',
                fontSize: '28px',
                color: '#fcd9ff', //#843605
                align: 'center',
                padding: {
                    top: 5,
                    bottom: 5,
                },
                fixedWidth: 0
            }  
            const startButton = new Button(530, 500, 'Press here to restart', this, () =>  this.scene.restart());

    }
    update() {
        this.bg.tilePositionX += 3;

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            //highscore = Math.max(this.p1Score);
            this.scene.restart();
        }
        this.clockSpeed;

        /*if(this.checkCollision(this.character, this.tv)) {
            this.tv.reset();
            this.counter += 1;             
         }   
         
         if(this.checkCollision(this.character, this.bo)) {
            this.bo.reset();
            this.counter -= 1;             
         } 
         
         if(this.checkCollision(this.character, this.he)) {
            this.he.reset();
            this.counter -= 1;             
         }  

         if(this.counter == 0){
            this.gameOver = true;
            this.add.text(300, 300, 'GAME OVER').setOrigin(0.0);
            this.add.text(300, 500, 'Press (R) to Restart').setOrigin(0.0);
         }
*/
         
    }



}