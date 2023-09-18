class MoneyManager
{
  constructor(scene)
  {
    this.bet = ReelsInfo.InitialBet;
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
    this.won += payout;
    this.credits += payout;
    console.log('Credits: ' + this.credits);
  }

  deductCredits()
  {
    this.won = 0;
    this.credits -= this.bet;
    console.log('Credits: ' + this.credits);
  }
}