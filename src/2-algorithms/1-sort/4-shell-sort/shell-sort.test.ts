import { describe, expect, it } from 'vitest'
import { shellSort } from './shell-sort'

describe('希尔排序', () => {
  // 测试基本排序功能
  it('应该正确排序包含重复数字的数组', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const actual = shellSort(nums)
    expect(actual).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  // 测试空数组
  it('应该正确处理空数组', () => {
    const nums: number[] = []
    const actual = shellSort(nums)
    expect(actual).toEqual([])
  })

  // 测试单个元素的数组
  it('应该正确处理只有一个元素的数组', () => {
    const nums = [42]
    const actual = shellSort(nums)
    expect(actual).toEqual([42])
  })

  // 测试已排序的数组
  it('应该正确处理已经排序的数组', () => {
    const nums = [1, 2, 3, 4, 5, 6]
    const actual = shellSort(nums)
    expect(actual).toEqual([1, 2, 3, 4, 5, 6])
  })

  // 测试倒序数组
  it('应该正确处理倒序排列的数组', () => {
    const nums = [6, 5, 4, 3, 2, 1]
    const actual = shellSort(nums)
    expect(actual).toEqual([1, 2, 3, 4, 5, 6])
  })

  // 测试包含负数的数组
  it('应该正确处理包含负数的数组', () => {
    const nums = [-3, 4, -1, 7, 2, -5, 0]
    const actual = shellSort(nums)
    expect(actual).toEqual([-5, -3, -1, 0, 2, 4, 7])
  })

  // 测试全部相同的元素
  it('应该正确处理所有元素都相同的数组', () => {
    const nums = [2, 2, 2, 2, 2]
    const actual = shellSort(nums)
    expect(actual).toEqual([2, 2, 2, 2, 2])
  })

  // 测试大数组
  it('应该正确处理较大的数组', () => {
    const nums = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))
    const actual = shellSort(nums)
    const expected = [...nums].sort((a, b) => a - b)
    expect(actual).toEqual(expected)
  })

  // 测试原数组修改
  it('应该修改原数组', () => {
    const nums = [3, 1, 4, 2]
    const actual = shellSort(nums)
    expect(nums).toEqual([1, 2, 3, 4]) // 原数组应该被修改
    expect(actual).toBe(nums) // 返回值应该是同一个数组引用
  })

  // 测试特殊间隔情况
  it('应该正确处理特殊间隔情况的数组', () => {
    const nums = [5, 3, 1, 2, 4, 7, 6, 8, 9]
    const actual = shellSort(nums)
    expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
