class SceneLoader extends Phaser.Scene
{
  constructor()
  {
    super('SceneLoader');
  }

  preload()
  {    
    this.load.image('background', 'assets/images/background/Capa 1 copia.png');
    this.load.image('tableFrame', 'assets/images/table/table frame.png');
    this.load.image('tableBackground', 'assets/images/table/table background.png');
    
    this.reelSymbols = ['Cherry', 'Grape', 'Watermelon', 'Lemon'];
    this.reelSymbols.forEach(function (symbolKey) {
      this.load.image(symbolKey, 'assets/images/symbols/' + symbolKey + '.png');
    }, this);
  }

  create()
  {
    this.scene.start('SceneMain');
  }
}