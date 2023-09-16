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
    
    this.reel1RenderTexture;
    this.reel2RenderTexture;
    this.reel3RenderTexture;
    this.reel4RenderTexture;
    this.reel5RenderTexture;

    this.reelSymbols1;
    this.reelSymbols2;
    this.reelSymbols3;
    this.reelSymbols4;
    this.reelSymbols5;
  }

  preload()
  {
    
  }

  create()
  {
    this.backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
    Align.scaleToGameW(this.backgroundImage, 1);
    
    this.tableBackground = this.add.image(CENTERX, CENTERY, 'tableBackground');
    Align.scaleToGameW(this.tableBackground, 0.9);

    this.tableFrame = this.add.image(CENTERX, CENTERY, 'tableFrame');
    Align.scaleToGameW(this.tableFrame, 0.9);
    
    this.createReelsWithSymbols();
  }

  createReelsWithSymbols()
  {
    this.reel1RenderTexture = this.add.renderTexture(400, 460, 230, 800).setDisplaySize(180, 580).setVisible(false);
    this.reel1RenderTexture.draw('Cherry', 0, 0);
    this.reel1RenderTexture.draw('Grape', 0, 200);
    this.reel1RenderTexture.draw('Watermelon', 0, 400);
    this.reel1RenderTexture.draw('Lemon', 0, 600);
    //this.reel1RenderTexture.saveTexture('reelSymbols1');

    //this.reelSymbols1 = this.reel1RenderTexture.saveTexture('reelSymbols1');

    this.reel2RenderTexture = this.add.renderTexture(580, CENTERY, 230, 800).setDisplaySize(180, 580).setVisible(false);
    this.reel2RenderTexture.draw('Cherry', 0, 0);
    this.reel2RenderTexture.draw('Grape', 0, 200);
    this.reel2RenderTexture.draw('Watermelon', 0, 400);
    this.reel2RenderTexture.draw('Lemon', 0, 600);
    //this.reelSymbols2 = this.reel2RenderTexture.saveTexture('reelSymbols2');

    this.reel3RenderTexture = this.add.renderTexture(765, CENTERY, 230, 800).setDisplaySize(180, 580).setVisible(false);
    this.reel3RenderTexture.draw('Cherry', 0, 0);
    this.reel3RenderTexture.draw('Grape', 0, 200);
    this.reel3RenderTexture.draw('Watermelon', 0, 400);
    this.reel3RenderTexture.draw('Lemon', 0, 600);
    //this.reelSymbols3 = this.reel3RenderTexture.saveTexture('reelSymbols3');

    this.reel4RenderTexture = this.add.renderTexture(952, CENTERY, 230, 800).setDisplaySize(180, 580).setVisible(false);
    this.reel4RenderTexture.draw('Cherry', 0, 0);
    this.reel4RenderTexture.draw('Grape', 0, 200);
    this.reel4RenderTexture.draw('Watermelon', 0, 400);
    this.reel4RenderTexture.draw('Lemon', 0, 600);
    //this.reelSymbols4 = this.reel4RenderTexture.saveTexture('reelSymbols4');

    this.reel5RenderTexture = this.add.renderTexture(1135, CENTERY, 230, 800).setDisplaySize(180, 580).setVisible(false);
    this.reel5RenderTexture.draw('Cherry', 0, 0);
    this.reel5RenderTexture.draw('Grape', 0, 200);
    this.reel5RenderTexture.draw('Watermelon', 0, 400);
    this.reel5RenderTexture.draw('Lemon', 0, 600);
    //this.reelSymbols5 = this.reel5RenderTexture.saveTexture('reelSymbols5');
  }
}