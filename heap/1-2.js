const createMinHeap = () => {
  const heap = []

  const getParentIdx = (idx) => Math.floor((idx - 1) / 2)
  const getLeftChildIdx = (idx) => idx * 2 + 1
  const getRightChildIdx = (idx) => idx * 2 + 2
  const swap = (el1, el2) => ([heap[el1], heap[el2]] = [heap[el2], heap[el1]])

  const insert = (el) => {
    heap.push(el)
    heapifyUp()
  }

  const heapifyUp = () => {
    let idx = heap.length - 1
    while (idx > 0) {
      const parentIdx = getParentIdx(idx)
      if (heap[idx] >= heap[parentIdx]) break
      swap(idx, parentIdx)
      idx = parentIdx
    }
  }
  const extractMin = () => {
    if (heap.length === 0) return null
    if (heap.length === 1) return heap.pop()
    const min = heap[0]
    heap[0] = heap.pop()
    heapifyDown()
    return min
  }

  const heapifyDown = () => {
    let idx = 0
    const length = heap.length
    while (getLeftChildIdx(idx) < length) {
      const leftIdx = getLeftChildIdx(idx)
      const rigthIdx = getRightChildIdx(idx)
      let smallerChildIndex = leftIdx

      if (rigthIdx < length && heap[rigthIdx] < heap[leftIdx]) {
        smallerChildIndex = rigthIdx
      }

      if (heap[idx] <= heap[smallerChildIndex]) break
      swap(idx, smallerChildIndex)
      idx = smallerChildIndex
    }
  }

  return { extractMin, insert, heap }
}


function solution(jobs) {
  
}