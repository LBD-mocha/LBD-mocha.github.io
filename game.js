let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'gameCanvas',
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);

let character;
let cursors;
let speed = 160; // Change this to change the speed of the character

function preload ()
{
  // Replace 'your_sprite_sheet.png' with the path to your sprite sheet
  this.load.spritesheet('character', 'mocha.png', { frameWidth: 400, frameHeight: 300 });
  this.load.image('ground', 'item.png');


  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
}

function create ()
{
  character = this.physics.add.sprite(400, 300, 'character');

  // this.anims.create({
  //   key: 'walk',
  //   frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
  //   frameRate: 10,
  //   repeat: -1
  // });

  cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
  character.setVelocity(0);

  if (cursors.left.isDown)
  {
    character.setVelocityX(-speed);
    // character.anims.play('walk', true);
  }
  else if (cursors.right.isDown)
  {
    character.setVelocityX(speed);
    // character.anims.play('walk', true);
  }
  else
  {
    character.anims.stop();
  }
}
