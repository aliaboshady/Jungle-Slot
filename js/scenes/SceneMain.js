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

    this.reelsManager = new ReelsManager(this, 15, 3, [400, 580, 765, 952, 1135], 150, 150, 100, 230);
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
  }

  update()
  {
    this.reelsManager.update();
  }
}