import { IDicesPool, IDicesRoll } from "./dices_roll";

export interface IDicesRollRule {
  readonly name: string;
  readonly values: readonly number[];
  readonly score: number;
}

export interface IDicesRollScore {
  readonly rule?: IDicesRollRule;
  readonly scope: number;
}

export interface IRollRuleMatcher {
  match(pool: IDicesPool, rule: IDicesRollRule) : boolean;
  getBestRule(pool: IDicesPool, rules: readonly IDicesRollRule[]) : IDicesRollRule | undefined;
  
}

export class RollRuleMatcher implements IRollRuleMatcher {
  match(pool: IDicesPool, rule: IDicesRollRule): boolean {
    if(pool.values.length !== rule.values.length) return false;

    const ruleValues = [...rule.values];

    for(const {value} of pool.values) {
      const valueIndex = ruleValues.indexOf(value);
      if (valueIndex === -1) return false;
      ruleValues.splice(valueIndex, 1);
    }

    return true;
  }

  getBestRule(pool: IDicesPool, rules: readonly IDicesRollRule[]): IDicesRollRule | undefined {
    const matches: IDicesRollRule[] = [];

    for(const rule of rules) {
      const isMatch = this.match(pool, rule);
      if(isMatch) matches.push(rule);
    }
  
    if(matches.length === 0) return undefined;
    if(matches.length === 1) return matches[0];
  
    return matches.sort((a, b) => a.score - b.score)[matches.length - 1];
  }
}
