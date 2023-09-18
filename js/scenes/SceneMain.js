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
    this.reelsPositionsX = [400, 580, 765, 952, 1135];
    this.reelsPositionsY = [230, 380, 530];

    this.infoPage = new InfoPage(this, CENTERX, CENTERY, 'infoPage');
    this.buttonManager = new ButtonsManager(this, this.infoPage);
    this.moneyManager = new MoneyManager(this, this.buttonManager);
    this.spinOutcomeManager = new SpinOutcomeManager(this, this.moneyManager, 3);
    this.winLinesManager = new WinLinesManager(this, this.reelsPositionsX, this.reelsPositionsY, 270, 1265);
    this.reelsManager = new ReelsManager(this, this.spinOutcomeManager, this.winLinesManager, this.moneyManager, this.buttonManager, 15, 3, this.reelsPositionsX, 150, 150, 100, 230);
  

    this.buttonManager.setMoneyManager(this.moneyManager);
    this.buttonManager.setWinLinesManager(this.winLinesManager);
  }

  create()
  {
    this.tableBackground = this.add.image(CENTERX, CENTERY, 'tableBackground').setDepth(0);
    Align.scaleToGameW(this.tableBackground, 0.9);

    this.reelsManager.createReelsWithSymbols();

    this.backgroundImage = this.add.image(CENTERX, CENTERY, 'background').setOrigin(0.5, 0.5).setDepth(1);
    Align.scaleToGameW(this.backgroundImage, 1);
        
    this.tableFrame = this.add.image(CENTERX, CENTERY, 'tableFrame').setDepth(2);
    Align.scaleToGameW(this.tableFrame, 0.9);
    
    this.logo = this.add.image(CENTERX, 90, 'logo').setDepth(2);
    Align.scaleToGameW(this.logo, 0.35);
    
    this.buttonManager.addButtons();
  }

  update()
  {
    this.reelsManager.update();
  }
}