/**
 * Counting Sort
 *
 * O(n+k)
 * Stable
 *
 * @param nums
 */
export function countingSort(nums: number[]): number[] {
  const max = Math.max(...nums)
  const counts: number[] = Array(max + 1).fill(0)
  const result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++
  }

  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[counts[nums[i]] - 1] = nums[i]
    counts[nums[i]]--
  }

  return result
}
