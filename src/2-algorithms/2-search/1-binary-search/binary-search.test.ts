import { describe, expect, it } from 'vitest'
import { binarySearch, binarySearchLeft, binarySearchRight } from './binary-search'

describe('二分查找测试', () => {
  describe('标准二分查找 (binarySearch)', () => {
    it('应该在有序数组中找到目标值的索引', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(binarySearch(arr, 7)).toBe(6)
      expect(binarySearch(arr, 1)).toBe(0) // 测试第一个元素
      expect(binarySearch(arr, 10)).toBe(9) // 测试最后一个元素
      expect(binarySearch(arr, 5)).toBe(4) // 测试中间元素
    })

    it('当目标值不存在时应该返回-1', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(binarySearch(arr, 0)).toBe(-1) // 测试小于最小值
      expect(binarySearch(arr, 11)).toBe(-1) // 测试大于最大值
      expect(binarySearch(arr, 3.5)).toBe(-1) // 测试中间不存在的值
    })

    it('应该正确处理空数组和单元素数组', () => {
      expect(binarySearch([], 1)).toBe(-1) // 空数组
      expect(binarySearch([1], 1)).toBe(0) // 单元素数组，找到
      expect(binarySearch([1], 2)).toBe(-1) // 单元素数组，未找到
    })

    it('应该正确处理重复元素', () => {
      const arr = [1, 2, 2, 2, 3, 4, 5]
      expect(binarySearch(arr, 2)).toBeGreaterThanOrEqual(1) // 返回任意一个2的位置即可
    })

    it('应该抛出类型错误当输入无效时', () => {
      expect(() => binarySearch(null as any, 1)).toThrow(TypeError)
      expect(() => binarySearch(undefined as any, 1)).toThrow(TypeError)
    })
  })

  describe('二分查找左边界 (binarySearchLeft)', () => {
    it('应该返回正确的插入位置', () => {
      const arr = [1, 2, 2, 2, 3, 4, 5]
      expect(binarySearchLeft(arr, 2)).toBe(1) // 返回最左边的2的位置
      expect(binarySearchLeft(arr, 0)).toBe(0) // 应插入到开头
      expect(binarySearchLeft(arr, 6)).toBe(7) // 应插入到末尾
    })

    it('应该正确处理边界参数', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(() => binarySearchLeft(arr, 1, -1)).toThrow(RangeError) // 测试负数边界
      expect(() => binarySearchLeft(arr, 1, 0, 6)).toThrow(RangeError) // 测试越界
    })
  })

  describe('二分查找右边界 (binarySearchRight)', () => {
    it('应该返回正确的插入位置', () => {
      const arr = [1, 2, 2, 2, 3, 4, 5]
      expect(binarySearchRight(arr, 2)).toBe(4) // 返回最右边的2的后一个位置
      expect(binarySearchRight(arr, 0)).toBe(0) // 应插入到开头
      expect(binarySearchRight(arr, 6)).toBe(7) // 应插入到末尾
    })

    it('应该正确处理边界参数', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(() => binarySearchRight(arr, 1, -1)).toThrow(RangeError) // 测试负数边界
      expect(() => binarySearchRight(arr, 1, 0, 6)).toThrow(RangeError) // 测试越界
    })
  })
})
