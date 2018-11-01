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
var style = {font: "bold 32px Arial", fill:"#fff"};
scorelabel = game.add.text(755,5, "Score:", style);
scorenumber = game.add.text(790,5, score, style);
lifelabel = game.add.text(10,5, "Lives:", style);
lifenumber = game.add.text(45,5, "Score:", style);
player = game.add.sprite(32,400, "dude")
player.animations.add('left', [0,1,2,3],10,true);
player.animations.add('right', [5,6,7,8],10,true);
game.physics.arcade.enable(player);
player.body.bounce.y = 0.2;
player.body.gravity.y = 300;
player.body.collideWorldBounds = true;
boy = game.add.sprite(760,20, "baddie")
boy.animations.add('left', [0,1],10,true);
boy.animations.add('right', [2,3],10,true);
game.physics.arcade.enable(boy);
boy.body.bounce.y = 0.2;
boy.body.gravity.y = 300;
boy.body.collideWorldBounds = true;
stars = game.add.physicsGroup();
stars.enableBody = true;
for (var i = 0; i < 12; i++) {
var star = stars.create(i * 70, 0, "star");
star.body.gravity.y = 200;
star.body.bounce.y = 0.7 + Math.random() *0.2;
}
cursors = game.input.keyboard.createCursorKeys();
}






function update(){
game.physics.arcade.collide(player, platforms);
game.physics.arcade.collide(boy, platforms);
game.physics.arcade.collide(stars, platforms);
player.body.velocity.x = ;
if (cursors.left.isDown){
	player.body.velocity.x = -100;
	player.animations.play("left");
}
else if (cursors.right.isDown){
	player.body.velocity.x = 100;
	player.animations.play("right");
}
else{
	player.animation.stop();
	player.frame = 4;

}
if (cursors.up.isDown && player.body.touching.down){
	player.body.velocity.y = -400;
	player.animations.play("up");
}





}