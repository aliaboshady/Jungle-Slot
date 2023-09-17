class WinLinesManager
{
  constructor(scene, reelsPositionsX, reelsPositionsY, edgeXLeft, edgeXRight)
  {
    this.winLines = [];

    for (let i = 0; i < ReelsInfo.WinLines.length; i++) {
      const winLine = new WinLine(scene, reelsPositionsX, reelsPositionsY, edgeXLeft, edgeXRight, i);
      this.winLines.push(winLine);
    }
  }

  drawWinLines()
  {
    this.winLines.forEach(winLine => {
      winLine.drawWinLine();
    });
  }
}