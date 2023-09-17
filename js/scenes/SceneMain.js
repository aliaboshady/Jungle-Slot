class SceneMain extends Phaser.Scene
{
  constructor()
  {
    super('SceneMain');
  }

  init()
  {
    this.backgroundImage;
    this.tableBackground;
    this.tableFrame;
    this.spinButton;
    this.linesButton;
    this.disableTint = 0x6E6E6E;

    this.spinOutcomeManager = new SpinOutcomeManager(this, 3);
    this.winLinesManager = new WinLinesManager(this, [400, 580, 765, 952, 1135], [230, 380, 530], 270, 1265);
    this.reelsManager = new ReelsManager(this, this.spinOutcomeManager, this.winLinesManager, 15, 3, [400, 580, 765, 952, 1135], 150, 150, 100, 230);
}

  create()
  {
    this.tableBackground = this.add.image(CENTERX, CENTERY, 'tableBackground');
    Align.scaleToGameW(this.tableBackground, 0.9);

    this.reelsManager.createReelsWithSymbols();

    this.backgroundImage = this.add.image(CENTERX, CENTERY, 'background').setOrigin(0.5, 0.5);
    Align.scaleToGameW(this.backgroundImage, 1);
    
    this.tableFrame = this.add.image(CENTERX, CENTERY, 'tableFrame');
    Align.scaleToGameW(this.tableFrame, 0.9);
    
    this.spinButton = this.add.image(CENTERX, 685, 'spinButton').setInteractive().on('pointerdown', this.reelsManager.onClickSpin, this.reelsManager);
    Align.scaleToGameW(this.spinButton, 0.2);
    Align.scaleToGameW(this.add.image(CENTERX, 685, 'leaves'), 0.2);

    this.linesButton = this.add.image(520, 685, 'linesButton').setInteractive().on('pointerdown', () => {this.onClickButtonLines(true)}, this).on('pointerup', () => {this.onClickButtonLines(false)}, this);
    Align.scaleToGameW(this.linesButton, 0.1);
  }

  update()
  {
    this.reelsManager.update();
  }

  enableSpinButton(enbale = true)
  {
    this.spinButton.setTint(enbale ? 0xFFFFFF : this.disableTint);
  }

  onClickButtonLines(down)
  {
    this.winLinesManager.drawWinLines(down);
  }
}