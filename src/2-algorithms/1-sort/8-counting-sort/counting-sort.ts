/**
 * Counting Sort
 *
 * O(n+k)
 * Stable
 *
 * @param nums
 */
export function countingSort(nums: number[]): number[] {
  // 处理边界情况
  if (nums.length <= 1)
    return nums

  // 找出数组的最小值和最大值
  const min = Math.min(...nums)
  const max = Math.max(...nums)

  // 创建计数数组，长度为最大值和最小值的差值加1
  const counts: number[] = Array.from({ length: max - min + 1 }).fill(0) as number[]
  const result: number[] = Array.from({ length: nums.length })

  // 计数
  for (const num of nums) {
    counts[num - min]++
  }

  // 累加计数
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1]
  }

  // 构建结果数组
  for (let i = nums.length - 1; i >= 0; i--) {
    const currentNum = nums[i]
    const position = counts[currentNum - min] - 1
    result[position] = currentNum
    counts[currentNum - min]--
  }

  return result
}
