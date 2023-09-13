import { IPlayerStats } from "src/domain/player/player_stats";
import { IDicesPool, IDicesRollScope } from "./dices_roll";
import { IDicesRollRule } from "./dices_roll_rule";

// Сюда вешаются бустеры очков
export interface IDicesRollCaclucator {
  getScore(playerStats: IPlayerStats, pool: IDicesPool) : IDicesRollScope;
}

const getBestRules = (pool: IDicesPool, rules: readonly IDicesRollRule[]) => {
  const results: number[] = [];

  for(const rule of rules) {
    const result = rule.getScore(pool);
    if(result > 0) results.push(result);
  }

  if(results.length === 0) return 0;
  if(results.length === 1) return results[0];

  return results.sort()[results.length - 1];
};

export class DicesRollCaclucator implements IDicesRollCaclucator {
  constructor(
    private readonly _rules: readonly IDicesRollRule[],
  ) {}

  getScore(playerStats: IPlayerStats, pool: IDicesPool): IDicesRollScope {
    const rulesResult = getBestRules(pool, this._rules);
    if(rulesResult > 0) return rulesResult * playerStats.luck;
  }
}
