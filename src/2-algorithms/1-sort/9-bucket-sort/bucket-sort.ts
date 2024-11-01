/**
 * Bucket Sort 桶排序
 *
 * 基本思想：
 * 1. 将数组分到有限数量的桶中
 * 2. 对每个桶进行排序
 * 3. 合并所有桶
 *
 * 时间复杂度: O(n+k)，其中n是元素个数，k是桶的数量
 * 空间复杂度: O(n+k)
 * 稳定性: 稳定
 */
export function bucketSort(nums: number[]): number[] {
  // 处理边界情况：空数组或单元素数组直接返回
  if (nums.length <= 1)
    return nums

  // 找出数组的最小值和最大值，用于确定桶的范围
  const [minValue, maxValue] = findMinMax(nums)

  // 计算桶的数量和大小
  // bucketCount：通常取数组长度，可以根据实际情况调整
  // bucketSize：每个桶的取值范围大小
  const bucketCount = nums.length
  const bucketSize = (maxValue - minValue) / bucketCount + 1

  // 创建桶并将元素分配到对应的桶中
  const buckets = createBuckets(nums, bucketSize, minValue, bucketCount)

  // 对每个非空桶进行排序
  sortBuckets(buckets)

  // 合并所有桶中的元素，得到最终排序结果
  return mergeBuckets(buckets)
}

/**
 * 找出数组中的最小值和最大值
 * @param nums 输入数组
 * @returns [最小值, 最大值]的元组
 */
function findMinMax(nums: number[]): [number, number] {
  let min = nums[0]
  let max = nums[0]

  // 遍历数组找出最小值和最大值
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min)
      min = nums[i]
    if (nums[i] > max)
      max = nums[i]
  }

  return [min, max]
}

/**
 * 创建桶并将元素分配到对应的桶中
 * @param nums 输入数组
 * @param bucketSize 每个桶的大小范围
 * @param minValue 数组最小值
 * @param bucketCount 桶的数量
 * @returns 分配好元素的桶数组
 */
function createBuckets(
  nums: number[],
  bucketSize: number,
  minValue: number,
  bucketCount: number,
): number[][] {
  // 创建指定数量的空桶
  const buckets: number[][] = Array.from(
    { length: bucketCount },
    () => [],
  )

  // 将每个元素分配到对应的桶中
  for (const num of nums) {
    // 计算元素应该放入哪个桶
    const index = Math.floor((num - minValue) / bucketSize)
    // 处理边界情况，防止index越界
    const bucketIndex = Math.min(index, bucketCount - 1)
    buckets[bucketIndex].push(num)
  }

  return buckets
}

/**
 * 对每个非空桶进行排序
 * @param buckets 桶数组
 */
function sortBuckets(buckets: number[][]): void {
  // 对每个非空桶使用内置排序算法进行排序
  for (const bucket of buckets) {
    if (bucket.length > 0) {
      bucket.sort((a, b) => a - b)
    }
  }
}

/**
 * 合并所有桶中的元素
 * @param buckets 已排序的桶数组
 * @returns 最终排序结果
 */
function mergeBuckets(buckets: number[][]): number[] {
  // 使用flat()方法将二维数组压平成一维数组
  return buckets.flat()
}
