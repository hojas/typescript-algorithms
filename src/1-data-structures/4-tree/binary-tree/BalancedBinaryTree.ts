import type { BinaryTreeNode } from './BinaryTreeNode'
import { getHeight } from './BinaryTree'

export function isBalancedBinaryTree(root: BinaryTreeNode | null): boolean {
  return getHeight(root) !== -1
}
