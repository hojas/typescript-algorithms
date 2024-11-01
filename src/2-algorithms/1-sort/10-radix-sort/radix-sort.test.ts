import { describe, expect, it } from 'vitest'
import { radixSort } from './radix-sort'

describe('基数排序测试', () => {
  it('应该正确排序普通数组', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    expect(radixSort(nums)).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  it('应该处理空数组', () => {
    expect(radixSort([])).toEqual([])
  })

  it('应该处理单个元素的数组', () => {
    expect(radixSort([42])).toEqual([42])
  })

  it('应该处理只包含0的数组', () => {
    expect(radixSort([0, 0, 0])).toEqual([0, 0, 0])
  })

  it('应该处理包含多位数的数组', () => {
    const nums = [170, 45, 75, 90, 802, 24, 2, 66]
    expect(radixSort(nums)).toEqual([2, 24, 45, 66, 75, 90, 170, 802])
  })

  it('应该处理重复元素', () => {
    const nums = [123, 123, 123, 456, 456, 789]
    expect(radixSort(nums)).toEqual([123, 123, 123, 456, 456, 789])
  })

  it('应该处理已排序的数组', () => {
    const nums = [1, 2, 3, 4, 5, 6]
    expect(radixSort(nums)).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('应该处理逆序的数组', () => {
    const nums = [6, 5, 4, 3, 2, 1]
    expect(radixSort(nums)).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('应该处理大数据量的数组', () => {
    const nums = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 10000))
    const sorted = radixSort([...nums])
    const expected = [...nums].sort((a, b) => a - b)
    expect(sorted).toEqual(expected)
  })

  it('应该保持排序稳定性', () => {
    const nums = [111, 211, 121, 11, 21, 11]
    const sorted = radixSort(nums)
    // 确保两个11的相对位置保持不变
    expect(sorted).toEqual([11, 11, 21, 111, 121, 211])
  })

  it('应该正确处理不同位数的数字', () => {
    const nums = [1, 10, 100, 1000, 10000]
    expect(radixSort(nums)).toEqual([1, 10, 100, 1000, 10000])
  })

  it('应该抛出错误当输入包含负数时', () => {
    const nums = [-1, 2, 3, 4, 5]
    expect(() => radixSort(nums)).toThrow('基数排序不支持负数')
  })

  it('应该处理较大的数值范围', () => {
    const nums = [999999, 1, 45678, 12, 999, 12345]
    expect(radixSort(nums)).toEqual([1, 12, 999, 12345, 45678, 999999])
  })
})
