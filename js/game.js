/// <reference path="../phaser.d.ts" />

let game;
let config;
let CENTERX;
let CENTERY;

window.addEventListener('load', () => {
  config = {
    type: Phaser.AUTO,
    backgroundColor: '#cdcdcd',
    width: 1530,
    height: 740,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    scene: [SceneLoader, SceneMain]
  };
  
  game = new Phaser.Game(config);
  CENTERX = config.width / 2;
  CENTERY = config.height / 2;
});
