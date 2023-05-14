/*********************************************
 * Author: Tristyn Lai
 * Game Title: I Don't Want To Work
 * Approximate Hours Spent on Project: 40 hours
 * Creative Tilt Justification: I am proud
 * of my visual style regarding the art I created
 * and the general idea I had for the endless runner form.
 * This time, I stuck to a specific color pallete where usually
 * the colors of procrastination resemble cooler/blue colors which is
 * why I tried to incorporate the colors throughout the game. 
 * In addition, I wanted the enemy to be a full dark character because
 * I wanted the enemy to pop up and have the character distinctly know
 * what are they running from. I know I am not a great artist but I really tried to get the art
 * to align with my idea in my head.
 * Other Notes: I would like to note that I definitely 
 * overscoped my idea for this game and had an extremely 
 * difficult time figuring out physics problems. 
 ********************************************/
let config = {
    type: Phaser.CANVAS,
    width: 690,
    height: 540,
    scene: [Menu, Credit, Context, Tutorial, Instructions, Play],

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 10 },
            debug: true
        }
    },
}

let game = new Phaser.Game(config);



//Set UI Sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Reserve keyboard variables
let keyLEFT, keyRIGHT, keyR, keyUP, keyDOWN;