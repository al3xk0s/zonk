abstract class ValueOfRange {
  constructor(min: number, max: number, public readonly value: number) {
    if(value < min || value > max) throw new Error(`Invalid value of range: ${value}`)
  }
}
