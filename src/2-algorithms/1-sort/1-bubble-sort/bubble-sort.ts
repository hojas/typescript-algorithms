/**
 * 冒泡排序
 *
 * 时间复杂度: O(n^2)
 * 特点: 稳定排序
 *
 * @param nums 待排序的数字数组
 * @returns 排序后的数组
 */
export function bubbleSort(nums: number[]) {
  const len = nums.length

  // 外层循环：需要进行 len 轮比较
  for (let i = 0; i < len; i++) {
    // 优化标志：记录本轮是否发生交换
    let swapped = false

    // 内层循环：每轮比较相邻的元素
    // len-i-1：每轮循环后，最后i个元素已经排好序，不需要再比较
    for (let j = 0; j < len - i - 1; j++) {
      // 如果前一个元素大于后一个元素，交换它们的位置
      if (nums[j] > nums[j + 1]) {
        // 使用解构赋值进行交换
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        swapped = true // 标记发生了交换
      }
    }

    // 如果本轮没有发生交换，说明数组已经有序，可以提前退出
    if (!swapped) {
      break
    }
  }

  return nums
}
