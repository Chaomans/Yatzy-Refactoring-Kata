# DEVNOTES

> 55 minutes

## Steps in order

Only what I thought able to refactor in one hour.

|     status     | step description                                                                     |
| :------------: | :----------------------------------------------------------------------------------- |
| :orange_heart: | Remove args and use `this.dices` instead.                                            |
| :green_heart:  | Create `sum_of()` method                                                             |
| :green_heart:  | Use `sum_of()` to simplify `ones()` to `sixes()` methods                             |
| :green_heart:  | Create `count_is_above()` method                                                     |
| :green_heart:  | Use `count_is_above()` method to simplify `pairs()` and `two_pairs()`                |
| :broken_heart: | Use `count_is_above()` method to simplify `three_of_a_kind()` and `four_of_a_kind()` |
| :broken_heart: | Use `three_of_a_kind()` method to simplify `full_house()`                            |

Legend:

- :green_heart: done
- :orange_heart: partially done
- :broken_heart: not done

## Comment

> Totally forgot to add tests for the added methods `sum_of()` and `count_is_above()`.
> I wasted time at the beginning trying to transform `this.dice` as an Object.
