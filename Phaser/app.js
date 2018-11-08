var game = new Phaser.Game(800,800, Phaser.Auto, '', {preload:preload, create:create, update:update});
var score = 0;
var lives = 5;

function preload (){
game.load.image('sky', 'assets/sky.png');
game.load.image('ground', 'assets/platform.png');
game.load.image('star', 'assets/star.png');
game.load.spritesheet('player','assets/dude.png', 32,48);
game.load.spritesheet('boy','assets/baddie.png', 32,32);
}

function create(){
game.physics.startSystem(Phaser.Physics.ARCADE);
game.add.sprite(0,0,'sky');
platforms = game.add.physicsGroup();
platforms.enableBody=true;
var ground = platforms.create(0,750, 'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true
var ledge = platforms.create(0, 500, 'ground')
ledge.body.immovable = true;
var ledge2 = platforms.create(300, 400, 'ground')
ledge2.body.immovable = true;
var style = {font: "bold 32px Arial", fill:"#fff"};
scorelabel = game.add.text(755,5, "Score:", style);
scorenumber = game.add.text(790,5, score, style);
lifelabel = game.add.text(10,5, "Lives:", style);
lifenumber = game.add.text(45,5, "Score:", style);
player = game.add.sprite(32,400, "player")
player.animations.add('left', [0,1,2,3],10,true);
player.animations.add('right', [5,6,7,8],10,true);
game.physics.arcade.enable(player);
player.body.bounce.y = 0.2;
player.body.gravity.y = 300;
player.body.collideWorldBounds = true;
boy = game.add.sprite(760,20, "boy")
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
game.physics.arcade.collide(stars, platforms);
game.physics.arcade.collide(boy, platforms);
player.body.velocity.x = 0;
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

}
game.physics.arcade.overlap(player, stars, collectStar);
game.physics.arcade.overlap(player, boy, deleteLives);

moveEnemy();

if (lives < 0) {
	endGame();
}


}

function moveEnemy(){
if(boy.x >759){
	boy.animations.play('left');
	boy.body.velocity.x = -150
}else if (boy.x <405){
		boy.animations.play('right');
	boy.body.velocity.x = 150
}
}
function endGame(){
	player.kill();
	scorelabel.text = "You such a n00b" + score;
	scorenumber.visible = false;
	lifelabel.visible = false;
	lifenumber.visible = false;
}
function collectStar(player,star){
score = score + 1;
scorenumber.setText(score);
star.kill();
}
function deleteLives(player, boy){
	lives = lives - 1;
	lifenumber.setText(lives);
	boy.kill();
	boy.reset(10,20);
}






