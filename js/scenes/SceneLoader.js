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

    this.load.audio('reelsSpins', 'assets/audio/reels spins.m4a');
    this.load.audio('reelStop', 'assets/audio/reel stop.wav');
    this.load.audio('infoPageToggle', 'assets/audio/info page toggle.m4a');

    this.load.audio('winSound1', 'assets/audio/winlines/1.m4a');
    this.load.audio('winSound2', 'assets/audio/winlines/2.m4a');
    this.load.audio('winSound3', 'assets/audio/winlines/3.m4a');
    this.load.audio('winSound4', 'assets/audio/winlines/4.m4a');
    this.load.audio('winSound5', 'assets/audio/winlines/5.m4a');
    this.load.audio('winSound6', 'assets/audio/winlines/6.m4a');
    this.load.audio('winSound7', 'assets/audio/winlines/7.m4a');
    
    this.load.audio('betSound', 'assets/audio/bet/bet.m4a');
    this.load.audio('betSound0', 'assets/audio/bet/0.m4a');
    this.load.audio('betSound1', 'assets/audio/bet/1.m4a');
    this.load.audio('betSound2', 'assets/audio/bet/2.m4a');
    this.load.audio('betSound3', 'assets/audio/bet/3.m4a');
    this.load.audio('betSound4', 'assets/audio/bet/4.m4a');
    
    ReelsInfo.AllReelSymbols.forEach(function (symbolKey) {
      this.load.image(symbolKey, 'assets/images/symbols/' + symbolKey + '.png');
    }, this);
  }

  create()
  {
    this.scene.start('SceneMain');
  }
}