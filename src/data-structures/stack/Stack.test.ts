import { describe, expect, it } from 'vitest'
import { Stack } from './Stack'

describe('stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack()

    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)
  })

  it('should push items to stack', () => {
    const stack = new Stack()

    stack.push(1)
    expect(stack.size()).toBe(1)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.toString()).toBe('1')

    stack.push(2)
    expect(stack.size()).toBe(2)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.toString()).toBe('2,1')
  })

  it('should pop items from stack', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)

    expect(stack.pop()).toBe(2)
    expect(stack.size()).toBe(1)
    expect(stack.pop()).toBe(1)
    expect(stack.size()).toBe(0)
    expect(stack.pop()).toBe(undefined)
    expect(stack.isEmpty()).toBe(true)
  })

  it('should peek data from stack', () => {
    const stack = new Stack()

    expect(stack.peek()).toBe(undefined)

    stack.push(1)
    stack.push(2)

    expect(stack.peek()).toBe(2)
    expect(stack.size()).toBe(2)
  })

  it('should check if stack is empty', () => {
    const stack = new Stack()

    expect(stack.isEmpty()).toBe(true)

    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
  })

  it('should clear the stack', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)

    stack.clear()
    expect(stack.isEmpty()).toBe(true)
    expect(stack.size()).toBe(0)
  })

  it('should be possible to push/pop objects', () => {
    const stack = new Stack()

    stack.push({ value: 'test1', key: 'key1' })
    stack.push({ value: 'test2', key: 'key2' })

    const stringifier = (value: any) => `${value.key}:${value.value}`
    expect(stack.toString(stringifier)).toBe('key2:test2,key1:test1')
    expect(stack.pop().value).toBe('test2')
    expect(stack.pop().value).toBe('test1')
  })
})
