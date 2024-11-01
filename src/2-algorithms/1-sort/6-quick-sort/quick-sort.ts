/**
 * 快速排序算法
 *
 * 时间复杂度:
 * - 平均情况：O(nlogn)
 * - 最好情况：O(nlogn)
 * - 最坏情况：O(n²) - 当数组已经排序时
 *
 * 空间复杂度: O(logn) - 递归调用栈的深度
 * 稳定性: 不稳定
 *
 * 工作原理:
 * - 选择一个基准元素（pivot）
 * - 将数组分区，使得小于pivot的元素在左边，大于pivot的元素在右边
 * - 递归地对左右子数组进行快速排序
 *
 * @param nums - 待排序的数组
 * @param left - 左边界，默认为0
 * @param right - 右边界，默认为数组长度-1
 * @returns 排序后的数组
 */
export function quickSort(nums: number[], left = 0, right = nums.length - 1): number[] {
  // 数组为空或只有一个元素时直接返回
  if (nums.length <= 1) {
    return nums
  }

  // 递归终止条件
  if (left < right) {
    // 获取分区点
    const pivotIndex = partition(nums, left, right)
    // 递归排序左右两部分
    quickSort(nums, left, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, right)
  }

  return nums
}

/**
 * 分区函数
 * 将数组按照基准值分成两部分，左边小于基准值，右边大于基准值
 *
 * @param nums - 待分区的数组
 * @param left - 左边界
 * @param right - 右边界
 * @returns 基准值的最终位置
 */
function partition(nums: number[], left: number, right: number): number {
  // 选择最右边的元素作为基准值
  const pivot = nums[right]

  // i 表示小于 pivot 的区域的右边界
  let i = left - 1

  // 遍历数组，将小于 pivot 的元素放到左边
  for (let j = left; j < right; j++) {
    if (nums[j] <= pivot) {
      i++;
      // 交换元素
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  // 将 pivot 放到正确的位置
  [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]]

  // 返回 pivot 的最终位置
  return i + 1
}
