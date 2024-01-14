export class Queue<T> {
  private queue: T[] = []

  public enqueue(value: T) {
    this.queue.push(value)
  }

  public dequeue() {
    return this.queue.shift()
  }

  public peek() {
    return this.queue[0]
  }

  public size() {
    return this.queue.length
  }

  public isEmpty() {
    return this.queue.length === 0
  }

  toString(callback?: (item: T) => string) {
    if (callback)
      return this.queue.map(callback).toString()
    return this.queue.toString()
  }
}
