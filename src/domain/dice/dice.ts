import { IDiceRoll, IDicesRoll } from "./roll/dices_roll";

export interface IDice {
  // Здесь роляет индивидуальные характеристики кости
  throwDice() : IDiceRoll;
}

export interface IDices {
  // Здесь индивидуальные характеристики кости + характеристики игрока
  throwDices() : IDicesRoll;
}
