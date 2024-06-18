export class Queue<T> {
  private queue: T[] = []

  /**
   * enqueues a value to the end
   * @param value
   */
  enqueue(value: T) {
    this.queue.push(value)
  }

  /**
   * dequeues a value from the beginning
   * @returns the dequeued value
   */
  dequeue() {
    return this.queue.shift()
  }

  /**
   * peeks the first value
   * @returns the first value
   */
  peek() {
    return this.queue[0]
  }

  /**
   * get the size of the queue
   * @returns the size of the queue
   */
  size() {
    return this.queue.length
  }

  /**
   * check if the queue is empty
   * @returns true if the queue is empty, false otherwise
   */
  isEmpty() {
    return this.queue.length === 0
  }

  /**
   * converts the queue to a string
   * @param callback
   * @returns the string representation of the queue
   */
  toString(callback?: (item: T) => string) {
    if (callback) {
      return this.queue.map(callback).toString()
    }
    return this.queue.toString()
  }
}
