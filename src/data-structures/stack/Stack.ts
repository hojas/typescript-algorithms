export class Stack {
  private items: any[] = []

  push(item: any) {
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

  toString(callback?: (item: any) => string) {
    const list = this.items.toReversed()
    if (callback)
      return list.map(callback).toString()
    return list.toString()
  }
}
