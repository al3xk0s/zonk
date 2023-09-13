export class PlayerStat extends ValueOfRange {
  constructor(value: number) { super(0, 100, value); }
}

export interface IPlayerStats {
  /**
   * 0 - 24   : + наказание за проигрыш
   * 
   * 25 - 49  : пониженный выигрыш
   * 
   * 50 - 74  : повышенный выигрыш
   * 
   * 75 - 100 : + утешительный выигрыш за проигрыш
   */ 
  reputation: PlayerStat;

  /**
   * Пассив + актив
   * 
   * 0 - 49   : вероятность изменить бросок кости в отрицательную сторону
   * 50       : ничего не изменится
   * 51 - 100 : вероятность изменить бросок кости в положительную сторону
   */
  juggle: PlayerStat;
}
