/**
 * 希尔排序算法
 *
 * 时间复杂度:
 * - 平均情况：O(n^1.3)
 * - 最好情况：O(n*logn)
 * - 最坏情况：O(n^2)
 *
 * 空间复杂度: O(1)
 * 稳定性: 不稳定
 *
 * 工作原理:
 * - 是插入排序的改进版本，通过比较相距一定间隔的元素来工作
 * - 间隔序列从大到小递减，最后一个间隔必须为1
 * - 每次按间隔对子序列进行插入排序
 *
 * @param nums - 待排序的数组
 * @returns 排序后的数组
 */
export function shellSort(nums: number[]): number[] {
  // 对于长度为0或1的数组，直接返回
  if (nums.length <= 1) {
    return nums
  }

  const len = nums.length

  // 初始间隔设为长度的一半，每次减半
  // 使用位运算 >> 1 代替 除以2，提高性能
  for (let gap = len >> 1; gap > 0; gap = gap >> 1) {
    // 对每个子序列进行插入排序
    // 从gap开始，确保有前面的元素可以比较
    for (let i = gap; i < len; i++) {
      // 保存当前要插入的元素
      const current = nums[i]

      // 在当前子序列中寻找插入位置
      let j = i

      // 将比current大的元素向后移动gap位
      while (j >= gap && nums[j - gap] > current) {
        nums[j] = nums[j - gap]
        j -= gap
      }

      // 在正确的位置插入current
      nums[j] = current
    }
  }

  return nums
}
