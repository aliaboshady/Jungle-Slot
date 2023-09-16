class Reel
{
  constructor(scene, symbolsArray, rowCount, reelPositionX, reelSymbolsSpacing, symbolWidth, symbolHeight, reelPositionTop)
  {
    this.scene = scene;
    this.symbolsArray = symbolsArray;
    this.rowCount = rowCount;
    this.reelPositionX = reelPositionX;
    this.reelSymbolsSpacing = reelSymbolsSpacing;
    this.symbolWidth = symbolWidth;
    this.symbolHeight = symbolHeight;

    this.reelPositionTop = reelPositionTop;
    this.reelPositionBottom = this.reelPositionTop + 2 * this.reelSymbolsSpacing;
    this.reelPositionCutoff = this.reelPositionBottom + 2 * this.reelSymbolsSpacing;

    this.reel = [];
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
    return this.reelPositionTop - this.reelSymbolsSpacing * (this.symbolsArray.length - this.rowCount);
  }

  spinReel(spinSpeed)
  {
    this.reel.forEach(symbolImage => {
      symbolImage.y += spinSpeed;
      if(symbolImage.y >= this.reelPositionCutoff)
      {
        symbolImage.y = this.reelPositionCutoff - this.reelSymbolsSpacing * this.reel.length;
      }
    });
  }
}