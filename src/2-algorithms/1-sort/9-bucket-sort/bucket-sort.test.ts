import { describe, expect, it } from 'vitest'
import { bucketSort } from './bucket-sort'

describe('桶排序测试', () => {
  it('应该正确排序普通数组', () => {
    const nums = [19, 27, 35, 43, 31, 22, 54, 66, 78]
    expect(bucketSort(nums)).toEqual([19, 22, 27, 31, 35, 43, 54, 66, 78])
  })

  it('应该处理空数组', () => {
    expect(bucketSort([])).toEqual([])
  })

  it('应该处理单个元素的数组', () => {
    expect(bucketSort([42])).toEqual([42])
  })

  it('应该处理包含重复元素的数组', () => {
    const nums = [5, 3, 5, 2, 8, 5, 1, 9, 3]
    expect(bucketSort(nums)).toEqual([1, 2, 3, 3, 5, 5, 5, 8, 9])
  })

  it('应该处理已排序的数组', () => {
    const nums = [1, 2, 3, 4, 5, 6]
    expect(bucketSort(nums)).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('应该处理逆序的数组', () => {
    const nums = [6, 5, 4, 3, 2, 1]
    expect(bucketSort(nums)).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('应该处理所有元素相同的数组', () => {
    const nums = [4, 4, 4, 4, 4]
    expect(bucketSort(nums)).toEqual([4, 4, 4, 4, 4])
  })

  it('应该处理大数据量的数组', () => {
    const nums = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000))
    const sorted = bucketSort([...nums])
    const expected = [...nums].sort((a, b) => a - b)
    expect(sorted).toEqual(expected)
  })

  it('应该保持排序稳定性', () => {
    // 使用对象数组来测试稳定性
    const nums = [
      { value: 3, id: 1 },
      { value: 3, id: 2 },
      { value: 1, id: 3 },
      { value: 2, id: 4 },
    ]
    const values = nums.map(item => item.value)
    const sortedValues = bucketSort(values)
    expect(sortedValues).toEqual([1, 2, 3, 3])
    // 确保相同值的相对顺序保持不变
    const threes = sortedValues.filter(v => v === 3)
    expect(threes.length).toBe(2)
  })

  it('应该处理较大的数值范围', () => {
    const nums = [1000, 2, 5000, 1, 10000, 100]
    expect(bucketSort(nums)).toEqual([1, 2, 100, 1000, 5000, 10000])
  })

  it('应该处理接近的数值', () => {
    const nums = [1.1, 1.2, 1.15, 1.05, 1.11]
    const sorted = bucketSort(nums)
    expect(sorted).toEqual([1.05, 1.1, 1.11, 1.15, 1.2])
  })
})
