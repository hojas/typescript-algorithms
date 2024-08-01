import type { BinaryTreeNode } from './BinaryTreeNode.ts'

export function getHeight(root: BinaryTreeNode | null): number {
  if (root === null) {
    return 0
  }

  const leftHeight = getHeight(root.left)
  if (leftHeight === -1) {
    return -1
  }

  const rightHeight = getHeight(root.right)
  if (rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1
  }

  return Math.max(leftHeight, rightHeight) + 1
}
