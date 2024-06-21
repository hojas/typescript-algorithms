/**
 * Bucket Sort
 * 桶排序
 *
 * O(n+k)
 * Stable
 *
 *
 * @param nums
 */
export function bucketSort(nums: number[]): number[] {
  const len = nums.length

  if (len <= 1) {
    return nums
  }

  let minValue = nums[0]
  let maxValue = nums[0]
  for (let i = 1; i < len; i++) {
    minValue = Math.min(minValue, nums[i])
    maxValue = Math.max(maxValue, nums[i])
  }

  // Create buckets
  // 创建桶
  const bucketSize = Math.floor((maxValue - minValue) / len) + 1
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = Array(bucketCount)
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }

  // Divide the range of input values into k equal-sized buckets
  // 将数组元素分配到各个桶中
  for (let i = 0; i < len; i++) {
    const index = Math.floor((nums[i] - minValue) / bucketSize)
    buckets[index].push(nums[i])
  }

  // Sort each bucket using any sorting algorithm
  // 对各个桶执行排序
  for (const bucket of buckets) {
    bucket.sort((a: number, b: number) => a - b)
  }

  // Merge the sorted buckets into a single array
  // 遍历桶合并结果
  let i = 0
  for (const bucket of buckets) {
    for (const n of bucket) {
      nums[i++] = n
    }
  }

  return nums
}
