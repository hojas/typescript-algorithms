import { describe, expect, it } from 'vitest'
import { LinkedList } from './LinkedList'

describe('linkedList', () => {
  it('should create an empty linked list', () => {
    const list = new LinkedList()

    expect(list.head?.next).toBe(null)
    expect(list.toString()).toBe('')
  })

  it('should find a node by index', () => {
    const list = new LinkedList()

    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(3)

    expect(list.toString()).toBe('1,2,3')
    expect(list.get(-1)).toBe(null)
    expect(list.get(0)?.value).toBe(1)
    expect(list.get(1)?.value).toBe(2)
    expect(list.get(2)?.value).toBe(3)
    expect(list.get(3)).toBe(null)
  })

  it('should add a node at the head of the linked list', () => {
    const list = new LinkedList()

    list.addAtHead(1)
    list.addAtHead(2)
    list.addAtHead(3)

    expect(list.toString()).toBe('3,2,1')
  })

  it('should add a node at the tail of the linked list', () => {
    const list = new LinkedList()

    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(3)

    expect(list.toString()).toBe('1,2,3')
  })

  it('should add a node at a specific index of the linked list', () => {
    const list = new LinkedList()

    list.addAtIndex(0, 1)
    list.addAtIndex(1, 2)
    list.addAtIndex(2, 3)
    list.addAtIndex(3, 5)
    list.addAtIndex(3, 4)

    expect(list.toString()).toBe('1,2,3,4,5')
  })

  it('should delete a node by index', () => {
    const list = new LinkedList()

    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(3)
    list.addAtTail(4)
    list.addAtTail(5)

    expect(list.toString()).toBe('1,2,3,4,5')
    list.deleteAtIndex(0)
    expect(list.toString()).toBe('2,3,4,5')
    list.deleteAtIndex(1)
    expect(list.toString()).toBe('2,4,5')
    list.deleteAtIndex(2)
    expect(list.toString()).toBe('2,4')
    list.deleteAtIndex(2)
    expect(list.toString()).toBe('2,4')
    list.deleteAtIndex(0)
    expect(list.toString()).toBe('4')
    list.deleteAtIndex(0)
    expect(list.toString()).toBe('')
  })

  it('should find a node by value', () => {
    const list = new LinkedList()

    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(3)

    expect(list.find(1)?.value).toBe(1)
    expect(list.find(2)?.value).toBe(2)
    expect(list.find(3)?.value).toBe(3)
  })

  it('should delete a node by value', () => {
    const list = new LinkedList()

    list.addAtTail(1)
    list.addAtTail(1)
    list.addAtTail(2)
    list.addAtTail(2)
    list.addAtTail(3)
    list.addAtTail(3)
    list.addAtTail(4)
    list.addAtTail(4)
    list.addAtTail(5)
    list.addAtTail(5)

    expect(list.toString()).toBe('1,1,2,2,3,3,4,4,5,5')
    list.deleteValue(1)
    expect(list.toString()).toBe('2,2,3,3,4,4,5,5')
    list.deleteValue(3)
    expect(list.toString()).toBe('2,2,4,4,5,5')
    list.deleteValue(5)
    expect(list.toString()).toBe('2,2,4,4')
  })
})
