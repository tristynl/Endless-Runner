class Context extends Phaser.Scene {
    constructor(){
        super("contextScene");
    }

    startButton;
    preload(){
        this.load.image('contextPic', './assets/context.png');
    }
    create(){

        this.add.image(0,0, 'contextPic').setOrigin(0,0);

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

        const startButton = new Button(330, 440, 'Continue', this, () => this.scene.start("playScene"));

    }
}