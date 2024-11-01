/**
 * 归并排序算法
 *
 * 时间复杂度: O(nlogn) - 所有情况都是 O(nlogn)
 * 空间复杂度: O(n) - 需要额外的数组空间
 * 稳定性: 稳定
 *
 * 工作原理:
 * - 采用分治法，将数组递归地分成两半
 * - 将分开的子数组分别排序
 * - 最后将有序的子数组合并成一个完整的有序数组
 *
 * @param nums - 待排序的数组
 * @returns 排序后的新数组
 */
export function mergeSort(nums: number[]): number[] {
  const len = nums.length
  if (len <= 1) {
    return nums
  }

  // 使用位运算计算中间位置
  const mid = len >> 1
  // 分割数组
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  // 递归排序并合并结果
  return merge(mergeSort(left), mergeSort(right))
}

/**
 * 合并两个有序数组
 *
 * @param left - 左侧有序数组
 * @param right - 右侧有序数组
 * @returns 合并后的有序数组
 */
function merge(left: number[], right: number[]): number[] {
  const result: number[] = []
  let leftIndex = 0
  let rightIndex = 0

  // 比较两个数组的元素，将较小的元素加入结果数组
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    }
    else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  // 将剩余元素添加到结果数组
  // 使用 spread 运算符简化代码
  return [
    ...result,
    ...left.slice(leftIndex),
    ...right.slice(rightIndex),
  ]
}
