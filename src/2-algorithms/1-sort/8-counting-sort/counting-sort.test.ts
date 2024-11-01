import { describe, expect, it } from 'vitest'
import { countingSort } from './counting-sort'

describe('counting Sort', () => {
  it('应该正确排序普通数字数组', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
    expect(countingSort(nums)).toEqual(expected)
  })

  it('应该处理空数组', () => {
    expect(countingSort([])).toEqual([])
  })

  it('应该处理只有一个元素的数组', () => {
    expect(countingSort([1])).toEqual([1])
  })

  it('应该处理包含负数的数组', () => {
    const nums = [-3, 1, -4, 1, 5, -9, 2, 6, -5, 3, 5]
    const expected = [-9, -5, -4, -3, 1, 1, 2, 3, 5, 5, 6]
    expect(countingSort(nums)).toEqual(expected)
  })

  it('应该处理所有元素相同的数组', () => {
    const nums = [2, 2, 2, 2, 2]
    const expected = [2, 2, 2, 2, 2]
    expect(countingSort(nums)).toEqual(expected)
  })

  it('应该处理已经排序的数组', () => {
    const nums = [1, 2, 3, 4, 5]
    const expected = [1, 2, 3, 4, 5]
    expect(countingSort(nums)).toEqual(expected)
  })

  it('应该处理逆序排列的数组', () => {
    const nums = [5, 4, 3, 2, 1]
    const expected = [1, 2, 3, 4, 5]
    expect(countingSort(nums)).toEqual(expected)
  })

  it('应该保持排序的稳定性', () => {
    const nums = [3, 3, 3, 2, 2, 1] // 测试相同元素的相对位置是否保持不变
    const expected = [1, 2, 2, 3, 3, 3]
    expect(countingSort(nums)).toEqual(expected)
  })
})
