class ReelsManager
{
  constructor(scene, spinSpeed, rowCount, reelsPositions, reelSymbolsSpacing, symbolWidth, symbolHeight, reelPositionTop)
  {
    this.scene = scene;
    this.spinSpeed = spinSpeed;
    this.rowCount = rowCount;
    this.reelsPositions = reelsPositions;
    this.reelSymbolsSpacing = reelSymbolsSpacing;
    this.symbolWidth = symbolWidth;
    this.symbolHeight = symbolHeight;
    this.reelPositionTop = reelPositionTop;

    this.isReelsSpinning = false;
    this.reelsGrid = 
    [ 
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1]
    ]

    this.reel1 = new Reel(this.scene, this, ReelsInfo.Reel1, this.rowCount, this.reelsPositions[0], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel2 = new Reel(this.scene, this, ReelsInfo.Reel2, this.rowCount, this.reelsPositions[1], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel3 = new Reel(this.scene, this, ReelsInfo.Reel3, this.rowCount, this.reelsPositions[2], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel4 = new Reel(this.scene, this, ReelsInfo.Reel4, this.rowCount, this.reelsPositions[3], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
    this.reel5 = new Reel(this.scene, this, ReelsInfo.Reel5, this.rowCount, this.reelsPositions[4], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed, true);
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
    this.reel1.addSymbolsToReel().setReelByRowsCount(Phaser.Math.Between(0, this.reel1.reel.length));
    this.reel2.addSymbolsToReel().setReelByRowsCount(Phaser.Math.Between(0, this.reel2.reel.length));
    this.reel3.addSymbolsToReel().setReelByRowsCount(Phaser.Math.Between(0, this.reel3.reel.length));
    this.reel4.addSymbolsToReel().setReelByRowsCount(Phaser.Math.Between(0, this.reel4.reel.length));
    this.reel5.addSymbolsToReel().setReelByRowsCount(Phaser.Math.Between(0, this.reel5.reel.length));
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
    this.printReelGrid();
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

  printReelGrid()
  {
    let tempReelsGrid = [];

    for (let i = 0; i < this.reelsGrid.length; i++) {
      tempReelsGrid.push([]);
      for (let j = 0; j < this.reelsGrid[0].length; j++) {
        tempReelsGrid[i].push(ReelsInfo.AllReelSymbols[this.reelsGrid[i][j]]);
      }
    }

    console.log(tempReelsGrid);
  }
}