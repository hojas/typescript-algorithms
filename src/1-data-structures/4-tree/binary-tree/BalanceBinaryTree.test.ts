import { describe, expect, it } from 'vitest'
import { BinaryTreeNode } from './BinaryTreeNode'
import { isBalancedBinaryTree } from './BalancedBinaryTree'

describe('balanced Binary Tree', () => {
  it('should return true for a balanced binary tree', () => {
    const root = new BinaryTreeNode(1)
    root.left = new BinaryTreeNode(2)
    root.right = new BinaryTreeNode(3)

    root.left.left = new BinaryTreeNode(4)

    expect(isBalancedBinaryTree(root)).toBe(true)
  })

  it ('should return false for an unbalanced binary tree', () => {
    const root = new BinaryTreeNode(1)

    root.left = new BinaryTreeNode(2)
    root.right = new BinaryTreeNode(3)

    root.left.left = new BinaryTreeNode(4)
    root.left.right = new BinaryTreeNode(5)

    root.right.left = new BinaryTreeNode(6)
    root.right.right = new BinaryTreeNode(7)

    root.right = new BinaryTreeNode(8)
    root.right.left = new BinaryTreeNode(10)

    root.right.left.left = new BinaryTreeNode(9)

    expect(isBalancedBinaryTree(root)).toBe(false)
  })
})
