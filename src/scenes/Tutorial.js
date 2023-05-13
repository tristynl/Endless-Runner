class Tutorial extends Phaser.Scene {
    constructor(){
        super("tutorialScene");
    }

    preload(){
        this.load.image('backDrop', './assets/backdrop.png');
    }
    create(){
        
        this.add.image(0,0, 'backDrop').setOrigin(0,0);
        let tutorialConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            color: '7383ff', //#843605
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0    
        }

        this.add.text(490, 50, 'Try to Escape Your Responsibilities!', tutorialConfig).setOrigin(0.5);
        this.add.text(100, 100, 'Too many things to do? Just run away! Run away from the little voice in your head telling you to do your responsibilities.', {
            //align: 'center',
            fontSize: '25px',
            color: 'yellow',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0 
        });

    }
}