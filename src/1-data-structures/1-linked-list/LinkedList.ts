export class LinkedListNode {
  value: number
  next: LinkedListNode | null

  constructor(value?: number, next?: LinkedListNode | null) {
    this.value = value === undefined ? 0 : value
    this.next = next === undefined ? null : next
  }

  toString() {
    return `${this.value}`
  }
}

export class LinkedList {
  head: LinkedListNode | null

  constructor(head = null) {
    this.head = head
  }

  /**
   * prepend a node to the linked list
   * @param value
   * @returns the linked list
   */
  prepend(value: number) {
    this.head = new LinkedListNode(value, this.head)
    return this
  }

  /**
   * append a node to the linked list
   * @param value
   * @returns the linked list
   */
  append(value: number) {
    const newNode = new LinkedListNode(value)

    let lastNode = this.head

    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      lastNode.next = newNode
    }
    else {
      this.head = newNode
    }

    return this
  }

  /**
   * insert a node to the linked list
   * @param value
   * @param index
   * @returns the linked list
   */
  insert(value: number, index: number) {
    if (index <= 0) {
      return this.prepend(value)
    }

    const newNode = new LinkedListNode(value)
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
   * find a node from the linked list
   * @param value
   * @returns the node if found, otherwise null
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
   * delete nodes from the linked list
   * @param value
   * @returns the linked list
   */
  delete(value: number) {
    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }

    if (!this.head) {
      return this
    }

    let prevNode: LinkedListNode | null = this.head
    let currentNode: LinkedListNode | null = this.head?.next || null

    while (currentNode) {
      if (currentNode.value === value) {
        prevNode.next = currentNode.next
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
   * delete head node from the linked list
   * @returns the linked list
   */
  deleteHead() {
    if (!this.head) {
      return this
    }

    this.head = this.head.next

    return this
  }

  /**
   * convert the linked list to a string
   * @returns the string representation of the linked list nodes
   */
  toString() {
    const arr = []
    let currentNode = this.head
    while (currentNode) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arr.map(v => v.toString()).join(',')
  }
}
