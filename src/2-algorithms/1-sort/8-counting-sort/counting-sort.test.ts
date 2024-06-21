import { describe, expect, it } from 'vitest'
import { countingSort } from './counting-sort'

describe('counting Sort', () => {
  it('should sort an array of numbers', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    const actual = countingSort(nums)
    expect(actual).toEqual(expected)
  })
})
