/**
 * Merge Sort
 *
 * O(nlogn)
 * Stable
 *
 * @param nums
 */
export function mergeSort(nums: number[]): number[] {
  const len = nums.length

  if (len <= 1) {
    return nums
  }

  const mid = len >> 1
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number)
    }
    else {
      result.push(right.shift() as number)
    }
  }

  while (left.length) {
    result.push(left.shift() as number)
  }

  while (right.length) {
    result.push(right.shift() as number)
  }

  return result
}
