class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //Load images/tile sprites
        this.load.image('hw', './assets/homework.png');
        this.load.image('t', './assets/tv.png');
        
        //Load spritesheet
        //this.load.spritesheet('explosion', './assets/enemysprite.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 9});

    }

    create() {
        //Place tile sprite
        //this.add.image(400,400, 't').setOrigin(0,0);
        //this.starfield = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        //Green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        //White borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        //Add music
        this.sound.add('music', {loop: false, volume : 0.1}).play();

        //this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'cup').setOrigin(0.5, 0);

        //Add Spaceships (x3)
        //this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'straw', 0, 30).setOrigin(0, 0);
        //this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'liquid', 0, 20).setOrigin(0,0);
        //this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'pearls', 0, 10).setOrigin(0,0);
        //Add enemy pudding (small)
        //this.ship04 = new Spaceship(this, game.config.width + 350, 150, 'pudding', 0, 50).setOrigin(0, 0);

        //Define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        //Animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { 
                start: 0, 
                end: 9, 
                first: 0
            }),
            frameRate: 30
        });

        
        this.p1Score = 0;

        //Display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);

        //GAME OVER flag
        this.gameOver = false;

    }

    update() {
       /*
        //Check key input for restart / menu
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            //highscore = Math.max(this.p1Score);
            this.scene.restart();
        }

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //highscore = Math.max(this.p1Score);
            this.scene.start("menuScene");
        }

        this.starfield.tilePositionX -= 4;  // update tile sprite

        if(!this.gameOver) {
            this.p1Rocket.update();             // update p1
             this.ship01.update();               // update spaceship (x3)
            this.ship02.update();
            this.ship03.update();
            this.ship04.update();
        }

        //Check collisions
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
           // this.fire = false;
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
            this.emitter = this.add.particles(this.ship03.x, this.ship03.y, 'particle', {
                speed: 100,
                lifespan: 3000,
                gravityY: 200
            });
            this.emitter.explode(16);
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
            //this.fire = false;
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
            this.emitter = this.add.particles(this.ship02.x, this.ship02.y, 'particle', {
                speed: 100,
                lifespan: 3000,
                gravityY: 200
            });
            this.emitter.explode(16);
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
            //this.fire = false;
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
            this.emitter = this.add.particles(this.ship01.x, this.ship01.y, 'particle', {
                speed: 100,
                lifespan: 3000,
                gravityY: 200
            });
            this.emitter.explode(16);
        }
        if (this.checkCollision(this.p1Rocket, this.ship04)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship04);
        }

        //do {
        //    this.text.setText(`FIRE`);
        //} while (!this.fire);

        this.clockSpeed;
        */
    }
/*
    checkCollision(rocket, ship) {
        //Simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
                return true;
        } else {
            return false;
        }
    }

    

    shipExplode(ship) {
        //Temporarily hide ship
        ship.alpha = 0;                         
        //Create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
            ship.reset();                         // reset ship position
            ship.alpha = 1;                       // make ship visible again
            boom.destroy();                       // remove explosion sprite
        });
        //Score add and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score; 
        
        //this.sound.play('sfx_explosion');
        this.sound.play('sfx_explosion' + Math.floor(Math.random() * 4));
      }
      */
}