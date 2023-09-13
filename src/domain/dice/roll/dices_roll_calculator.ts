import { IPlayerStats } from "src/domain/player/player_stats";
import { IDicesPool, IDicesRollScore } from "./dices_roll";
import { IDicesRollRule } from "./dices_roll_rule";

// Сюда вешаются бустеры очков
export interface IDicesRollCaclucator {
  getScore(playerStats: IPlayerStats, pool: IDicesPool) : IDicesRollScore;
}

export class DicesRollCaclucator implements IDicesRollCaclucator {
  constructor(
    private readonly _rules: readonly IDicesRollRule[],
  ) {}

  getScore(playerStats: IPlayerStats, pool: IDicesPool): IDicesRollScore {
    const rulesResult = getBestRuleScore(pool, this._rules);
    if(rulesResult > 0) return rulesResult * playerStats.luck;
  }
}
