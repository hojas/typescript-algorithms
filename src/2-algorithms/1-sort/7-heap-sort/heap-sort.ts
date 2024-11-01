/**
 * 堆排序算法
 * 时间复杂度: O(nlogn) - 建堆O(n) + n次调整O(logn)
 * 空间复杂度: O(1) - 原地排序，只需要常数个额外空间
 * 不稳定排序 - 相同元素的相对位置可能改变
 */
export function heapSort(nums: number[]): number[] {
  // 处理边界情况：空数组或只有一个元素的数组直接返回
  if (nums.length <= 1)
    return nums

  const n = nums.length

  // 第一步：构建最大堆
  // 从最后一个非叶子节点开始，自下而上进行堆化
  // (n >> 1) - 1 等价于 Math.floor(n/2) - 1，表示最后一个非叶子节点的索引
  for (let i = (n >> 1) - 1; i >= 0; i--) {
    heapify(nums, n, i)
  }

  // 第二步：依次取出堆顶元素（最大值）放到数组末尾
  for (let i = n - 1; i > 0; i--) {
    // 将堆顶元素（当前最大值）与末尾元素交换
    [nums[0], nums[i]] = [nums[i], nums[0]]

    // 交换后可能破坏了堆的性质，需要对新的堆顶元素进行堆化
    // 注意这里堆的大小减少了1（i表示新的堆大小）
    heapify(nums, i, 0)
  }

  return nums
}

/**
 * 堆化函数：维护最大堆的性质
 * @param nums - 待堆化的数组
 * @param heapSize - 堆的大小（注意不一定等于数组长度）
 * @param rootIndex - 当前需要堆化的子树的根节点索引
 */
function heapify(nums: number[], heapSize: number, rootIndex: number): void {
  while (true) {
    let largest = rootIndex // 假设根节点最大
    const left = 2 * rootIndex + 1 // 左子节点索引
    const right = 2 * rootIndex + 2 // 右子节点索引

    // 如果左子节点存在且大于当前最大值，更新最大值索引
    if (left < heapSize && nums[left] > nums[largest]) {
      largest = left
    }
    // 如果右子节点存在且大于当前最大值，更新最大值索引
    if (right < heapSize && nums[right] > nums[largest]) {
      largest = right
    }

    // 如果根节点就是最大的，说明已经满足最大堆性质，退出循环
    if (largest === rootIndex)
      break

    // 否则交换根节点与最大子节点，并继续堆化被交换的子树
    [nums[rootIndex], nums[largest]] = [nums[largest], nums[rootIndex]]
    rootIndex = largest // 更新根节点索引，继续向下堆化
  }
}
