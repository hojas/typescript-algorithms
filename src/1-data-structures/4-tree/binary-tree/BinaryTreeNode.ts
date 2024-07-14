export class BinaryTreeNode {
  public value: number
  public left: BinaryTreeNode | null
  public right: BinaryTreeNode | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

/**
 * Level order traversal of a binary tree.
 * @param root
 */
export function levelOrder(root: BinaryTreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const res: number[][] = []
  const q = [root]

  while (q.length) {
    const len = q.length
    const level = []

    for (let i = 0; i < len; i++) {
      const node = q.shift() as BinaryTreeNode
      level.push(node.value)

      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
  }

  return res
}

/**
 * Preorder traversal of a binary tree.
 * @param root
 * @param res
 */
export function preorderTraversal(root: BinaryTreeNode | null, res: number[] = []): number[] {
  if (!root) {
    return res
  }

  res.push(root.value)
  preorderTraversal(root.left, res)
  preorderTraversal(root.right, res)

  return res
}

/**
 * Inorder traversal of a binary tree.
 * @param root
 * @param res
 */
export function inorderTraversal(root: BinaryTreeNode | null, res: number[] = []): number[] {
  if (!root) {
    return res
  }

  inorderTraversal(root.left, res)
  res.push(root.value)
  inorderTraversal(root.right, res)

  return res
}

/**
 * Postorder traversal of a binary tree.
 * @param root
 * @param res
 */
export function postorderTraversal(root: BinaryTreeNode | null, res: number[] = []): number[] {
  if (!root) {
    return res
  }

  postorderTraversal(root.left, res)
  postorderTraversal(root.right, res)
  res.push(root.value)

  return res
}
