class SceneLoader extends Phaser.Scene
{
  constructor()
  {
    super('SceneLoader');
  }

  preload()
  {    
    this.load.image('logo', 'assets/images/title/logo2.png');
    this.load.image('background', 'assets/images/background/background.png');
    this.load.image('infoPage', 'assets/images/info page/info page.png');
    this.load.image('tableFrame', 'assets/images/table/table frame.png');
    this.load.image('tableBackground', 'assets/images/table/table background.png');
    this.load.image('leaves', 'assets/images/spin button/leaves.png');
    
    this.load.image('spinButton', 'assets/images/spin button/spinButton.png');
    this.load.image('autoStartButton', 'assets/images/buttons/auto start.png');
    this.load.image('betButton', 'assets/images/buttons/bet.png');
    this.load.image('creditsButton', 'assets/images/buttons/credits.png');
    this.load.image('linesButton', 'assets/images/buttons/lines.png');
    this.load.image('wonButton', 'assets/images/buttons/won.png');
    this.load.image('infoButton', 'assets/images/buttons/info.png');
    this.load.image('soundOnButton', 'assets/images/buttons/sound on.png');
    this.load.image('soundOffButton', 'assets/images/buttons/sound off.png');
    
    ReelsInfo.AllReelSymbols.forEach(function (symbolKey) {
      this.load.image(symbolKey, 'assets/images/symbols/' + symbolKey + '.png');
    }, this);
  }

  create()
  {
    this.scene.start('SceneMain');
  }
}