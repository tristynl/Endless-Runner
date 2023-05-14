class Instructions extends Phaser.Scene {
    constructor(){
        super("instructScene");
    }

    startButton;
    preload(){
        this.load.image('in', './assets/instruct.png');
        this.load.image('tvPic', './assets/tv.png');
        this.load.image('br', './assets/broom.png');
        this.load.image('ho', './assets/homework.png');
        this.load.image('pro', './assets/pro.png');


    }
    create(){

        this.add.image(0,0, 'in').setOrigin(0,0);
        this.add.image(300,420, 'tvPic').setOrigin(0,0);
        this.add.image(450,420, 'br').setOrigin(0,0);
        this.add.image(560,420, 'ho').setOrigin(0,0);        
        this.add.image(90,420, 'pro').setOrigin(0,0);




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

        const startButton = new Button(210, 500, 'Continue', this, () => this.scene.start("playScene"));

    }
}