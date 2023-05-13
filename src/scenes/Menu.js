class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    startButton;
    preload(){
        this.load.image('menuBackdrop', './assets/titlepage.png');
    }
    create(){

        this.add.image(0,0, 'menuBackdrop').setOrigin(0,0);

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

        const startButton = new Button(330, 350, 'Play Game', this, () => this.scene.start("contextScene"));
        const creditButton = new Button(330, 400, 'Credit Page', this, () => this.scene.start("tutorialScene"));

    }
}