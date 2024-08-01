/**
 * Binary search
 * @param nums
 * @param target
 * @returns index of target in nums
 */
export function binarySearch(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = (left + right) >> 1

    if (target > nums[middle]) {
      left = middle + 1
    }
    else if (target < nums[middle]) {
      right = middle - 1
    }
    else {
      return middle
    }
  }

  return -1
}
