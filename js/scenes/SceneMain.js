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
    this.spinButton;

    this.spinSpeed = 30;
    this.rowCount = 3;
    this.reelsPositions = [400, 580, 765, 952, 1135];
    this.reelSymbolsSpacing = 150;
    this.symbolWidth = 150;
    this.symbolHeight = 100;
    this.reelPositionTop = 230;

    this.isReelsSpinning = false;
    this.reelsGrid = 
    [ 
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1]
    ]

    this.reel1 = new Reel(this, ReelsInfo.Reel1, this.rowCount, this.reelsPositions[0], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel2 = new Reel(this, ReelsInfo.Reel2, this.rowCount, this.reelsPositions[1], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel3 = new Reel(this, ReelsInfo.Reel3, this.rowCount, this.reelsPositions[2], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel4 = new Reel(this, ReelsInfo.Reel4, this.rowCount, this.reelsPositions[3], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel5 = new Reel(this, ReelsInfo.Reel5, this.rowCount, this.reelsPositions[4], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed, true);
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
    
    this.spinButton = this.add.image(CENTERX, 685, 'spinButton').setInteractive().on('pointerdown', this.onClickSpin, this);
    Align.scaleToGameW(this.spinButton, 0.2);
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
    this.updateReelsGrid();
  }

  onClickSpin()
  {
    if(this.isReelsSpinning) return;
    this.isReelsSpinning = true;

    this.reel1.spinReelByRowsCount(25);
    this.reel2.spinReelByRowsCount(35);
    this.reel3.spinReelByRowsCount(45);
    this.reel4.spinReelByRowsCount(55);
    this.reel5.spinReelByRowsCount(65);
  }

  updateReelsGrid()
  {
    this.fillReelGridColumn(this.reel1.getRowSymbols(), 0);
    this.fillReelGridColumn(this.reel2.getRowSymbols(), 1);
    this.fillReelGridColumn(this.reel3.getRowSymbols(), 2);
    this.fillReelGridColumn(this.reel4.getRowSymbols(), 3);
    this.fillReelGridColumn(this.reel5.getRowSymbols(), 4);
    console.log(this.reelsGrid);
  }

  fillReelGridColumn(reelRowSymbols, j)
  {
    for (let i = 0; i < this.rowCount; i++) {
      this.reelsGrid[i][j] = reelRowSymbols[i];
    }
  }

  onSpinningStop()
  {
    this.isReelsSpinning = false;
    this.updateReelsGrid();
  }
}