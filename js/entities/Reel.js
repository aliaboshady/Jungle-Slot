class Reel
{
  constructor(scene, reelsManager, symbolsIndexArray, rowCount, reelPositionX, reelSymbolsSpacing, symbolWidth, symbolHeight, reelPositionTop, spinSpeed, isLastReel = false)
  {
    this.scene = scene;
    this.reelsManager = reelsManager;
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
    this.topRowSymbolIndex = this.symbolsIndexArray.length - 4;
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

    return this;
  }

  getReelPositionAllSymbolsUp()
  {
    return this.reelPositionTop - this.reelSymbolsSpacing * (this.symbolsIndexArray.length - this.rowCount - 1);
  }

  updateCurrentShownSymbols()
  {
    this.topRowSymbolIndex--;
    if(this.topRowSymbolIndex < 0)
    {
      this.topRowSymbolIndex = this.symbolsIndexArray.length - 1;
    }
  }

  getRowSymbols()
  {
    let symbolIndexTop = this.topRowSymbolIndex;
    let symbolIndexMid = symbolIndexTop == this.symbolsIndexArray.length - 1 ? 0 : symbolIndexTop + 1;
    let symbolIndexBot = symbolIndexTop == this.symbolsIndexArray.length - 1 ? 1 : symbolIndexTop + 2;
    symbolIndexBot = symbolIndexTop == this.symbolsIndexArray.length - 2 ? 0 : symbolIndexBot;
    return [this.symbolsIndexArray[symbolIndexTop], this.symbolsIndexArray[symbolIndexMid], this.symbolsIndexArray[symbolIndexBot]];
  }

  getCurrentSymbolsIndexes()
  {
    let symbolIndexTop = this.topRowSymbolIndex;
    let symbolIndexMid = symbolIndexTop == this.symbolsIndexArray.length - 1 ? 0 : symbolIndexTop + 1;
    let symbolIndexBot = symbolIndexTop == this.symbolsIndexArray.length - 1 ? 1 : symbolIndexTop + 2;
    symbolIndexBot = symbolIndexTop == this.symbolsIndexArray.length - 2 ? 0 : symbolIndexBot;
    return [symbolIndexTop, symbolIndexMid, symbolIndexBot];
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

        this.updateCurrentShownSymbols();

        if(this.spinRowsCountRemaining <= 0 && this.isLastReel)
        {
          this.reelsManager.onSpinningStop();
        }
      }
    });
  }

  setReelByRowsCount(shiftRowsCount)
  {
    while (shiftRowsCount > 0) {
      this.reel.forEach(symbolImage => {
        symbolImage.y += this.spinSpeed;
        if(symbolImage.y >= this.reelPositionCutoff)
        {
          symbolImage.y = this.reelPositionCutoff - this.reelSymbolsSpacing * this.reel.length;
          shiftRowsCount--;

          this.updateCurrentShownSymbols();
        }
      });
    }
  }

  showOneSymbol(symbolIndex)
  {
    this.reel.forEach(symbolImage => {
      symbolImage.alpha = 0.2;
    });
    
    const symbolIndexTop = this.getCurrentSymbolsIndexes()[0];
    let symbolReelIndexToShow = symbolIndexTop + symbolIndex;

    if(symbolReelIndexToShow >= this.reel.length)
    {
      symbolReelIndexToShow -= this.reel.length;
    }
    
    this.reel[symbolReelIndexToShow].alpha = 1;
  }

  showAllSymbols(showAll = true)
  {
    this.reel.forEach(symbolImage => {
      symbolImage.alpha = showAll ? 1 : 0.2;
    });
  }
}