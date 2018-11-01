var game = new Phaser.Game(800,800, Phaser.Auto, '', {preload:preload, create:create, update:update});
var score = 0;
var lives = 5;

function preload (){
game.load.image('sky', 'assets/sky.png');
game.load.image('ground', 'assets/platform.png');
game.load.image('star', 'assets/star.png');
game.load.spritesheet('player','assests/dude.png', 32,48);
game.load.spritesheet('bunny','assests/baddie.png', 32,48);
}

function create(){
game.physics.startSystem(Phaser.physics.ARCADE);
game.add.sprite(0,0,'sky');
platforms = game.add.physicsGroup();
platforms.enableBody=true;
var ground = platforms.create(0,750, 'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true
var ledge = platforms.create(0, 500, 'ground')
ground.body.immovable = true;
var ledge2 = platforms.create(300, 400, 'ground')
ground.body.immovable = true;
var style = {font: "bold 32px Arial", fill"#fff"};
scorelabel = game.add.text(755,5, "Score:", style);
scorenumber = game.add.text(790,5, score, style);
lifelabel = game.add.text(10,5, "Lives:", style);
lifenumber = game.add.text(45,5, "Score:", style);
}





function update(){


}