/**
 * 标准二分查找
 * @param nums 有序数组
 * @param target 目标值
 * @returns 目标值在数组中的索引，如果不存在则返回 -1
 */
export function binarySearch(nums: number[], target: number): number {
  // 输入验证
  if (!Array.isArray(nums))
    throw new TypeError('nums must be an array')
  if (nums.length === 0)
    return -1

  // 初始化左右指针
  let left = 0
  let right = nums.length - 1

  // 当左指针小于等于右指针时继续查找
  while (left <= right) {
    // 计算中间位置（防止整数溢出的写法）
    const middle = left + Math.floor((right - left) / 2)

    // 目标值在右半部分
    if (target > nums[middle]) {
      left = middle + 1
    }
    // 目标值在左半部分
    else if (target < nums[middle]) {
      right = middle - 1
    }
    // 找到目标值
    else {
      return middle
    }
  }

  // 未找到目标值
  return -1
}

/**
 * 二分查找右边界
 * 返回将目标值插入数组时的位置（保持数组有序）
 * 如果数组中存在目标值，则返回最右侧的位置+1
 *
 * @param arr 有序数组
 * @param target 目标值
 * @param low 查找范围的左边界（默认为0）
 * @param high 查找范围的右边界（默认为数组长度）
 * @returns 插入位置的索引
 */
export function binarySearchRight(arr: number[], target: number, low: number = 0, high = arr.length): number {
  // 输入验证
  if (!Array.isArray(arr))
    throw new TypeError('arr must be an array')
  if (low < 0)
    throw new RangeError('low must be non-negative')
  if (high > arr.length)
    throw new RangeError('high must not exceed array length')

  // 当左指针小于右指针时继续查找
  while (low < high) {
    // 计算中间位置
    const mid = low + Math.floor((high - low) / 2)
    // 目标值小于中间值，缩小右边界
    if (target < arr[mid]) {
      high = mid
    }
    // 目标值大于等于中间值，收缩左边界
    else {
      low = mid + 1
    }
  }

  return low
}

/**
 * 二分查找左边界
 * 返回将目标值插入数组时的位置（保持数组有序）
 * 如果数组中存在目标值，则返回最左侧的位置
 *
 * @param arr 有序数组
 * @param target 目标值
 * @param low 查找范围的左边界（默认为0）
 * @param high 查找范围的右边界（默认为数组长度）
 * @returns 插入位置的索引
 */
export function binarySearchLeft(arr: number[], target: number, low: number = 0, high = arr.length): number {
  // 输入验证
  if (!Array.isArray(arr))
    throw new TypeError('arr must be an array')
  if (low < 0)
    throw new RangeError('low must be non-negative')
  if (high > arr.length)
    throw new RangeError('high must not exceed array length')

  // 当左指针小于右指针时继续查找
  while (low < high) {
    // 计算中间位置
    const mid = low + Math.floor((high - low) / 2)
    // 目标值大于中间值，收缩左边界
    if (arr[mid] < target) {
      low = mid + 1
    }
    // 目标值小于等于中间值，缩小右边界
    else {
      high = mid
    }
  }

  return low
}
