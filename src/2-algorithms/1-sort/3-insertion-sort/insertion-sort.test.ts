import { describe, expect, it } from 'vitest'
import { insertionSort } from './insertion-sort'

describe('insertionSort', () => {
  // 测试基本排序功能
  it('应该正确排序包含重复数字的数组', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedNums = insertionSort(nums)
    expect(sortedNums).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  // 测试空数组
  it('应该正确处理空数组', () => {
    const nums: number[] = []
    const sortedNums = insertionSort(nums)
    expect(sortedNums).toEqual([])
  })

  // 测试单个元素的数组
  it('应该正确处理只有一个元素的数组', () => {
    const nums = [1]
    const sortedNums = insertionSort(nums)
    expect(sortedNums).toEqual([1])
  })

  // 测试已经排序的数组
  it('应该正确处理已经排序的数组', () => {
    const nums = [1, 2, 3, 4, 5]
    const sortedNums = insertionSort(nums)
    expect(sortedNums).toEqual([1, 2, 3, 4, 5])
  })

  // 测试倒序排列的数组
  it('应该正确处理倒序排列的数组', () => {
    const nums = [5, 4, 3, 2, 1]
    const sortedNums = insertionSort(nums)
    expect(sortedNums).toEqual([1, 2, 3, 4, 5])
  })

  // 测试包含负数的数组
  it('应该正确处理包含负数的数组', () => {
    const nums = [-3, 4, -1, 7, 2, -5, 0]
    const sortedNums = insertionSort(nums)
    expect(sortedNums).toEqual([-5, -3, -1, 0, 2, 4, 7])
  })

  // 测试全部相同元素的数组
  it('应该正确处理所有元素都相同的数组', () => {
    const nums = [2, 2, 2, 2, 2]
    const sortedNums = insertionSort(nums)
    expect(sortedNums).toEqual([2, 2, 2, 2, 2])
  })

  // 测试原数组是否被修改
  it('应该修改原数组', () => {
    const nums = [3, 1, 4, 2]
    const sortedNums = insertionSort(nums)
    expect(nums).toEqual([1, 2, 3, 4]) // 原数组应该被修改
    expect(sortedNums).toBe(nums) // 返回值应该是同一个数组引用
  })
})
