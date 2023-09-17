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

  drawWinLines(visible = true, winLineIndex = -1)
  {
    this.winLines.forEach(winLine => {
      winLine.drawWinLine(false);
    });
    if(!visible) return;

    if(winLineIndex == -1)
    {
      this.winLines.forEach(winLine => {
        winLine.drawWinLine(visible);
      });
    }
    else
    {
      this.winLines[winLineIndex].drawWinLine(visible);
    }
  }
}