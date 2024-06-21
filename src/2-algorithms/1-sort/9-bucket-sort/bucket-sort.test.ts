import { describe, expect, it } from 'vitest'
import { bucketSort } from './bucket-sort'

describe('bucket Sort', () => {
  it('should sort array', () => {
    const nums = [19, 27, 35, 43, 31, 22, 54, 66, 78]
    const sorted = bucketSort(nums)
    expect(sorted).to.deep.equal([19, 22, 27, 31, 35, 43, 54, 66, 78])
  })
})
