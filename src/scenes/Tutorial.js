class Tutorial extends Phaser.Scene {
    constructor(){
        super("tutorialScene");
    }

    create(){
        let tutorialConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            color: '#fcd9ff', //#843605
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0    
        }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Sup homie', tutorialConfig).setOrigin(0.5);

    }
}