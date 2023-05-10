let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu]
}

let game = new Phaser.Game(config);

//Set UI Sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Reserve keyboard variables
let keyLEFT, keyRIGHT;