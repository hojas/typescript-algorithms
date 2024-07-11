export class LinkedListNode<T> {
  value: T | null
  next: LinkedListNode<T> | null

  constructor(value: T | null = null) {
    this.value = value
    this.next = null
  }

  toString() {
    return `${this.value}`
  }
}

export class LinkedList<T> {
  head: LinkedListNode<T>
  size: number

  constructor() {
    this.head = new LinkedListNode()
    this.size = 0
  }

  /**
   * Get the node at the specified index.
   * @param index
   * @returns the node at the specified index, or null if the index is out of range.
   */
  get(index: number): LinkedListNode<T> | null {
    if (index < 0 || index >= this.size) {
      return null
    }

    let currentNode = this.head
    for (let i = 0; i <= index; i++) {
      currentNode = currentNode.next as LinkedListNode<T>
    }

    return currentNode
  }

  /**
   * Add a new node to the head of the list.
   * @param value
   */
  addAtHead(value: T) {
    this.addAtIndex(0, value)
  }

  /**
   * Add a new node to the tail of the list.
   * @param value
   */
  addAtTail(value: T) {
    this.addAtIndex(this.size, value)
  }

  /**
   * Add a new node to the list at the specified index.
   * @param index
   * @param value
   */
  addAtIndex(index: number, value: T): void {
    if (index >= 0 && index <= this.size) {
      let prev: LinkedListNode<T> = this.head
      if (index > 0) {
        prev = this.get(index - 1) as LinkedListNode<T>
      }

      const newNode = new LinkedListNode(value)
      newNode.next = prev.next
      prev.next = newNode
      this.size++
    }
  }

  /**
   * Delete the node at the specified index.
   * @param index
   */
  deleteAtIndex(index: number) {
    if (index >= 0 && index < this.size) {
      let prev = this.head
      if (index > 0) {
        prev = this.get(index - 1) as LinkedListNode<T>
      }

      prev.next = prev.next!.next
      this.size--
    }
  }

  /**
   * Find the first occurrence of the specified value in this list.
   * @param value
   * @returns the node containing the specified value, or null if the value is not found.
   */
  find(value: T): LinkedListNode<T> | null {
    let node = this.head.next

    while (node !== null && node.value !== value) {
      node = node.next
    }

    return node
  }

  /**
   * Delete the first occurrence of the specified value in this list.
   * @param value
   */
  deleteValue(value: T) {
    let prevNode: LinkedListNode<T> | null = null
    let currentNode: LinkedListNode<T> | null = this.head

    while (currentNode !== null && currentNode.value !== value) {
      prevNode = currentNode
      currentNode = currentNode.next
    }

    if (currentNode) {
      if (prevNode) {
        prevNode.next = currentNode.next
      }
      else {
        this.head.next = currentNode.next
      }
    }
  }

  toString() {
    const arr: LinkedListNode<T>[] = []

    let currentNode = this.head
    while (currentNode.next) {
      arr.push(currentNode.next)
      currentNode = currentNode.next
    }
    return arr.map(v => v.toString()).join(',')
  }
}
