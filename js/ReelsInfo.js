class ReelsInfo
{
  //                        0    1    2    3      4         5        6          7          8      9
  static AllReelSymbols = ['J', 'Q', 'K', 'A', 'Cherry', 'Grape', 'Lemon', 'Watermelon', 'Gem', 'Coin'];

  static Bets = [10, 25, 50, 100, 200];
  static InitialBetIndex = 3;
  static InitialCredits = 50000;

  static Reels =
  {
    Reel1: [5, 3, 1, 8, 2, 4, 6, 0, 3, 9, 7, 2, 1, 4, 5, 7, 8, 0, 9, 3, 2, 6, 4, 1, 8],
    Reel2: [2, 7, 6, 4, 0, 8, 1, 3, 9, 2, 4, 5, 7, 8, 0, 1, 6, 3, 2, 7, 8, 4, 0, 1, 5, 9, 6],
    Reel3: [8, 7, 1, 4, 0, 9, 3, 5, 2, 6, 1, 8, 3, 5, 4, 2, 0, 7, 6, 9, 8, 1],
    Reel4: [4, 1, 8, 6, 2, 0, 5, 7, 9, 3, 1, 6, 8, 4, 2, 5, 0, 7, 9, 3, 4, 8, 1, 6],
    Reel5: [0, 3, 7, 2, 4, 1, 6, 8, 5, 9, 1, 7, 4, 2, 8, 0, 3, 6, 9, 5, 4, 1, 7, 2, 8, 0, 3, 5, 6, 9]
  };

  static Payouts =
  [
  // 3x    4x    5x
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
    {Name: 'Yellow',  PositionY: [0, 0, 1, 2, 2],   Color: 0xFFFF00,    OffsetYTop: 0,   OffsetYMid: 0,    OffsetYBot: 0},
    {Name: 'Orange',  PositionY: [0, 1, 1, 1, 2],   Color: 0xFF8103,    OffsetYTop: 20,  OffsetYMid: -20,  OffsetYBot: -20},
    {Name: 'Green',   PositionY: [1, 1, 1, 1, 1],   Color: 0x00FF00,    OffsetYTop: 0,   OffsetYMid: 0,    OffsetYBot: 0},
    {Name: 'Pink',    PositionY: [2, 1, 1, 1, 0],   Color: 0xFF9EAF,    OffsetYTop: 20,  OffsetYMid: 20,   OffsetYBot: -20},
    {Name: 'Purple',  PositionY: [2, 2, 1, 0, 0],   Color: 0xB303FF,    OffsetYTop: 0,   OffsetYMid: 0,    OffsetYBot: 0},
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