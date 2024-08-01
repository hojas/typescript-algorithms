import { describe, expect, it } from 'vitest'
import { binarySearch } from './binary-search'

describe('binarySearch', () => {
  it('should find the index of target in nums', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const target = 7

    const index = binarySearch(arr, target)
    expect(index).toBe(6)
  })
})
