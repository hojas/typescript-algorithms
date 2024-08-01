import { describe, expect, it } from 'vitest'
import { BinaryTreeNode } from './BinaryTreeNode'
import { isBST } from './BinarySearchTree'

describe('binary Search Tree', () => {
  it('should return true for a valid BST', () => {
    const root = new BinaryTreeNode(4)
    root.left = new BinaryTreeNode(2)
    root.right = new BinaryTreeNode(6)

    root.left.left = new BinaryTreeNode(1)
    root.left.right = new BinaryTreeNode(3)

    root.right.left = new BinaryTreeNode(5)
    root.right.right = new BinaryTreeNode(7)

    expect(isBST(root)).toBe(true)
  })

  it('should return false for an invalid BST', () => {
    const root = new BinaryTreeNode(4)
    root.left = new BinaryTreeNode(2)
    root.right = new BinaryTreeNode(6)

    root.left.left = new BinaryTreeNode(1)
    root.left.right = new BinaryTreeNode(3)

    root.right.left = new BinaryTreeNode(5)
    root.right.right = new BinaryTreeNode(7)

    root.right.right.left = new BinaryTreeNode(8) // invalid BST

    expect(isBST(root)).toBe(false)
  })
})
