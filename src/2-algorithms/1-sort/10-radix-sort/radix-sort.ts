/**
 * Radix Sort 基数排序
 * 时间复杂度: O(n * k)，其中 k 是最大数字的位数
 * 空间复杂度: O(n + k)
 * 稳定性: 稳定
 */
export function radixSort(nums: number[]): number[] {
  // 处理边界情况
  if (nums.length <= 1)
    return nums
  if (nums.some(num => num < 0)) {
    throw new Error('基数排序不支持负数')
  }

  // 获取最大值和位数
  const maxNum = findMax(nums)
  const maxDigits = getDigitCount(maxNum)

  // 按照每一位进行排序
  let result = [...nums]
  for (let digit = 0; digit < maxDigits; digit++) {
    result = sortByDigit(result, digit)
  }

  return result
}

/**
 * 找出数组中的最大值
 */
function findMax(nums: number[]): number {
  return Math.max(...nums)
}

/**
 * 获取数字的位数
 */
function getDigitCount(num: number): number {
  if (num === 0)
    return 1
  return Math.floor(Math.log10(num)) + 1
}

/**
 * 获取数字在指定位置上的数字（从右往左，个位是0）
 */
function getDigit(num: number, position: number): number {
  return Math.floor(num / 10 ** position) % 10
}

/**
 * 按照指定位置的数字对数组进行排序
 */
function sortByDigit(nums: number[], position: number): number[] {
  // 创建10个桶（0-9）
  const buckets: number[][] = Array.from({ length: 10 }, () => [])

  // 将数字分配到对应的桶中
  for (const num of nums) {
    const digit = getDigit(num, position)
    buckets[digit].push(num)
  }

  // 合并所有桶中的数字
  return buckets.flat()
}
