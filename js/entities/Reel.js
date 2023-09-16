class Reel
{
  constructor(scene, symbolsIndexArray, rowCount, reelPositionX, reelSymbolsSpacing, symbolWidth, symbolHeight, reelPositionTop, spinSpeed, isLastReel = false)
  {
    this.scene = scene;
    this.symbolsIndexArray = symbolsIndexArray;
    this.rowCount = rowCount;
    this.reelPositionX = reelPositionX;
    this.reelSymbolsSpacing = reelSymbolsSpacing;
    this.symbolWidth = symbolWidth;
    this.symbolHeight = symbolHeight;
    this.spinSpeed = spinSpeed;
    this.isLastReel = isLastReel;

    this.reelPositionTop = reelPositionTop;
    this.reelPositionBottom = this.reelPositionTop + 2 * this.reelSymbolsSpacing;
    this.reelPositionCutoff = this.reelPositionBottom + 2 * this.reelSymbolsSpacing;
    this.reelPositionOneBelowBottom = this.reelPositionBottom + this.reelSymbolsSpacing;

    this.reel = [];
    this.spinRowsCountRemaining = 0;
    this.setRowsCountRemaining = 0;
  }

  update()
  {
    if(this.spinRowsCountRemaining > 0)
    {
      this.spinReel();
    }
  }

  addSymbolsToReel()
  {
    // Add symbol so that there is only one below the last row
    this.symbolsIndexArray.forEach((symbolIndex, i) => {
      const symbolName = ReelsInfo.AllReelSymbols[symbolIndex];
      const symbolImage = this.scene.add.image(this.reelPositionX, i * this.reelSymbolsSpacing + this.getReelPositionAllSymbolsUp(), symbolName).setDisplaySize(this.symbolWidth, this.symbolHeight);
      this.reel.push(symbolImage);
    });
  }

  getReelPositionAllSymbolsUp()
  {
    return this.reelPositionTop - this.reelSymbolsSpacing * (this.symbolsIndexArray.length - this.rowCount - 1);
  }

  spinReelByRowsCount(shiftRowsCount)
  {
    this.spinRowsCountRemaining = shiftRowsCount;
  }

  spinReel()
  {
    this.reel.forEach(symbolImage => {
      symbolImage.y += this.spinSpeed;
      if(symbolImage.y >= this.reelPositionCutoff)
      {
        symbolImage.y = this.reelPositionCutoff - this.reelSymbolsSpacing * this.reel.length;
        this.spinRowsCountRemaining--;

        if(this.spinRowsCountRemaining <= 0 && this.isLastReel)
        {
          this.scene.onSpinningStop();
        }
      }
    });
  }

  setReelByRowsCount(shiftRowsCount)
  {
    this.setRowsCountRemaining = shiftRowsCount;

    while (this.setRowsCountRemaining > 0) {
      this.reel.forEach(symbolImage => {
        symbolImage.y += this.spinSpeed;
        if(symbolImage.y >= this.reelPositionCutoff)
        {
          symbolImage.y = this.reelPositionCutoff - this.reelSymbolsSpacing * this.reel.length;
          this.setRowsCountRemaining--;
        }
      });
    }
  }
}