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
    this.spinSpeed = 3;
    this.rowCount = 3;
    this.reelsPositions = [400, 580, 765, 952, 1135];
    this.reelSymbolsSpacing = 150;
    this.symbolWidth = 150;
    this.symbolHeight = 100;
    this.reelPositionTop = 230;

    this.symbolsArrayReel1 = ['Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon'];
    this.symbolsArrayReel2 = ['Cherry', 'Grape', 'Grape', 'Watermelon', 'Cherry', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon'];
    this.symbolsArrayReel3 = ['Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry'];
    this.symbolsArrayReel4 = ['Cherry', 'Watermelon', 'Grape', 'Watermelon', 'Cherry', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon'];
    this.symbolsArrayReel5 = ['Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon'];
    
    this.reel1 = new Reel(this, this.symbolsArrayReel1, this.rowCount, this.reelsPositions[0], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel2 = new Reel(this, this.symbolsArrayReel2, this.rowCount, this.reelsPositions[1], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel3 = new Reel(this, this.symbolsArrayReel3, this.rowCount, this.reelsPositions[2], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel4 = new Reel(this, this.symbolsArrayReel4, this.rowCount, this.reelsPositions[3], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel5 = new Reel(this, this.symbolsArrayReel5, this.rowCount, this.reelsPositions[4], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
  }

  create()
  {
    this.tableBackground = this.add.image(CENTERX, CENTERY, 'tableBackground');
    Align.scaleToGameW(this.tableBackground, 0.9);

    this.createReelsWithSymbols();

    this.backgroundImage = this.add.image(CENTERX, CENTERY, 'background').setOrigin(0.5, 0.5);
    Align.scaleToGameW(this.backgroundImage, 1);
    
    this.tableFrame = this.add.image(CENTERX, CENTERY, 'tableFrame');
    Align.scaleToGameW(this.tableFrame, 0.9);

    this.reel1.setReelByRowsCount(0);
  }

  update()
  {
    this.reel1.update();
    this.reel2.update();
    this.reel3.update();
    this.reel4.update();
    this.reel5.update();
  }

  createReelsWithSymbols()
  {
    this.reel1.addSymbolsToReel();
    this.reel2.addSymbolsToReel();
    this.reel3.addSymbolsToReel();
    this.reel4.addSymbolsToReel();
    this.reel5.addSymbolsToReel();
  }
}