let config = {
    type: Phaser.CANVAS,
    width: 690,
    height: 540,
    scene: [Menu, Context, Tutorial, Instructions, Play]
}

let game = new Phaser.Game(config);

//Set UI Sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Reserve keyboard variables
let keyUP, keyDOWN;