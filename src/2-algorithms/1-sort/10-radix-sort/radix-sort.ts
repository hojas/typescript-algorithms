/**
 * Radix Sort
 *
 * O(n * k)
 * Stable
 *
 * @param nums
 * @returns nums
 *
 */
export function radixSort(nums: number[]): number[] {
  const max = Math.max(...nums)
  const digits = Math.floor(Math.log10(max)) + 1

  for (let i = 0; i < digits; i++) {
    const buckets: number[][] = Array.from({ length: 10 }, () => [])

    for (let j = 0; j < nums.length; j++) {
      const digit = Math.floor((nums[j] / 10 ** i) % 10)
      buckets[digit].push(nums[j])
    }

    nums = buckets.flat()
  }

  return nums
}
