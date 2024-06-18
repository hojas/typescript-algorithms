/**
 * Insertion Sort
 *
 * O(n^2)
 * stable
 *
 * @param nums
 * @returns sorted nums
 */
export function insertionSort(nums: number[]) {
  const len = nums.length
  let prevIndex, current

  for (let i = 1; i < len; i++) {
    prevIndex = i - 1
    current = nums[i]

    while (prevIndex >= 0 && nums[prevIndex] > current) {
      nums[prevIndex + 1] = nums[prevIndex]
      prevIndex--
    }

    nums[prevIndex + 1] = current
  }

  return nums
}
