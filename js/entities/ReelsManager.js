class ReelsManager
{
  constructor(scene, spinOutcomeManager, spinSpeed, rowCount, reelsPositions, reelSymbolsSpacing, symbolWidth, symbolHeight, reelPositionTop)
  {
    this.scene = scene;
    this.spinOutcomeManager = spinOutcomeManager;
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

    this.reels = [];
    for (let i = 0; i < reelsPositions.length; i++) {
      const reel = new Reel(this.scene, this, ReelsInfo.Reels['Reel' + (i + 1)], this.rowCount, this.reelsPositions[i], this.reelSymbolsSpacing, this.symbolWidth, this.symbolHeight, this.reelPositionTop, this.spinSpeed);
      if(i == reelsPositions.length - 1) reel.isLastReel = true;
      this.reels.push(reel);
    }
  }

  update()
  {
    this.reels.forEach(reel => {
      reel.update();
    });
  }

  createReelsWithSymbols()
  {
    this.reels.forEach(reel => {
      reel.addSymbolsToReel().setReelByRowsCount(Phaser.Math.Between(0, reel.reel.length));
    });
    this.updateReelsGrid();
  }

  onClickSpin()
  {
    if(this.isReelsSpinning) return;
    this.isReelsSpinning = true;
    this.scene.enableSpinButton(false);

    let shiftRowsCount = 25;
    this.reels.forEach(reel => {
      reel.spinReelByRowsCount(shiftRowsCount);
      shiftRowsCount += 10;
    });
  }

  updateReelsGrid()
  {
    this.reels.forEach((reel, i) => {
      this.fillReelGridColumn(reel.getRowSymbols(), i);
    });

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
    this.scene.enableSpinButton();
    this.updateReelsGrid();
    this.spinOutcomeManager.calculateWin(this.reelsGrid);
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

    console.log('\nReels Grid:');
    console.log(tempReelsGrid);
  }
}