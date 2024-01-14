import { describe, expect, it } from 'vitest'
import { Queue } from './Queue'

describe('queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue()

    expect(queue).toBeDefined()
    expect(queue.toString()).toBe('')
  })

  it('should enqueue data to queue', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.toString()).toBe('1,2')
  })

  it('should peek data from queue', () => {
    const queue = new Queue()

    expect(queue.peek()).toBeUndefined()

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.peek()).toBe(1)
    expect(queue.peek()).toBe(1)
  })

  it('should check queue size', () => {
    const queue = new Queue()

    expect(queue.size()).toBe(0)

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.size()).toBe(2)
  })

  it('should check if queue is empty', () => {
    const queue = new Queue()

    expect(queue.isEmpty()).toBe(true)

    queue.enqueue(1)

    expect(queue.isEmpty()).toBe(false)
  })

  it('should dequeue data from queue', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBeUndefined()
    expect(queue.isEmpty()).toBe(true)
  })

  it('should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue<{ value: string }>()

    queue.enqueue({ value: 'test1' })
    queue.enqueue({ value: 'test2' })

    expect(queue.size()).toBe(2)
    expect(queue.dequeue()?.value).toBe('test1')
    expect(queue.dequeue()?.value).toBe('test2')
  })
})
