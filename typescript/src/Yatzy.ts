export default class Yatzy {
  private dices: number[];

  constructor(d1: number, d2: number, d3: number, d4: number, d5: number) {
    this.dices = [d1, d2, d3, d4, d5];
  }

  chance(): number {
    return this.dices.reduce((a, b) => a + b);
  }

  sum_of(val: number): number {
    return this.dices.filter((dice) => dice === val).length * val;
  }

  static yatzy(...args: number[]): number {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i != args.length; ++i) {
      var die = args[i];
      counts[die - 1]++;
    }
    for (i = 0; i != 6; i++) if (counts[i] == 5) return 50;
    return 0;
  }

  ones(): number {
    return this.sum_of(1);
  }

  twos(): number {
    return this.sum_of(2);
  }

  threes(): number {
    return this.sum_of(3);
  }

  fours(): number {
    return this.sum_of(4);
  }

  fives(): number {
    return this.sum_of(5);
  }

  sixes(): number {
    return this.sum_of(6);
  }

  count_is_above(val: number): number[] {
    const values: Set<number> = new Set(this.dices);
    const above: number[] = [];
    values.forEach(value => {
      if (this.dices.filter(dice => dice === value).length >= val) {
        above.push(value);
      }
    })
    return above;
  }

  score_pair(): number {
    const above = this.count_is_above(2);
    if (!above) {
      return 0
    }
    return Math.max(...above) * 2;
  }

  two_pair(): number {
    const above = this.count_is_above(2);
    if (above.length < 2) {
      return 0
    }
    return above.sort().slice(0, 2).reduce((a, b) => a + b) * 2;
  }

  static four_of_a_kind(_1: number, _2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[_1 - 1]++;
    tallies[_2 - 1]++;
    tallies[d3 - 1]++;
    tallies[d4 - 1]++;
    tallies[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
    return 0;
  }

  static three_of_a_kind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[d1 - 1]++;
    t[d2 - 1]++;
    t[d3 - 1]++;
    t[d4 - 1]++;
    t[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (t[i] >= 3) return (i + 1) * 3;
    return 0;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
    return 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
    return 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    else return 0;
  }


}
