class Reel
{
  constructor(scene, symbolsArray, rowCount, reelPositionX, reelSymbolsSpacing, symbolWidth, symbolHeight, reelPositionTop, spinSpeed)
  {
    this.scene = scene;
    this.symbolsArray = symbolsArray;
    this.rowCount = rowCount;
    this.reelPositionX = reelPositionX;
    this.reelSymbolsSpacing = reelSymbolsSpacing;
    this.symbolWidth = symbolWidth;
    this.symbolHeight = symbolHeight;
    this.spinSpeed = spinSpeed;

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
    this.symbolsArray.forEach((symbolName, i) => {
      const symbolImage = this.scene.add.image(this.reelPositionX, i * this.reelSymbolsSpacing + this.getReelPositionAllSymbolsUp(), symbolName).setDisplaySize(this.symbolWidth, this.symbolHeight);
      this.reel.push(symbolImage);
    });
  }

  getReelPositionAllSymbolsUp()
  {
    return this.reelPositionTop - this.reelSymbolsSpacing * (this.symbolsArray.length - this.rowCount - 1);
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