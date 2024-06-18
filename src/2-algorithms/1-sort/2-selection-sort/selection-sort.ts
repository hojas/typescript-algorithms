/**
 * Selection Sort
 *
 * O(n^2)
 * Stable
 *
 * @param nums
 * @returns sorted nums
 */
export function selectionSort(nums: number[]) {
  const len = nums.length
  let minIndex

  for (let i = 0; i < len - 1; i++) {
    minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }

  return nums
}
