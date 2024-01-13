export class LinkedListNode {
  value: number
  next: LinkedListNode | null

  /**
   * LinkedListNode constructor
   * @param value
   * @param next
   */
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
  tail: LinkedListNode | null

  /**
   * LinkedList constructor
   */
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * prepend a node to the linked list
   * @param value
   * @returns the linked list
   */
  prepend(value: number) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail)
      this.tail = newNode

    return this
  }

  /**
   * append a node to the linked list
   * @param value
   * @returns the linked list
   */
  append(value: number) {
    const newNode = new LinkedListNode(value)

    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
   * insert a node to the linked list
   * @param value
   * @param index
   */
  insert(value: number, index: number) {
    if (index <= 0)
      return this.prepend(value)

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
   */
  find(value: number) {
    if (!this.head || !this.tail)
      return null

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value)
        return currentNode

      if (currentNode.next)
        currentNode = currentNode.next
      else
        return null
    }

    return null
  }

  /**
   * delete a node from the linked list
   * @param value
   */
  delete(value: number) {
    if (!this.head || !this.tail)
      return null

    let currentNode: LinkedListNode | null = this.head
    let deletedNode = null

    // if the head node is the node to be deleted
    while (currentNode && currentNode.value === value) {
      deletedNode = currentNode
      this.head = currentNode.next
      currentNode = currentNode.next
    }

    // find the node before the node to be deleted
    while (currentNode?.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next
        currentNode.next = currentNode.next.next
      }
      else {
        currentNode = currentNode.next
      }
    }

    // if the tail node is the node to be deleted
    if (this.tail?.value === value)
      this.tail = currentNode

    return deletedNode
  }

  /**
   * delete head node from the linked list
   */
  deleteHead() {
    if (!this.head)
      return null

    const head = this.head

    if (this.head.next) {
      this.head = this.head.next
    }
    else {
      this.head = null
      this.tail = null
    }

    return head
  }

  /**
   * delete head node from the linked list
   */
  deleteTail() {
    const tail = this.tail

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return tail
    }

    let currentNode = this.head

    // find the node before the tail
    while (currentNode) {
      // if the next node is the tail
      if (currentNode.next === this.tail) {
        currentNode.next = null
        this.tail = currentNode
      }
      // to next node
      currentNode = currentNode.next
    }

    return tail
  }

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
