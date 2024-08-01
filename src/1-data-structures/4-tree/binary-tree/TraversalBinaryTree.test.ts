import { describe, expect, it } from 'vitest'
import { BinaryTreeNode } from './BinaryTreeNode'
import {
  inorderTraversal,
  levelOrder,
  postorderTraversal,
  preorderTraversal,
} from './TraversalBinaryTree'

function createBinaryTree() {
  const root = new BinaryTreeNode(1)
  root.left = new BinaryTreeNode(2)
  root.right = new BinaryTreeNode(3)
  root.left.left = new BinaryTreeNode(4)
  root.left.right = new BinaryTreeNode(5)
  root.right.left = new BinaryTreeNode(6)
  root.right.right = new BinaryTreeNode(7)
  return root
}

describe('binaryTreeNode', () => {
  it('should preorderTraversal', () => {
    const root = createBinaryTree()
    const res = preorderTraversal(root)
    expect(res).toEqual([1, 2, 4, 5, 3, 6, 7])
  })

  it('should inorderTraversal', () => {
    const root = createBinaryTree()
    const res = inorderTraversal(root)
    expect(res).toEqual([4, 2, 5, 1, 6, 3, 7])
  })

  it('should postorderTraversal', () => {
    const root = createBinaryTree()
    const res = postorderTraversal(root)
    expect(res).toEqual([4, 5, 2, 6, 7, 3, 1])
  })

  it('should level order traversal', () => {
    const root = createBinaryTree()
    const res = levelOrder(root)
    expect(res).toEqual([[1], [2, 3], [4, 5, 6, 7]])
  })
})
