import type { BinaryTreeNode } from './BinaryTreeNode'

export function isBST(root: BinaryTreeNode | null, leftValue = -Infinity, rightValue = Infinity): boolean {
  if (root === null) {
    return true
  }

  return leftValue < root.value
    && root.value < rightValue
    && isBST(root.left, leftValue, root.value)
    && isBST(root.right, root.value, rightValue)
}
