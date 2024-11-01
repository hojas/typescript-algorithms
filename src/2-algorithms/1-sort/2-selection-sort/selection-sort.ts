/**
 * 选择排序（优化版）
 *
 * 基本思路：通过同时查找最大值和最小值，减少循环次数
 * 时间复杂度：仍为 O(n^2)，但实际执行时间可减少近一半
 * 空间复杂度：O(1)，只需要常数级额外空间
 * 特点：不稳定排序
 *
 * @param nums 待排序的数组
 * @returns 排序后的数组
 */
export function selectionSort(nums: number[]) {
  const len = nums.length
  // 使用双指针，left指向未排序区间的左边界，right指向右边界
  let left = 0
  let right = len - 1

  // 当左右指针相遇时，排序完成
  while (left < right) {
    // 初始化最大值和最小值的索引，默认为left位置
    let minIndex = left
    let maxIndex = left

    // 在当前未排序区间[left, right]内同时寻找最大值和最小值
    for (let i = left + 1; i <= right; i++) {
      // 更新最小值索引
      if (nums[i] < nums[minIndex]) {
        minIndex = i
      }
      // 更新最大值索引
      if (nums[i] > nums[maxIndex]) {
        maxIndex = i
      }
    }

    // 将最小值交换到左边界位置
    if (minIndex !== left) {
      // 使用解构赋值进行交换
      [nums[left], nums[minIndex]] = [nums[minIndex], nums[left]]
      // 特殊情况处理：如果最大值恰好在left位置
      // 由于上面的交换操作，最大值现在被交换到了minIndex位置
      if (maxIndex === left) {
        maxIndex = minIndex
      }
    }

    // 将最大值交换到右边界位置
    if (maxIndex !== right) {
      [nums[right], nums[maxIndex]] = [nums[maxIndex], nums[right]]
    }

    // 缩小未排序区间的范围
    left++ // 左边界向右移动
    right-- // 右边界向左移动
  }

  return nums
}
