class ReelsInfo
{
  //                        0    1     2    3    4    5     6         7         8        9        10       11      12     13       14         15
  static AllReelSymbols = ['7', '10', 'J', 'Q', 'K', 'A', 'Club', 'Diamond', 'Heart', 'Spade', 'Cherry', 'Coin', 'Gem', 'Grape', 'Lemon', 'Watermelon'];

  // static Reels =
  // {
  //   Reel1: [4, 9, 2, 7, 15, 1, 5, 8, 3, 10, 0, 12, 6, 11, 14, 13, 10, 8, 2, 4, 3, 4, 7, 9, 5, 6, 14, 8, 0, 10],
  //   Reel2: [10, 3, 7, 14, 2, 8, 0, 12, 4, 11, 6, 5, 15, 1, 9, 13, 11, 13, 3, 1, 6],
  //   Reel3: [6, 14, 11, 0, 5, 1, 10, 4, 9, 3, 13, 7, 2, 8, 12, 15, 9, 1, 0, 14, 3, 2, 10, 4, 6, 7, 1, 12, 15, 8, 7, 10, 5, 8, 1, 11, 12, 15],
  //   Reel4: [3, 0, 2, 9, 12, 7, 14, 6, 11, 5, 1, 8, 10, 4, 13, 15, 11, 6, 13, 3, 8, 1, 5, 2, 0, 15, 7],
  //   Reel5: [2, 10, 7, 11, 3, 12, 0, 6, 14, 9, 4, 1, 13, 15, 8, 5, 5, 10, 8, 0, 11, 9, 15, 4, 1, 13, 12, 3, 7, 2, 10]
  // };

  static Reels =
  {
    Reel1: [4, 0, 4, 1, 4, 4, 4, 4, 0, 4, 4, 1, 0, 4, 4, 4, 4, 4, 1, 4, 4, 4],
    Reel2: [4, 1, 4, 4, 4, 0, 4, 4, 1, 4, 4, 0, 4, 4, 4, 1, 4, 0, 4, 4, 4, 4, 4, 1],
    Reel3: [4, 0, 4, 4, 4, 1, 4, 4, 1, 0, 4, 4, 4, 4, 4, 1, 4, 0, 4, 4, 4, 1, 4, 4],
    Reel4: [0, 4, 4, 4, 1, 4, 4, 0, 4, 4, 1, 4, 4, 4, 0, 1, 4, 4, 4, 4, 4, 0, 4, 1, 4],
    Reel5: [4, 4, 1, 4, 4, 0, 4, 1, 4, 4, 0, 4, 4, 1, 4, 4, 4, 4, 4, 0, 1, 4, 4, 4, 4]
  };

  static GetRowSymbolNameByReelIndex(symbolIndexArray, index)
  {
    return this.AllReelSymbols[symbolIndexArray[index]];
  }

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
}