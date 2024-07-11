/**
 * Heap Sort
 *
 * O(nlogn)
 * Unstable
 *
 * @param nums
 */
export function heapSort(nums: number[]): number[] {
  const n = nums.length

  // Build max heap
  for (let i = (n >> 1) - 1; i >= 0; i--) {
    heapify(nums, n, i)
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i >= 0; i--) {
    // Move current root to end
    [nums[0], nums[i]] = [nums[i], nums[0]]

    // call max heapify on the reduced heap
    heapify(nums, i, 0)
  }

  return nums
}

function heapify(nums: number[], n: number, i: number) {
  let largest = i // Initialize largest as root
  const left = 2 * i + 1 // left = 2*i + 1
  const right = 2 * i + 2 // right = 2*i + 2

  // If left child is larger than root
  if (left < n && nums[left] > nums[largest]) {
    largest = left
  }

  // If right child is larger than largest so far
  if (right < n && nums[right] > nums[largest]) {
    largest = right
  }

  // If largest is not root
  if (largest !== i) {
    [nums[i], nums[largest]] = [nums[largest], nums[i]] // swap

    // Recursively heapify the affected sub-4-tree
    heapify(nums, n, largest)
  }
}
