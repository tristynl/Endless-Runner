class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    startButton;
    preload(){
        this.load.image('menuBackdrop', './assets/title.jpeg');
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

        const button = new Button(750, 300, 'Play Game', this, () => this.scene.start("tutorialScene"));

    }
}