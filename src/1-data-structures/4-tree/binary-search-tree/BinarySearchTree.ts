import { BinaryTreeNode } from '../binary-tree/BinaryTreeNode'

export class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value: number | null) {
    super(value)
  }

  insert(value: number) {
    if (this.value === null) {
      this.value = value
      return this
    }

    if (value < this.value) {
      if (this.left)
        return this.left.insert(value)

      const newNode = new BinarySearchTreeNode(value)
      this.setLeft(newNode)
      return newNode
    }

    if (value > this.value) {
      if (this.right)
        return this.right.insert(value)

      const newNode = new BinarySearchTreeNode(value)
      this.setRight(newNode)
      return newNode
    }

    return this
  }

  find(value: number) {
    if (this.value === null)
      return null

    if (this.value === value)
      return this

    if (value < this.value && this.left)
      return this.left.find(value)

    if (value > this.value && this.right)
      return this.right.find(value)

    return null
  }

  contains(value: number) {
    return !!this.find(value)
  }

  remove(value: number) {
    const nodeToRemove = this.find(value)

    // node not found
    if (!nodeToRemove)
      throw new Error('Item not found in the 4-tree')

    const { parent } = nodeToRemove

    // node has no children
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent)
        parent.removeChild(nodeToRemove)
      else
        // node is root
        nodeToRemove.setValue(null)
    }
    // node has both children
    else if (nodeToRemove.left && nodeToRemove.right) {
      // find next bigger value (minimum value in the right branch)
      // and replace current value node with that next bigger value
      const nextBiggerNode = nodeToRemove.right.findMin()
      if (nextBiggerNode !== nodeToRemove.right) {
        this.remove(nextBiggerNode.value)
        nodeToRemove.setValue(nextBiggerNode.value)
      }
      else {
        nodeToRemove.setValue(nodeToRemove.right.value)
        nodeToRemove.setRight(nodeToRemove.right.right)
      }
    }
    else {
      const childNode = nodeToRemove.left || nodeToRemove.right
      if (parent)
        parent.replaceChild(nodeToRemove, childNode)
      else
        BinaryTreeNode.copyNode(childNode, nodeToRemove)
    }

    nodeToRemove.parent = null
    return true
  }

  findMin() {
    return this.left ? this.left.findMin() : this
  }
}

export class BinarySearchTree {
  root: BinarySearchTreeNode

  constructor() {
    this.root = new BinarySearchTreeNode(null)
  }

  insert(value: number) {
    return this.root.insert(value)
  }

  contains(value: number) {
    return this.root.contains(value)
  }

  remove(value: number) {
    return this.root.remove(value)
  }

  toString() {
    return this.root.toString()
  }
}
