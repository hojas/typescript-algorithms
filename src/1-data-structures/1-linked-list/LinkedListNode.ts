/**
 * LinkedListNode class
 * @param T value
 * @param LinkedListNode<T> next
 * @constructor
 */
export class LinkedListNode<T> {
  value: T | null
  next: LinkedListNode<T> | null

  constructor(value: T | null = null, next: LinkedListNode<T> | null = null) {
    this.value = value
    this.next = next
  }

  toString() {
    return `${this.value}`
  }
}
