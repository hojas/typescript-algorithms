import { describe, expect, it } from 'vitest'
import { LinkedList } from './LinkedList'

describe('linkedList', () => {
  it('should create an empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toBe(null)
    expect(linkedList.tail).toBe(null)
    expect(linkedList.toString()).toBe('')
  })

  it('should append a node to the linked list', () => {
    const linkedList = new LinkedList()
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    expect(linkedList.head?.value).toBe(1)
    expect(linkedList.tail?.value).toBe(3)
    expect(linkedList.toString()).toBe('1,2,3')
  })

  it('should prepend a node to the linked list', () => {
    const linkedList = new LinkedList()
    linkedList.prepend(1)
    linkedList.prepend(2)
    linkedList.prepend(3)
    expect(linkedList.head?.value).toBe(3)
    expect(linkedList.tail?.value).toBe(1)
    expect(linkedList.toString()).toBe('3,2,1')
  })

  it('should insert a node to the linked list', () => {
    const linkedList = new LinkedList()
    linkedList.insert(4, 3)
    expect(linkedList.head?.value).toBe(4)
    expect(linkedList.tail?.value).toBe(4)

    linkedList.insert(3, 2)
    linkedList.insert(2, 1)
    linkedList.insert(1, -7)
    linkedList.insert(10, 9)
    expect(linkedList.head?.value).toBe(1)
    expect(linkedList.tail?.value).toBe(10)
    console.log(linkedList.toString())
    expect(linkedList.toString()).toBe('1,4,2,3,10')
  })

  it('should delete a node by value from the linked list', () => {
    const linkedList = new LinkedList()

    expect(linkedList.delete(5)).toBeNull()

    linkedList.append(1)
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(3)
    linkedList.append(3)
    linkedList.append(4)
    linkedList.append(5)

    expect(linkedList.head?.toString()).toBe('1')
    expect(linkedList.tail?.toString()).toBe('5')

    const deletedNode = linkedList.delete(3)
    expect(deletedNode?.value).toBe(3)
    expect(linkedList.toString()).toBe('1,1,2,4,5')

    linkedList.delete(3)
    expect(linkedList.toString()).toBe('1,1,2,4,5')

    linkedList.delete(1)
    expect(linkedList.toString()).toBe('2,4,5')

    expect(linkedList.head?.toString()).toBe('2')
    expect(linkedList.tail?.toString()).toBe('5')

    linkedList.delete(5)
    expect(linkedList.toString()).toBe('2,4')

    expect(linkedList.head?.toString()).toBe('2')
    expect(linkedList.tail?.toString()).toBe('4')

    linkedList.delete(4)
    expect(linkedList.toString()).toBe('2')

    expect(linkedList.head?.toString()).toBe('2')
    expect(linkedList.tail?.toString()).toBe('2')

    linkedList.delete(2)
    expect(linkedList.toString()).toBe('')
  })

  it('should delete linked list head', () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.head?.toString()).toBe('1')
    expect(linkedList.tail?.toString()).toBe('3')

    const deletedNode1 = linkedList.deleteHead()
    expect(deletedNode1?.value).toBe(1)
    expect(linkedList.toString()).toBe('2,3')

    const deletedNode2 = linkedList.deleteHead()
    expect(deletedNode2?.value).toBe(2)
    expect(linkedList.toString()).toBe('3')

    const deletedNode3 = linkedList.deleteHead()
    expect(deletedNode3?.value).toBe(3)
    expect(linkedList.toString()).toBe('')
  })

  it('should delete linked list tail', () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.head?.toString()).toBe('1')
    expect(linkedList.tail?.toString()).toBe('3')

    const deletedNode1 = linkedList.deleteTail()
    expect(deletedNode1?.value).toBe(3)
    expect(linkedList.toString()).toBe('1,2')

    const deletedNode2 = linkedList.deleteTail()
    expect(deletedNode2?.value).toBe(2)
    expect(linkedList.toString()).toBe('1')

    const deletedNode3 = linkedList.deleteTail()
    expect(deletedNode3?.value).toBe(1)
    expect(linkedList.toString()).toBe('')
  })

  it('should find a node by value', () => {
    const linkedList = new LinkedList()

    expect(linkedList.find(5)).toBeNull()

    linkedList.append(1)
    expect(linkedList.find(1)?.value).toBe(1)

    linkedList.append(2)
    linkedList.append(3)

    const node = linkedList.find(2)
    expect(node?.value).toBe(2)
    expect(linkedList.find(5)).toBeNull()
  })
})
