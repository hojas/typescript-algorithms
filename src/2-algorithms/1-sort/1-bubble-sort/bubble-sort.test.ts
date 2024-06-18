import { describe, expect, it } from 'vitest'
import { bubbleSort } from './bubble-sort'

describe('bubbleSort', () => {
  it('should sort an array of numbers', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedNums = bubbleSort(nums)

    expect(sortedNums).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })
})
