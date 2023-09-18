class MoneyManager
{
  constructor(scene)
  {

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
}