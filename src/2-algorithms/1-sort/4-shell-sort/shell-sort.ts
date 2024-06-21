/**
 * Shell Sort
 *
 * O(nlogn)
 * Unstable
 *
 * @param nums
 * @returns nums
 */
export function shellSort(nums: number[]) {
  const len = nums.length
  let temp
  let gap = 1

  while (gap < len / 3) { // 动态定义间隔序列
    gap = gap * 3 + 1
  }

  for (; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = nums[i]

      let j
      for (j = i - gap; j >= 0 && nums[j] > temp; j -= gap) {
        nums[j + gap] = nums[j]
      }
      nums[j + gap] = temp
    }
  }

  return nums
}
