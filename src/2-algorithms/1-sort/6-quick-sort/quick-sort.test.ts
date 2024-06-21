import { describe, expect, it } from 'vitest'
import { quickSort } from './quick-sort'

describe('quickSort', () => {
  it('should sort an array of numbers', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedNums = quickSort(nums)
    expect(sortedNums).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })
})
