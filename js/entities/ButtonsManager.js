class ButtonsManager
{
  constructor(scene, moneyManager)
  {
    this.scene = scene;
    this.moneyManager = moneyManager;
  }

  addButtons()
  {
    this.scene.spinButton = this.scene.add.image(CENTERX, 685, 'spinButton').setInteractive().on('pointerdown', this.scene.reelsManager.onClickSpin, this.scene.reelsManager);
    this.scene.spinButton.setDepth(2);
    Align.scaleToGameW(this.scene.spinButton, 0.2);
    Align.scaleToGameW(this.scene.add.image(CENTERX, 685, 'leaves').setDepth(2), 0.2);

    this.scene.betButton = this.scene.add.image(370, 685, 'betButton').setInteractive().on('pointerdown', () => {}, this.scene);
    this.scene.betButton.setDepth(3);
    Align.scaleToGameW(this.scene.betButton, 0.1);

    this.scene.linesButton = this.scene.add.image(530, 685, 'linesButton').setInteractive().on('pointerdown', () => {this.scene.onClickButtonLines(true)}, this.scene).on('pointerup', () => {this.scene.onClickButtonLines(false)}, this.scene);
    this.scene.linesButton.setDepth(3);
    Align.scaleToGameW(this.scene.linesButton, 0.1);

    this.scene.autoStartButton = this.scene.add.image(1000, 685, 'autoStartButton').setInteractive().on('pointerdown', () => {}, this.scene);
    this.scene.autoStartButton.setDepth(3);
    Align.scaleToGameW(this.scene.autoStartButton, 0.1);

    this.scene.creditsButton = this.scene.add.image(1160, 685, 'creditsButton');
    this.scene.creditsButton.setDepth(3);
    Align.scaleToGameW(this.scene.creditsButton, 0.1);

    this.scene.wonButton = this.scene.add.image(1320, 685, 'wonButton');
    this.scene.wonButton.setDepth(3);
    Align.scaleToGameW(this.scene.wonButton, 0.1);
  }
}