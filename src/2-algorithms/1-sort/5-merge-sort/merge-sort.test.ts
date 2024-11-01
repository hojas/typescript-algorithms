import { describe, expect, it } from 'vitest'
import { mergeSort } from './merge-sort'

describe('归并排序', () => {
  // 测试基本排序功能
  it('应该正确排序包含重复数字的数组', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const sorted = mergeSort(nums)
    expect(sorted).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  // 测试空数组
  it('应该正确处理空数组', () => {
    const nums: number[] = []
    const sorted = mergeSort(nums)
    expect(sorted).toEqual([])
  })

  // 测试单个元素的数组
  it('应该正确处理只有一个元素的数组', () => {
    const nums = [42]
    const sorted = mergeSort(nums)
    expect(sorted).toEqual([42])
  })

  // 测试已排序的数组
  it('应该正确处理已经排序的数组', () => {
    const nums = [1, 2, 3, 4, 5]
    const sorted = mergeSort(nums)
    expect(sorted).toEqual([1, 2, 3, 4, 5])
  })

  // 测试倒序数组
  it('应该正确处理倒序排列的数组', () => {
    const nums = [5, 4, 3, 2, 1]
    const sorted = mergeSort(nums)
    expect(sorted).toEqual([1, 2, 3, 4, 5])
  })

  // 测试包含负数的数组
  it('应该正确处理包含负数的数组', () => {
    const nums = [-3, 4, -1, 7, 2, -5, 0]
    const sorted = mergeSort(nums)
    expect(sorted).toEqual([-5, -3, -1, 0, 2, 4, 7])
  })

  // 测试全部相同的元素
  it('应该正确处理所有元素都相同的数组', () => {
    const nums = [2, 2, 2, 2, 2]
    const sorted = mergeSort(nums)
    expect(sorted).toEqual([2, 2, 2, 2, 2])
  })

  // 测试大数组
  it('应该正确处理较大的数组', () => {
    const nums = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))
    const sorted = mergeSort(nums)
    const expected = [...nums].sort((a, b) => a - b)
    expect(sorted).toEqual(expected)
  })

  // 测试稳定性
  it('应该保持相等元素的相对顺序（稳定性测试）', () => {
    interface Item {
      value: number
      originalIndex: number
    }

    const items: Item[] = [
      { value: 3, originalIndex: 0 },
      { value: 1, originalIndex: 1 },
      { value: 3, originalIndex: 2 },
      { value: 1, originalIndex: 3 },
    ]

    const sorted = mergeSort(items.map(item => item.value))
    const originalIndices = items
      .map((item, index) => ({ value: sorted[index], originalIndex: item.originalIndex }))
      .filter(item => item.value === 3)
      .map(item => item.originalIndex)

    expect(originalIndices[0]).toBeLessThan(originalIndices[1])
  })

  // 测试原数组不变性
  it('不应该修改原数组', () => {
    const original = [3, 1, 4, 1, 5]
    const originalCopy = [...original]
    const sorted = mergeSort(original)
    expect(original).toEqual(originalCopy) // 原数组应保持不变
    expect(sorted).not.toBe(original) // 返回新数组
  })
})
