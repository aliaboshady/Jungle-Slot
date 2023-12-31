class ReelsManager
{
  constructor(scene, spinOutcomeManager, winLinesManager, moneyManager, buttonManager, audioManager, spinSpeed, rowCount, reelsPositions, reelSymbolsSpacing, symbolWidth, symbolHeight, reelPositionTop)
  {
    this.scene = scene;
    this.spinOutcomeManager = spinOutcomeManager;
    this.winLinesManager = winLinesManager;
    this.moneyManager = moneyManager;
    this.buttonManager = buttonManager;
    this.audioManager = audioManager;
    this.spinSpeed = spinSpeed;
    this.rowCount = rowCount;
    this.reelsPositions = reelsPositions;
    this.reelSymbolsSpacing = reelSymbolsSpacing;
    this.symbolWidth = symbolWidth;
    this.symbolHeight = symbolHeight;
    this.reelPositionTop = reelPositionTop;

    this.shiftsMin = 25;
    this.shiftsMax = 40;
    this.additionalShiftsMin = 10;
    this.additionalShiftsMax = 15;
    this.winLineAnimationDelay = 500;
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

    do //Make sure the first reels combination is not a win
    {
      this.reels.forEach(reel => {
        reel.setReelByRowsCount(Phaser.Math.Between(0, reel.reel.length));
      });
      this.updateReelsGrid();

    }while(this.reelsGrid[0] == -1 || this.spinOutcomeManager.calculateWin(this.reelsGrid)[0].length > 0)
  }

  onClickSpin()
  {
    if(this.isReelsSpinning) return;
    this.isReelsSpinning = true;
    this.buttonManager.enableButtons(false);
    this.winLinesManager.drawWinLines(false);

    this.reels.forEach(reel => {
      reel.showAllSymbols();
    });

    let shiftRowsCount = Phaser.Math.Between(this.shiftsMin, this.shiftsMax);
    this.reels.forEach(reel => {
      reel.spinReelByRowsCount(shiftRowsCount);
      shiftRowsCount +=  Phaser.Math.Between(this.additionalShiftsMin, this.additionalShiftsMax);
    });

    this.moneyManager.deductCredits();
    this.audioManager.onSpinReelsStart();
  }

  onSpinningStop()
  {
    this.updateReelsGrid();
    this.audioManager.onSpinReelsEnd();

    const [winningLinesIndexes, payouts] = this.spinOutcomeManager.calculateWin(this.reelsGrid);

    if(winningLinesIndexes.length > 0)
    {
      this.showWinningLinesAnimation(winningLinesIndexes, payouts);
    }
    else
    {
      this.isReelsSpinning = false;
      this.buttonManager.enableButtons();
    }
  }

  onSingleReelSpinningStop()
  {
    this.audioManager.onSingleReelStopSpinning();
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

  showWinningLinesAnimation(winningLinesIndexes, payouts)
  {
    let lastI = 0;
    winningLinesIndexes.forEach((winningLinesIndex, i) => {
      this.scene.time.addEvent({delay: i * this.winLineAnimationDelay, callback: this.showWinningLine, args: [winningLinesIndex, payouts[i]], callbackScope: this, loop: false});
      lastI = i;
    });

    this.scene.time.addEvent({delay: (lastI + 2) * this.winLineAnimationDelay, callback: this.finishWinningLinesAnimation, callbackScope: this, loop: false});
  }

  showWinningLine(winningLinesIndex, payout)
  {
    this.reels.forEach(reel => {
      reel.showAllSymbols(false);
    });

    const winningLinePosY = ReelsInfo.WinLines[winningLinesIndex[0]].PositionY;
    const sequenceCount = winningLinesIndex[1];

    winningLinePosY.forEach((posY, i) => {
      if(i < sequenceCount)
      {
        this.reels[i].showOneSymbol(posY);
      }
    });

    this.updateCredits(payout);
    this.winLinesManager.drawWinLines(true, winningLinesIndex[0]);
    this.audioManager.onSingleWinLineAnimationStart();
  }

  finishWinningLinesAnimation()
  {
    this.winLinesManager.drawWinLines(false);

    this.reels.forEach(reel => {
      reel.showAllSymbols();
    });

    this.isReelsSpinning = false;
    this.buttonManager.enableButtons();
    this.audioManager.onWinLineAnimationEnd();
  }

  updateCredits(payout)
  {
    this.moneyManager.addCredits(payout)
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