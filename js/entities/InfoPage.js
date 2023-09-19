class InfoPage extends Phaser.GameObjects.Sprite
{
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey);
    this.scene.add.existing(this);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.setDepth(2)
    this.setVisible(false);
    Align.scaleToGameW(this, 0.7);

    this.bet = 0;
    this.payoutsIndexes = [0, 4, 6, 7, 8, 9];
    this.texts = [];
    this.textPositions =
    [
      //    3              4             5
      [[475,  279],   [475,  300],  [475,  320]],  // A, K, Q, J
      [[743,  279],   [743,  300],  [743,  320]],  // Cherry, Grape
      [[1008, 279],   [1008, 300],  [1008, 320]],  // Lemon
      [[475,  479],   [475,  498],  [475,  518]],  // Watermelon
      [[743,  479],   [743,  498],  [743,  518]],  // Gem
      [[1008, 479],   [1008, 498],  [1008, 518]]   // Coin
    ];
  }

  setBet(bet)
  {
    this.bet = bet;
  }

  createTexts()
  {
    for (let i = 0; i < this.textPositions.length; i++) {
      for (let j = 0; j < this.textPositions[0].length; j++) {
        const payout = (ReelsInfo.Payouts[this.payoutsIndexes[i]][j] / 100) * (this.bet / 100);
        const pos = this.textPositions[i][j];
        const text = this.scene.add.text(pos[0], pos[1], '£' + payout.toFixed(2), {fontSize: 20, fontFamily: 'Lilita One'}).setDepth(3).setVisible(this.visible);
        this.texts.push(text);
      }
    }
  }

  removeText()
  {
    this.texts.forEach(text => {
      text.destroy();
    });

    this.texts = [];
  }

  updateText()
  {
    this.removeText();
    this.createTexts();
  }

  toggleInfoPage()
  {
    this.setVisible(!this.visible);
    this.visible ? this.createTexts() : this.removeText();
    return this.visible;
  }

  pageIsOpen()
  {
    return this.visible;
  }
}