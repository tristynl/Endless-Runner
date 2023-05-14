class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //load our images or sounds 
        this.load.image("ball", "assets/tv.png");
        this.load.image("block", "assets/ground.png");
    }
    create() {
        this.power = 0;
        //define our objects
        //
        //
        //ball
        this.ball = this.physics.add.sprite(10, 400, "ball");
        this.ball.setGravityY(0);
        //
        //
        //
        //ground
        //
        //
        let ground = this.physics.add.sprite(0, 0, "block").setOrigin(0,0);
        //ground.displayWidth = 440;
        ground.setImmovable();
        //
        //
        //
        //set collider
        //
        //
        this.physics.add.collider(this.ball, ground);
        this.input.on('pointerdown', this.startJump, this);
        this.input.on('pointerup', this.endJump, this);
    }
    /*
    start the jump when the pointer goes down
     */
    startJump() {
        this.timer = this.time.addEvent({
            delay: 100,
            callback: this.tick,
            callbackScope: this,
            loop: true
        });
        this.ball.setVelocityY(-100);
    }
    /*
    end the jump when the pointer is up
     */
    endJump() {
        //this.timer.remove();
        this.ball.setVelocityY(-this.power * 100);
        this.power = 0;
    }
    tick() {
        if (this.power < 5) {
            this.power += .1;
            console.log(this.power);
        }
    }
    update() {
        //constant running loop
    }
}