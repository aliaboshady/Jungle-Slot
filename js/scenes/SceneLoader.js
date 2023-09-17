class SceneLoader extends Phaser.Scene
{
  constructor()
  {
    super('SceneLoader');
  }

  preload()
  {    
    this.load.image('background', 'assets/images/background/background.png');
    this.load.image('tableFrame', 'assets/images/table/table frame.png');
    this.load.image('tableBackground', 'assets/images/table/table background.png');
    this.load.image('leaves', 'assets/images/spin button/leaves.png');
    this.load.image('spinButton', 'assets/images/spin button/spinButton.png');
    
    ReelsInfo.AllReelSymbols.forEach(function (symbolKey) {
      this.load.image(symbolKey, 'assets/images/symbols/' + symbolKey + '.png');
    }, this);
  }

  create()
  {
    this.scene.start('SceneMain');
  }
}