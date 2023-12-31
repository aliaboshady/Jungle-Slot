class WinLine
{
  constructor(scene, reelsPositionsX, reelsPositionsY, edgeXLeft, edgeXRight, winLineIndex)
  {
    this.scene = scene;
    this.reelsPositionsX = reelsPositionsX; // [400, 580, 765, 952, 1135]
    this.reelsPositionsY = reelsPositionsY; // [230, 380, 530]
    this.winLinesPositionsY = ReelsInfo.WinLines[winLineIndex].PositionY; // [0, 0, 0, 0, 0] -> 230, 230, 230, 230, 230
    this.winLineColor = ReelsInfo.WinLines[winLineIndex].Color;
    this.OffsetYTop = ReelsInfo.WinLines[winLineIndex].OffsetYTop;
    this.OffsetYMid = ReelsInfo.WinLines[winLineIndex].OffsetYMid;
    this.OffsetYBot = ReelsInfo.WinLines[winLineIndex].OffsetYBot;
    this.edgeXLeft = edgeXLeft
    this.edgeXRight = edgeXRight

    this.graphics;
    this.thickness = 7;
  }

  drawWinLine(visible = true)
  {
    if(this.graphics) this.graphics.clear();
    const offsetYEdgeLeft = this.winLinesPositionsY[0] == 0 ? this.OffsetYTop : this.OffsetYBot;
    this.graphics = this.scene.add.graphics().lineStyle(this.thickness, this.winLineColor);
    this.graphics.moveTo(this.edgeXLeft, this.reelsPositionsY[this.winLinesPositionsY[0]] + offsetYEdgeLeft);

    for (let i = 0; i < this.reelsPositionsX.length; i++) {
      let offsetY = 0;
      if(this.winLinesPositionsY[i] == 0) offsetY = this.OffsetYTop;
      else if(this.winLinesPositionsY[i] == 1) offsetY = this.OffsetYMid;
      else if(this.winLinesPositionsY[i] == 2) offsetY = this.OffsetYBot;
      this.graphics.lineTo(this.reelsPositionsX[i], this.reelsPositionsY[this.winLinesPositionsY[i]] + offsetY);
    }

    const offsetYEdgeRight = this.winLinesPositionsY[0] == 0 ? this.OffsetYBot : this.OffsetYTop;
    this.graphics.lineTo(this.edgeXRight, this.reelsPositionsY[this.winLinesPositionsY[this.reelsPositionsX.length - 1]] + offsetYEdgeRight);
    this.graphics.strokePath();

    visible ? this.graphics.alpha = 1 : this.graphics.alpha =  0;
  }
}