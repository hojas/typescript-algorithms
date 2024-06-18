/**
 * Bubble Sort
 *
 * O(n^2)
 * stable
 *
 * @param nums
 * @returns sorted nums
 */
export function bubbleSort(nums: number[]) {
  const len = nums.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }

  return nums
}
