import { describe, expect, it } from 'vitest'
import { heapSort } from './heap-sort'

describe('堆排序测试', () => {
  // 测试空数组
  it('应该正确处理空数组', () => {
    expect(heapSort([])).toEqual([])
  })

  // 测试单个元素的数组
  it('应该正确处理单个元素的数组', () => {
    expect(heapSort([1])).toEqual([1])
  })

  // 测试已排序的数组
  it('应该正确处理已排序的数组', () => {
    expect(heapSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  // 测试逆序数组
  it('应该正确处理逆序数组', () => {
    expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  // 测试包含重复元素的数组
  it('应该正确处理包含重复元素的数组', () => {
    expect(heapSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))
      .toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  // 测试包含负数的数组
  it('应该正确处理包含负数的数组', () => {
    expect(heapSort([-4, 0, 7, -2, 9, -5, 3]))
      .toEqual([-5, -4, -2, 0, 3, 7, 9])
  })

  // 测试大数组
  it('应该正确处理较大的数组', () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))
    const sorted = [...arr].sort((a, b) => a - b)
    expect(heapSort(arr)).toEqual(sorted)
  })
})
