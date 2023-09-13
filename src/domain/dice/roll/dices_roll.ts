import { IDice } from "../dice";

export interface IDiceRoll {
  readonly dice: IDice;
  readonly value: number;
}

export interface IDicesPool {
  readonly values: readonly IDiceRoll[];
  readonly count: number;
}

export interface IDicesRollScope {
  successRoll: boolean;
  scope: number;
}

export interface IDicesRoll extends IDicesPool {}
