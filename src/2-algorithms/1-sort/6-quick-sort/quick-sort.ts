/**
 * Quick Sort
 *
 * O(nlogn)
 * Unstable
 *
 * @param nums
 */
export function quickSort(nums: number[]): number[] {
  const len = nums.length

  if (len <= 1) {
    return nums
  }

  const pivot = nums[0]
  const left = []
  const right = []

  for (let i = 1; i < len; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    }
    else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
