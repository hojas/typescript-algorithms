export class DoublyLinkedListNode<T> {
  value: T | null
  previous: DoublyLinkedListNode<T> | null
  next: DoublyLinkedListNode<T> | null

  constructor(
    value: T | null = null,
    previous: DoublyLinkedListNode<T> | null = null,
    next: DoublyLinkedListNode<T> | null = null,
  ) {
    this.value = value
    this.previous = previous
    this.next = next
  }

  toString() {
    return `${this.value}`
  }
}
