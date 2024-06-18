export class DoublyLinkedListNode {
  value: number
  previous: DoublyLinkedListNode | null
  next: DoublyLinkedListNode | null

  constructor(
    value: number,
    next: DoublyLinkedListNode | null = null,
    previous: DoublyLinkedListNode | null = null,
  ) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  toString() {
    return `${this.value}`
  }
}

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null

  constructor(head = null) {
    this.head = head
  }

  /**
   * prepend a node to the doubly linked list
   * @param value
   * @returns the doubly linked list
   */
  prepend(value: number) {
    this.head = new DoublyLinkedListNode(value, this.head)

    if (this.head.next) {
      this.head.next.previous = this.head
    }

    return this
  }

  /**
   * append a node to the doubly linked list
   * @param value
   * @returns the doubly linked list
   */
  append(value: number) {
    let currentNode = this.head
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next
    }

    const newNode = new DoublyLinkedListNode(value)
    if (currentNode) {
      currentNode.next = newNode
      currentNode.next.previous = currentNode
    }
    else {
      this.head = newNode
    }

    return this
  }

  /**
   * insert a node to the doubly linked list
   * @param value
   * @param index
   * @returns the doubly linked list
   */
  insert(value: number, index: number) {
    if (index <= 0) {
      return this.prepend(value)
    }

    const newNode = new DoublyLinkedListNode(value)
    let currentNode = this.head
    let currentIndex = 0

    while (currentNode && currentIndex !== index - 1) {
      currentNode = currentNode.next
      currentIndex++
    }

    if (currentNode) {
      newNode.next = currentNode.next
      newNode.previous = currentNode
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
   * @returns the node if found else null
   */
  find(value: number) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }

  /**
   * delete nodes from the doubly linked list
   * @param value
   * @returns the doubly linked list
   */
  delete(value: number) {
    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }

    if (!this.head) {
      return this
    }

    this.head.previous = null

    let prevNode: DoublyLinkedListNode | null = this.head
    let currentNode: DoublyLinkedListNode | null = this.head?.next || null

    while (currentNode) {
      if (currentNode.value === value) {
        prevNode.next = currentNode.next
        if (prevNode.next) {
          prevNode.next.previous = prevNode
        }
        currentNode = prevNode.next
      }
      else {
        prevNode = currentNode
        currentNode = currentNode.next
      }
    }

    return this
  }

  /**
   * delete the head of the doubly linked list
   * @returns the doubly linked list
   */
  deleteHead() {
    if (!this.head) {
      return this
    }

    this.head = this.head.next

    if (this.head) {
      this.head.previous = null

      if (this.head.next) {
        this.head.next.previous = this.head
      }
    }

    return this
  }

  /**
   * convert the doubly linked list to a string
   * @returns the string representation of the doubly linked list nodes
   */
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
