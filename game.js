var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'theGame', { preload: preload, create: create, update: update });

var platforms;

function preload() {

}

function create() {
  //Inputting the Platforms
  game.world.setBounds(0,0,800,1200);
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.image(0,0,"background");

  platforms = game.add.group();
  platforms.enableBody = true;
  platforms.create(0,150,"platform");

  platforms.create(600,450,"platform")
  platforms.enablebody = true;


}

function update() {
}
