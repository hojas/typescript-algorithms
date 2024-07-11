export class BinaryTreeNode {
  public value: number | null
  public left: BinaryTreeNode | null
  public right: BinaryTreeNode | null
  public parent: BinaryTreeNode | null

  constructor(value: number | null = null) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }

  get leftHeight(): number {
    if (!this.left)
      return 0

    return this.left.height + 1
  }

  get rightHeight(): number {
    if (!this.right)
      return 0

    return this.right.height + 1
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }

  static copyNode(sourceNode: BinaryTreeNode, targetNode: BinaryTreeNode) {
    targetNode.setValue(sourceNode.value)
    targetNode.setLeft(sourceNode.left)
    targetNode.setRight(sourceNode.right)
  }

  setValue(value: number | null) {
    this.value = value
    return this
  }

  setLeft(node: BinaryTreeNode | null) {
    if (this.left)
      this.left.parent = null

    this.left = node

    if (this.left)
      this.left.parent = this

    return this
  }

  setRight(node: BinaryTreeNode | null) {
    if (this.right)
      this.right.parent = null

    this.right = node

    if (this.right)
      this.right.parent = this

    return this
  }

  removeChild(nodeToRemove: BinaryTreeNode) {
    if (this.left && this.left === nodeToRemove) {
      this.left = null
      return true
    }

    if (this.right && this.right === nodeToRemove) {
      this.right = null
      return true
    }

    return false
  }

  replaceChild(nodeToReplace: BinaryTreeNode, replacementNode: BinaryTreeNode) {
    if (!nodeToReplace || !replacementNode)
      return false

    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode
      return true
    }

    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode
      return true
    }

    return false
  }

  traverseInOrder() {
    let traverse: number[] = []

    if (this.left)
      traverse = traverse.concat(this.left.traverseInOrder())

    traverse.push(this.value!)

    if (this.right)
      traverse = traverse.concat(this.right.traverseInOrder())

    return traverse
  }

  toString() {
    return this.traverseInOrder().toString()
  }
}
