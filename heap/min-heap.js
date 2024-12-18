/** 최소힙 구현 코드 */

const createMinHeap = () => {
  const heap = []
  const getParentIndex = (index) => Math.floor((index - 1) / 2)
  const getLeftChildIndx = (index) => index * 2 + 1
  const getRigthChildIndex = (index) => index * 2 + 2
  const insert = (value) => {
    heap.push(value)
    heapifyUp()
  }

  const extractMin = () => {
    if (heap.length === 0) return null
    if (heap.length === 1) return heap.pop()

    const min = heap[0]
    heap[0] = heap.pop()
    heapifyDown()
    return min
  }

  const heapifyUp = () => {
    let index = heap.length - 1
    while (index > 0) {
      const parentIndex = getParentIndex(index)
      if (heap[index] >= heap[parentIndex]) break
      ;[heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]]
      index = parentIndex
    }
  }

  const heapifyDown = () => {
    let index = 0
    const length = heap.length
    while (getLeftChildIndx(index) < length) {
      const leftChildIndex = getLeftChildIndx(index)
      const rigthChildIndex = getRigthChildIndex(index)
      let smallerChildindex = leftChildIndex

      if (
        rigthChildIndex < length &&
        heap[rigthChildIndex] < heap[leftChildIndex]
      ) {
        smallerChildindex = rigthChildIndex
      }
      if (heap[index] <= heap[smallerChildindex]) break
      ;[heap[index], heap[smallerChildindex]] = [
        heap[smallerChildindex],
        heap[index],
      ]
      index = smallerChildindex
    }
  }

  const getHeap = () => [...heap]

  return { insert, extractMin, getHeap }
}
