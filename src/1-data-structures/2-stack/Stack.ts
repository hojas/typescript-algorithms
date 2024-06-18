export class Stack<T> {
  private items: T[] = []

  /**
   * push an item to the stack
   * @param item
   * @returns the size of the stack
   */
  push(item: T) {
    return this.items.push(item)
  }

  /**
   * pop an item from the stack
   * @returns the popped item
   */
  pop() {
    return this.items.pop()
  }

  /**
   * peek the top item of the stack
   * @returns the top item of the stack
   */
  peek() {
    return this.items[this.items.length - 1]
  }

  /**
   * check if the stack is empty
   * @returns true if the stack is empty, false otherwise
   */
  isEmpty() {
    return this.items.length === 0
  }

  /**
   * get the size of the stack
   * @returns the size of the stack
   */
  size() {
    return this.items.length
  }

  /**
   * clear the stack
   */
  clear() {
    this.items = []
  }

  /**
   * convert the stack to a string
   * @param callback
   * @returns the string representation of the stack
   */
  toString(callback?: (item: T) => string) {
    const list = this.items.toReversed()
    if (callback) {
      return list.map(callback).toString()
    }
    return list.toString()
  }
}
