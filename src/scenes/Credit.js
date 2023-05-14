class Credit extends Phaser.Scene {
    constructor(){
        super("creditScene");
    }

    startButton;
    preload(){
        this.load.image('cred', './assets/credit.png');

    }
    create(){

        this.add.image(0,0, 'cred').setOrigin(0,0);

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

        const creditButton = new Button(330, 400, 'Back To Menu', this, () => this.scene.start("menuScene"));

    }
}