import { describe, expect, it } from 'vitest'
import { DoublyLinkedList } from './DoublyLinkedList'

describe('doublyLinkedList', () => {
  it('should create empty doubly linked list', () => {
    const doublyLinkedList = new DoublyLinkedList()

    expect(doublyLinkedList.toString()).toBe('')
  })

  it('should prepend node to doubly linked list', () => {
    const doublyLinkedList = new DoublyLinkedList()

    doublyLinkedList.prepend(1)
    expect(doublyLinkedList.toString()).toBe('1')

    doublyLinkedList.prepend(2)
    expect(doublyLinkedList.toString()).toBe('2,1')
  })

  it('should append node to doubly linked list', () => {
    const doublyLinkedList = new DoublyLinkedList()

    doublyLinkedList.append(1)
    expect(doublyLinkedList.toString()).toBe('1')

    doublyLinkedList.append(2)
    expect(doublyLinkedList.toString()).toBe('1,2')
  })

  it('should delete node by value from doubly linked list', () => {
    const doublyLinkedList = new DoublyLinkedList()
    doublyLinkedList.append(1)
    doublyLinkedList.append(1)
    doublyLinkedList.append(2)
    doublyLinkedList.append(2)
    doublyLinkedList.append(3)
    doublyLinkedList.append(3)
    doublyLinkedList.append(4)
    doublyLinkedList.append(4)

    expect(doublyLinkedList.delete(1)?.toString()).toBe('1')
    expect(doublyLinkedList.toString()).toBe('2,2,3,3,4,4')

    expect(doublyLinkedList.delete(3)?.toString()).toBe('3')
    expect(doublyLinkedList.toString()).toBe('2,2,4,4')

    expect(doublyLinkedList.delete(4)?.toString()).toBe('4')
    expect(doublyLinkedList.toString()).toBe('2,2')

    expect(doublyLinkedList.delete(2)?.toString()).toBe('2')
    expect(doublyLinkedList.toString()).toBe('')
  })

  it('should find node by value from doubly linked list', () => {
    const linkedList = new DoublyLinkedList()

    expect(linkedList.find(1)).toBeNull()

    linkedList.append(1)
    expect(linkedList.find(1)?.value).toBe(1)

    linkedList.append(2)
    expect(linkedList.find(2)?.value).toBe(2)

    linkedList.append(3)
    expect(linkedList.find(2)?.value).toBe(2)
    expect(linkedList.find(3)?.value).toBe(3)
  })

  it('should delete head from doubly linked list', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(4)

    expect(linkedList.head?.toString()).toBe('1')
    expect(linkedList.tail?.toString()).toBe('4')

    const deletedNodeHead = linkedList.deleteHead()
    expect(deletedNodeHead?.value).toBe(1)
    expect(linkedList.head?.value).toBe(2)
    expect(linkedList.tail?.value).toBe(4)
    expect(linkedList.toString()).toBe('2,3,4')

    linkedList.deleteHead()
    expect(linkedList.head?.value).toBe(3)
    expect(linkedList.tail?.value).toBe(4)
    expect(linkedList.toString()).toBe('3,4')

    linkedList.deleteHead()
    expect(linkedList.head?.value).toBe(4)
    expect(linkedList.tail?.value).toBe(4)
    expect(linkedList.toString()).toBe('4')

    linkedList.deleteHead()
    expect(linkedList.head).toBe(null)
    expect(linkedList.tail).toBe(null)
    expect(linkedList.toString()).toBe('')
  })

  it('should delete tail from doubly linked list', () => {
    const linkedList = new DoublyLinkedList()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(4)

    const deletedNodeTail = linkedList.deleteTail()
    expect(deletedNodeTail?.value).toBe(4)
    expect(linkedList.tail?.value).toBe(3)
    expect(linkedList.head?.value).toBe(1)
    expect(linkedList.toString()).toBe('1,2,3')

    linkedList.deleteTail()
    expect(linkedList.tail?.value).toBe(2)
    expect(linkedList.head?.value).toBe(1)
    expect(linkedList.toString()).toBe('1,2')

    linkedList.deleteTail()
    expect(linkedList.tail?.value).toBe(1)
    expect(linkedList.head?.value).toBe(1)
    expect(linkedList.toString()).toBe('1')

    linkedList.deleteTail()
    expect(linkedList.tail).toBe(null)
    expect(linkedList.head).toBe(null)
    expect(linkedList.toString()).toBe('')
  })
})
