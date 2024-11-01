import { describe, expect, it } from 'vitest'
import { selectionSort } from './selection-sort'

describe('selectionSort', () => {
  // 测试基本排序功能
  it('应该能正确排序普通数字数组', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  // 测试空数组
  it('应该能处理空数组', () => {
    const nums: number[] = []
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([])
  })

  // 测试单元素数组
  it('应该能处理只有一个元素的数组', () => {
    const nums = [42]
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([42])
  })

  // 测试两个元素的数组
  it('应该能处理两个元素的数组', () => {
    const nums = [2, 1]
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([1, 2])
  })

  // 测试已排序数组
  it('应该能处理已经排序的数组', () => {
    const nums = [1, 2, 3, 4, 5]
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([1, 2, 3, 4, 5])
  })

  // 测试逆序数组
  it('应该能处理逆序数组', () => {
    const nums = [5, 4, 3, 2, 1]
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([1, 2, 3, 4, 5])
  })

  // 测试全部元素相同的数组
  it('应该能处理所有元素都相同的数组', () => {
    const nums = [1, 1, 1, 1, 1]
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([1, 1, 1, 1, 1])
  })

  // 测试包含负数的数组
  it('应该能处理包含负数的数组', () => {
    const nums = [-3, 5, -7, 2, 0, -1, 8]
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([-7, -3, -1, 0, 2, 5, 8])
  })

  // 测试包含重复元素的数组
  it('应该能处理包含重复元素的数组', () => {
    const nums = [3, 3, 3, 1, 1, 2]
    const sortedNums = selectionSort(nums)
    expect(sortedNums).toEqual([1, 1, 2, 3, 3, 3])
  })

  // 测试较大规模的数组
  it('应该能处理较大规模的数组', () => {
    const nums = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))
    const sortedNums = selectionSort([...nums])
    expect(sortedNums).toEqual([...nums].sort((a, b) => a - b))
  })
})
