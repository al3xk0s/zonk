import { IDicesPool, IDicesRoll } from "./dices_roll";

export interface IDicesRollRule {
  readonly values: readonly number[];
  readonly score: number;
}
