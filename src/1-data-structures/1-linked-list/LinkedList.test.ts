import { describe, expect, it } from 'vitest'
import { LinkedList as List } from './LinkedList'

describe('linkedList', () => {
  it('should create an empty linked list', () => {
    const list = new List()

    expect(list.head).toBe(null)
    expect(list.toString()).toBe('')
  })

  it('should prepend a node to the linked list', () => {
    const list = new List()

    list.prepend(1)
    expect(list.head?.value).toBe(1)
    expect(list.toString()).toBe('1')

    list.prepend(2)
    expect(list.head?.value).toBe(2)
    expect(list.toString()).toBe('2,1')

    list.prepend(3)
    expect(list.head?.value).toBe(3)
    expect(list.toString()).toBe('3,2,1')
  })

  it('should append a node to the linked list', () => {
    const list = new List()

    list.append(1)
    expect(list.head?.value).toBe(1)
    expect(list.toString()).toBe('1')

    list.append(2)
    expect(list.head?.value).toBe(1)
    expect(list.toString()).toBe('1,2')

    list.append(3)
    expect(list.head?.value).toBe(1)
    expect(list.toString()).toBe('1,2,3')
  })

  it('should insert a node to the linked list', () => {
    const list = new List()

    list.insert(4, 3)
    expect(list.head?.value).toBe(4)

    list.insert(3, 2)
    list.insert(2, 1)
    list.insert(1, -7)
    list.insert(10, 9)

    expect(list.head?.value).toBe(1)
    expect(list.toString()).toBe('1,4,2,3,10')
  })

  it('should find a node by value', () => {
    const list = new List()

    list.append(1)
    list.append(2)
    list.append(3)

    expect(list.find(1)?.value).toBe(1)
    expect(list.find(2)?.value).toBe(2)
    expect(list.find(3)?.value).toBe(3)
  })

  it('should delete a node by value from the linked list', () => {
    const list = new List()

    list.append(1)
    list.append(1)
    list.append(2)
    list.append(2)
    list.append(3)
    list.append(3)
    list.append(4)
    list.append(5)

    expect(list.toString()).toBe('1,1,2,2,3,3,4,5')

    list.delete(3)
    expect(list.toString()).toBe('1,1,2,2,4,5')

    list.delete(1)
    expect(list.toString()).toBe('2,2,4,5')

    list.delete(5)
    expect(list.toString()).toBe('2,2,4')

    list.delete(4)
    expect(list.toString()).toBe('2,2')

    list.delete(2)
    expect(list.head).toBe(null)
    expect(list.toString()).toBe('')
  })

  it('should delete linked list head', () => {
    const list = new List()

    list.append(1)
    list.append(2)
    list.append(3)

    expect(list.head?.value).toBe(1)
    expect(list.toString()).toBe('1,2,3')

    list.deleteHead()
    expect(list.head?.value).toBe(2)
    expect(list.toString()).toBe('2,3')

    list.deleteHead()
    expect(list.head?.value).toBe(3)
    expect(list.toString()).toBe('3')

    list.deleteHead()
    expect(list.head).toBe(null)
    expect(list.toString()).toBe('')
  })
})
