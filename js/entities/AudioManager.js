class AudioManager
{
  constructor(scene)
  {
    this.scene = scene;
    this.soundOn = true;

    this.reelsSpinSound = this.scene.sound.add('reelsSpins');
  }

  onSpinReelsStart()
  {
    this.reelsSpinSound.play();
  }

  onSpinReelsEnd()
  {
    this.reelsSpinSound.stop();
  }

  onSingleReelStopSpinning()
  {

  }

  toggleSound()
  {
    this.soundOn = !this.soundOn;
    this.reelsSpinSound.volume = this.soundOn ? 1 : 0;
  }
}