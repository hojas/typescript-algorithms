import { DoublyLinkedListNode } from './DoublyLinkedListNode'

export class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T>
  tail: DoublyLinkedListNode<T>
  size: number

  constructor() {
    this.head = new DoublyLinkedListNode()
    this.tail = new DoublyLinkedListNode()
    this.head.next = this.tail
    this.tail.previous = this.head
    this.size = 0
  }

  /**
   * Get the node at the specified index.
   * @param index
   * @returns the node at the specified index, or null if the index is out of range.
   */
  get(index: number) {
    if (index < 0 || index >= this.size) {
      return null
    }

    let currentNode = this.head
    while (index--) {
      currentNode = currentNode.next as DoublyLinkedListNode<T>
    }
    return currentNode.next
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
  addAtIndex(index: number, value: T) {
    if (index < 0 || index > this.size) {
      return
    }

    let prev: DoublyLinkedListNode<T>, found: DoublyLinkedListNode<T>
    if (index === this.size) {
      found = this.tail
      prev = this.tail.previous as DoublyLinkedListNode<T>
    }
    else {
      found = this.get(index) as DoublyLinkedListNode<T>
      prev = found.previous as DoublyLinkedListNode<T>
    }

    const newNode = new DoublyLinkedListNode(value)
    newNode.previous = prev
    newNode.next = found
    prev.next = newNode
    found.previous = newNode
    this.size++
  }

  /**
   * Delete the node at the specified index.
   * @param index
   */
  deleteAtIndex(index: number) {
    if (index < 0 || index >= this.size) {
      return
    }

    const found = this.get(index) as DoublyLinkedListNode<T>
    const prev = found.previous as DoublyLinkedListNode<T>

    prev.next = found.next
    if (found.next) {
      found.next.previous = prev
    }
    this.size--
  }

  /**
   * Find the node with the specified value.
   * @param value
   * @returns the node with the specified value, or null if the value is not found.
   */
  find(value: number) {
    let node = this.head
    while (node.next !== null && node.value !== value) {
      node = node.next
    }
    return node
  }

  /**
   * Delete all occurrences of the specified value from the list.
   * @param value
   */
  deleteValue(value: number) {
    // let prevNode: DoublyLinkedListNode<T> | null = null
    // let currentNode: DoublyLinkedListNode<T> | null = this.head
    //
    // while (currentNode !== null && currentNode.value !== value) {
    //   prevNode = currentNode
    //   currentNode = currentNode.next
    // }
    //
    // if (currentNode) {
    //   if (prevNode) {
    //     prevNode.next = currentNode.next
    //   }
    //   else {
    //     this.head.next = currentNode.next
    //   }
    //
    //   currentNode.previous!.next = currentNode.next
    //   currentNode.next!.previous = currentNode.previous
    //   this.size--
    // }

    let currentNode = this.head
    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next

        if (currentNode.next) {
          currentNode.next.previous = currentNode
        }
        else {
          this.tail.previous = currentNode
          this.tail = currentNode
        }
        this.size--
      }
      else {
        currentNode = currentNode.next as DoublyLinkedListNode<T>
      }
    }
  }

  toString() {
    const arr: DoublyLinkedListNode<T>[] = []

    let currentNode = this.head
    while (currentNode.next && currentNode.next.value !== null) {
      arr.push(currentNode.next)
      currentNode = currentNode.next
    }
    return arr.map(v => v.toString()).join(',')
  }
}
