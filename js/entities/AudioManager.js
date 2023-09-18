class AudioManager
{
  constructor(scene)
  {
    this.scene = scene;
    this.soundOn = false;
    this.defaultVolume = 0.2;

    this.reelsSpinSound = this.scene.sound.add('reelsSpins');
    this.reelStop = this.scene.sound.add('reelStop');

    this.reelsSpinSound.volume = this.soundOn ? this.defaultVolume : 0;
    this.reelStop.volume = this.soundOn ? this.defaultVolume : 0;

    this.winlineIndex = 0;
    this.winlineSounds = [];
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
    this.reelStop.play();
  }

  toggleSound()
  {
    this.soundOn = !this.soundOn;
    this.reelsSpinSound.volume = this.soundOn ? this.defaultVolume : 0;
    this.reelStop.volume = this.soundOn ? this.defaultVolume : 0;

    if(!this.soundOn)
    {
      this.winlineSounds.forEach(sound => {
        sound.stop();
      });
      this.winlineSounds = [];
    }
  }

  onSingleWinLineAnimationStart()
  {
    this.winlineIndex++;
    const sound = this.scene.sound.add('winSound' + this.winlineIndex, {volume: this.soundOn ? this.defaultVolume : 0});
    sound.play();
    this.winlineSounds.push(sound);
  }

  onWinLineAnimationEnd()
  {
    this.winlineIndex = 0;
    this.winlineSounds = [];
  }
}