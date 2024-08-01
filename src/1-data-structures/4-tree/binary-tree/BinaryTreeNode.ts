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
