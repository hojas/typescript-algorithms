/**
 * 插入排序算法
 *
 * 时间复杂度: O(n^2)
 * - 最好情况：O(n)，当数组已经排序时
 * - 最坏情况：O(n^2)，当数组倒序排列时
 *
 * 空间复杂度: O(1)，只需要一个临时变量
 *
 * 稳定性: 稳定，相同元素的相对位置不会改变
 *
 * 工作原理:
 * - 将数组分为已排序区域和未排序区域
 * - 从第二个元素开始，将当前元素与已排序部分比较
 * - 将大于当前元素的数字向右移动
 * - 在正确的位置插入当前元素
 *
 * @param nums - 待排序的数组
 * @returns 排序后的数组
 */
export function insertionSort(nums: number[]): number[] {
  // 对于长度为0或1的数组，无需排序，直接返回
  if (nums.length <= 1) {
    return nums
  }

  // 从第二个元素开始遍历未排序区域
  for (let i = 1; i < nums.length; i++) {
    // 保存当前要插入的元素
    const current = nums[i]
    // j指向已排序区域的最后一个元素
    let j = i - 1

    // 在已排序区域中从右向左扫描
    // 将所有大于current的元素向右移动一位
    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j] // 将较大的元素右移
      j-- // 继续向左比较
    }

    // 找到current应该插入的位置，插入元素
    // j + 1 是因为while循环结束时j已经减了1
    nums[j + 1] = current
  }

  return nums
}
