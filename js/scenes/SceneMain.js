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

    this.symbolsArrayReel1 = ['Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon'];
    this.symbolsArrayReel2 = ['Cherry', 'Grape', 'Grape', 'Watermelon', 'Cherry', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon'];
    this.symbolsArrayReel3 = ['Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry'];
    this.symbolsArrayReel4 = ['Cherry', 'Watermelon', 'Grape', 'Watermelon', 'Cherry', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Lemon'];
    this.symbolsArrayReel5 = ['Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Cherry', 'Grape', 'Watermelon', 'Lemon', 'Cherry', 'Grape', 'Watermelon'];
    
    
    this.reelPositionTop = 230;
    this.reelPositionBottom = this.reelPositionTop + 2 * this.reelSymbolsSpacing;
    this.reelPositionCutoff = this.reelPositionBottom + 2 * this.reelSymbolsSpacing;

    this.reel1 = [];
    this.reel2 = [];
    this.reel3 = [];
    this.reel4 = [];
    this.reel5 = [];
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
  }

  update()
  {
    this.spinReel(this.reel1);
    this.spinReel(this.reel2);
    this.spinReel(this.reel3);
    this.spinReel(this.reel4);
    this.spinReel(this.reel5);
  }

  createReelsWithSymbols()
  {
    this.addSymbolsToReel(this.reel1, this.symbolsArrayReel1, this.reelsPositions[0], this.getReelPositionAllSymbolsUp(this.symbolsArrayReel1));
    this.addSymbolsToReel(this.reel2, this.symbolsArrayReel2, this.reelsPositions[1], this.getReelPositionAllSymbolsUp(this.symbolsArrayReel2));
    this.addSymbolsToReel(this.reel3, this.symbolsArrayReel3, this.reelsPositions[2], this.getReelPositionAllSymbolsUp(this.symbolsArrayReel3));
    this.addSymbolsToReel(this.reel4, this.symbolsArrayReel4, this.reelsPositions[3], this.getReelPositionAllSymbolsUp(this.symbolsArrayReel4));
    this.addSymbolsToReel(this.reel5, this.symbolsArrayReel5, this.reelsPositions[4], this.getReelPositionAllSymbolsUp(this.symbolsArrayReel5));
  }

  spinReel(reel)
  {
    reel.forEach(symbolImage => {
      symbolImage.y += this.spinSpeed;
      if(symbolImage.y >= this.reelPositionCutoff)
      {
        symbolImage.y = this.reelPositionCutoff - this.reelSymbolsSpacing * reel.length;
      }
    });
  }

  addSymbolsToReel(reelArray, symbolsArrayReel, x, y)
  {
    symbolsArrayReel.forEach((symbolName, i) => {
      const symbolImage = this.add.image(x, i * this.reelSymbolsSpacing + y, symbolName).setDisplaySize(this.symbolWidth, this.symbolHeight);
      reelArray.push(symbolImage);
    });
  }

  getReelPositionAllSymbolsUp(symbolsArrayReel)
  {
    return this.reelPositionTop - this.reelSymbolsSpacing * (symbolsArrayReel.length - this.rowCount);
  }
}