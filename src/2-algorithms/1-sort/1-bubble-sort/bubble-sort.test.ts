import { describe, expect, it } from 'vitest'
import { bubbleSort } from './bubble-sort'

describe('bubbleSort', () => {
  // 测试普通数组排序
  it('应该能正确排序普通数字数组', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedNums = bubbleSort(nums)
    expect(sortedNums).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  // 测试空数组
  it('应该能处理空数组', () => {
    const nums: number[] = []
    const sortedNums = bubbleSort(nums)
    expect(sortedNums).toEqual([])
  })

  // 测试只有一个元素的数组
  it('应该能处理只有一个元素的数组', () => {
    const nums = [1]
    const sortedNums = bubbleSort(nums)
    expect(sortedNums).toEqual([1])
  })

  // 测试已经排序的数组
  it('应该能处理已经排序的数组', () => {
    const nums = [1, 2, 3, 4, 5]
    const sortedNums = bubbleSort(nums)
    expect(sortedNums).toEqual([1, 2, 3, 4, 5])
  })

  // 测试逆序数组
  it('应该能处理逆序数组', () => {
    const nums = [5, 4, 3, 2, 1]
    const sortedNums = bubbleSort(nums)
    expect(sortedNums).toEqual([1, 2, 3, 4, 5])
  })

  // 测试有重复元素的数组
  it('应该能处理有重复元素的数组', () => {
    const nums = [3, 3, 3, 1, 1, 2]
    const sortedNums = bubbleSort(nums)
    expect(sortedNums).toEqual([1, 1, 2, 3, 3, 3])
  })

  // 测试负数数组
  it('应该能处理包含负数的数组', () => {
    const nums = [-3, 5, -7, 2, 0, -1, 8]
    const sortedNums = bubbleSort(nums)
    expect(sortedNums).toEqual([-7, -3, -1, 0, 2, 5, 8])
  })
})
