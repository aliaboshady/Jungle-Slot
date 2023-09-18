class InfoPage extends Phaser.GameObjects.Sprite
{
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey);
    scene.add.existing(this);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.setDepth(2)
    this.setVisible(false);
    Align.scaleToGameW(this, 0.7);
  }

  toggleInfoPage()
  {
    this.setVisible(!this.visible);
    return this.visible;
  }
}