export class DoublyLinkedListNode {
  value: number
  next: DoublyLinkedListNode | null
  previous: DoublyLinkedListNode | null

  /**
   * DoublyLinkedListNode constructor
   * @param value
   * @param next
   * @param previous
   */
  constructor(
    value: number,
    next?: DoublyLinkedListNode | null,
    previous?: DoublyLinkedListNode | null,
  ) {
    this.value = value
    this.next = next === undefined ? null : next
    this.previous = previous === undefined ? null : previous
  }

  toString() {
    return `${this.value}`
  }
}

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null
  tail: DoublyLinkedListNode | null

  /**
   * DoublyLinkedList constructor
   */
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * prepend a node to the doubly linked list
   * @param value
   */
  prepend(value: number) {
    const newNode = new DoublyLinkedListNode(value, this.head)

    // if head exists
    if (this.head)
      this.head.previous = newNode
    this.head = newNode

    // if tail is null
    if (!this.tail)
      this.tail = newNode

    return this
  }

  /**
   * append a node to the doubly linked list
   * @param value
   */
  append(value: number) {
    const newNode = new DoublyLinkedListNode(value)

    // if tail exists
    if (this.tail) {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }
    // if tail is null
    else {
      this.head = newNode
      this.tail = newNode
    }

    return this
  }

  /**
   * insert a node to the doubly linked list
   * @param value
   * @param index
   */
  insert(value: number, index: number) {
    if (index <= 0)
      return this.prepend(value)

    const newNode = new DoublyLinkedListNode(value)
    let currentNode = this.head
    let currentIndex = 0

    while (currentNode && currentIndex !== index - 1) {
      currentNode = currentNode.next
      currentIndex++
    }

    if (currentNode) {
      newNode.next = currentNode.next
      currentNode.next = newNode
    }
    else {
      this.append(value)
    }

    return this
  }

  /**
   * find a node in the doubly linked list
   * @param value
   */
  find(value: number) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value)
        return currentNode

      currentNode = currentNode.next
    }

    return null
  }

  /**
   * delete a node from the doubly linked list
   * @param value
   */
  delete(value: number) {
    let currentNode = this.head
    let deletedNode: DoublyLinkedListNode | null = null

    while (currentNode) {
      // if head is the node to be deleted
      if (currentNode?.value === value) {
        if (this.head === currentNode) {
          this.head = currentNode.next
          if (this.head)
            this.head.previous = null
          else
            this.tail = null
        }
        // if tail is the node to be deleted
        else if (this.tail === currentNode) {
          this.tail = currentNode.previous
          if (this.tail)
            this.tail.next = null
          else
            this.head = null
        }
        // if node is in the middle
        else {
          if (currentNode.previous)
            currentNode.previous.next = currentNode.next
          if (currentNode.next)
            currentNode.next.previous = currentNode.previous
        }

        deletedNode = currentNode
      }

      currentNode = currentNode.next
    }

    return deletedNode
  }

  /**
   * delete the head of the doubly linked list
   */
  deleteHead() {
    if (!this.head)
      return null

    const deletedHead = this.head

    this.head = this.head.next
    if (this.head?.previous)
      this.head.previous = null

    // if head is null
    if (!this.head)
      this.tail = null

    return deletedHead
  }

  /**
   * delete the tail of the doubly linked list
   */
  deleteTail() {
    if (!this.tail)
      return null

    const deletedTail = this.tail

    this.tail = this.tail.previous
    if (this.tail)
      this.tail.next = null

    // if tail is null
    if (!this.tail)
      this.head = null

    return deletedTail
  }

  toString() {
    const arr = []
    let currentNode = this.head

    while (currentNode) {
      arr.push(currentNode.toString())
      currentNode = currentNode.next
    }

    return arr.join(',')
  }
}
