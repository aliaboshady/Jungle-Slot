class MoneyManager
{
  constructor(scene, buttonManager)
  {
    this.buttonManager = buttonManager;
    this.betIndex = ReelsInfo.InitialBetIndex;
    this.bet = ReelsInfo.Bets[this.betIndex];
    this.credits = ReelsInfo.InitialCredits;
    this.won = 0;
  }

  calculatePayouts(winningLinesIndexes)
  {
    let payouts = [];
    winningLinesIndexes.forEach(winningLinesIndex => {
      const payout = ReelsInfo.GetPayouts(winningLinesIndex[2], winningLinesIndex[1]);
      payouts.push(payout);
    });
    
    if(payouts.length > 0)
    {
      console.log('\nPayouts:');
      console.log(payouts);
    }

    return payouts;
  }

  addCredits(payout)
  {
    this.won += payout * (this.bet / 100);
    this.credits += payout * (this.bet / 100);
    this.buttonManager.updateWon(this.won);
    this.buttonManager.updateCredits(this.credits);
  }

  deductCredits()
  {
    this.won = 0;
    this.credits -= this.bet;
    this.buttonManager.updateWon(this.won);
    this.buttonManager.updateCredits(this.credits);
  }

  updateBet()
  {
    this.betIndex++;
    if(this.betIndex >= ReelsInfo.Bets.length) this.betIndex = 0;
    this.bet = ReelsInfo.Bets[this.betIndex];
    return this.bet;
  }
}