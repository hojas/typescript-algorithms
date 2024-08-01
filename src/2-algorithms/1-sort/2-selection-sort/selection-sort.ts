/**
 * Selection Sort
 *
 * Selection sort is a simple sorting algorithm that works by repeatedly
 * finding the minimum element from the unsorted part of the array and
 * swapping it with the first element of the unsorted part.
 *
 * O(n^2)
 * Unstable
 *
 * @param nums
 * @returns sorted nums
 */
export function selectionSort(nums: number[]) {
  const len = nums.length
  let minIndex

  // One by one move boundary of unsorted subarray
  for (let i = 0; i < len - 1; i++) {
    minIndex = i

    // Find the minimum element in the remaining unsorted array
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }

    // Swap the minimum element with the first element of the unsorted array
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }

  return nums
}
