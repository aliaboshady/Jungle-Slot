class ReelsInfo
{
  //                        0    1    2    3      4         5        6          7          8      9
  static AllReelSymbols = ['J', 'Q', 'K', 'A', 'Cherry', 'Grape', 'Lemon', 'Watermelon', 'Gem', 'Coin'];

  static Bets = [10, 25, 50, 100, 200];
  static InitialBetIndex = 3;
  static InitialCredits = 500;

  static Reels =
  {
    Reel1: [2, 0, 2, 1, 2, 2, 2, 2, 0, 2, 2, 1, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2],
    Reel2: [2, 1, 2, 2, 2, 0, 2, 2, 1, 2, 2, 0, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 2, 1],
    Reel3: [2, 0, 2, 2, 2, 1, 2, 2, 1, 0, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 1, 2, 2],
    Reel4: [0, 2, 2, 2, 1, 2, 2, 0, 2, 2, 1, 2, 2, 2, 0, 1, 2, 2, 2, 2, 2, 0, 2, 1, 2],
    Reel5: [2, 2, 1, 2, 2, 0, 2, 1, 2, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 0, 1, 2, 2, 2, 2]
  };

  static Payouts =
  [
    [20,  100,  200],  // 'J'
    [20,  100,  200],  // 'Q'
    [20,  100,  200],  // 'K'
    [20,  100,  200],  // 'A'
    [100, 200,  1000], // 'Cherry'
    [100, 200,  1000], // 'Grape'
    [200, 500,  2000], // 'Lemon'
    [200, 1000, 2500], // 'Watermelon'
    [200, 1000, 3000], // 'Gem'
    [500, 2000, 4000]  // 'Coin'
  ];

  static WinLines =
  [
    {Name: 'Red',     PositionY: [0, 0, 0, 0, 0],   Color: 0xFF0000,    OffsetYTop: -20, OffsetYMid: 0,    OffsetYBot: -20},
    {Name: 'Orange',  PositionY: [0, 1, 1, 1, 2],   Color: 0xFF8103,    OffsetYTop: 20,  OffsetYMid: -20,  OffsetYBot: -20},
    {Name: 'Yellow',  PositionY: [0, 0, 1, 2, 2],   Color: 0xFFFF00,    OffsetYTop: 0,   OffsetYMid: 0,    OffsetYBot: 0},
    {Name: 'Green',   PositionY: [1, 1, 1, 1, 1],   Color: 0x00FF00,    OffsetYTop: 0,   OffsetYMid: 0,    OffsetYBot: 0},
    {Name: 'Purple',  PositionY: [2, 2, 1, 0, 0],   Color: 0xB303FF,    OffsetYTop: 0,   OffsetYMid: 0,    OffsetYBot: 0},
    {Name: 'Pink',    PositionY: [2, 1, 1, 1, 0],   Color: 0xFF9EAF,    OffsetYTop: 20,  OffsetYMid: 20,   OffsetYBot: -20},
    {Name: 'Blue',    PositionY: [2, 2, 2, 2, 2],   Color: 0x0000FF,    OffsetYTop: 20,  OffsetYMid: 0,    OffsetYBot: 20}
  ];

  static GetRowSymbolNameByReelIndex(symbolIndexArray, index)
  {
    return this.AllReelSymbols[symbolIndexArray[index]];
  }

  static GetPayouts(symbolIndex, consecutiveSymbolCount)
  {
    return this.Payouts[symbolIndex][consecutiveSymbolCount - 3];
  }
}