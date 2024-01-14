export class Stack<T> {
  private items: T[] = []

  push(item: T) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }

  toString(callback?: (item: T) => string) {
    const list = this.items.toReversed()
    if (callback)
      return list.map(callback).toString()
    return list.toString()
  }
}
