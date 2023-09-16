class SceneMain extends Phaser.Scene
{
  constructor()
  {
    super('SceneMain');
  }

  init()
  {
    this.backgroundImage;
    this.tableBackground;
    this.tableFrame;

    this.reel1;
    this.reel2;
    this.reel3;
    this.reel4;
    this.reel5;
  }

  preload()
  {
    
  }

  create()
  {
    this.backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
    Align.scaleToGameW(this.backgroundImage, 1);
    
    this.tableBackground = this.add.image(CENTERX, CENTERY, 'tableBackground');
    Align.scaleToGameW(this.tableBackground, 0.9);

    this.tableFrame = this.add.image(CENTERX, CENTERY, 'tableFrame');
    Align.scaleToGameW(this.tableFrame, 0.9);
    
    this.createReelsWithSymbols();
  }

  createReelsWithSymbols()
  {
    const reelSymbolsArray = ['Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon'];
    // REELS X POSITIONS: 400, 580, 765, 952, 1135
    // REELS Y FIRST POSITION: 230

    this.reel1 = this.add.container(400, 230);

    this.addSymbolsToReel(this.reel1, reelSymbolsArray);
  }

  addSymbolsToReel(reel, reelSymbolsArray)
  {
    reelSymbolsArray.forEach((symbolName, i) => {
      const symbolImage = this.add.image(0, i * 150 /* SPACES */, symbolName).setDisplaySize(150, 120) /* SYMBOL SIZE */;
      reel.add(symbolImage);
    });
  }
}