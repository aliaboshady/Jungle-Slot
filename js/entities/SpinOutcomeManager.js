class SpinOutcomeManager
{
  constructor(scene, moneyManager, consecutiveSymbolCount)
  {
    this.moneyManager = moneyManager;
    this.consecutiveSymbolCount = consecutiveSymbolCount;
    this.winLines = [];
    this.loadWinLines();
  }

  loadWinLines()
  {
    ReelsInfo.WinLines.forEach(winLineObject => {
      this.winLines.push(winLineObject.PositionY);
    });
  }

  calculateWin(reelsGrid)
  {
    let winningLinesIndexes = [];
    this.winLines.forEach((winLine, winLineIndex) => {
      const firstSymbol = reelsGrid[winLine[0]][0];
      let foundSymbolCount = 1;

      for (let i = 1; i < reelsGrid[0].length; i++) {
        const currentSymbol = reelsGrid[winLine[i]][i];
        if(firstSymbol == currentSymbol) foundSymbolCount++;
        else break;
      }

      if(foundSymbolCount >= this.consecutiveSymbolCount)
      {
        winningLinesIndexes.push([winLineIndex, foundSymbolCount, firstSymbol]);
      }
    });

    if(winningLinesIndexes.length > 0)
    {
      console.log('\nWinning Lines Indexes:');
      console.log(winningLinesIndexes);
    }

    const payouts = this.moneyManager.calculatePayouts(winningLinesIndexes);
    return [winningLinesIndexes, payouts];
  }
}