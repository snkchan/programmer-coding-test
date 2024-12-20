const createMinHeap = () => {
  const heap = []

  // 부모 인덱스 계산
  const getParentIndex = (index) => Math.floor((index - 1) / 2)
  // 왼쪽 자식 인덱스 계산
  const getLeftChildIndex = (index) => index * 2 + 1
  // 오른쪽 자식 인덱스 계산
  const getRightChildIndex = (index) => index * 2 + 2

  // 값을 삽입하고 최소 힙을 유지
  const insert = (value) => {
    heap.push(value)
    heapifyUp()
  }
  const swap = (el1, el2) => ([heap[el1], heap[el2]] = [heap[el2], heap[el1]])
  // 최소값을 추출하고 최소 힙을 유지
  const extractMin = () => {
    if (heap.length === 0) return null
    if (heap.length === 1) return heap.pop()

    const min = heap[0]
    heap[0] = heap.pop() // 마지막 값을 루트로 이동
    heapifyDown()
    return min
  }

  // 삽입 시 힙 속성 유지
  const heapifyUp = () => {
    let index = heap.length - 1
    while (index > 0) {
      const parentIndex = getParentIndex(index)
      if (heap[index] >= heap[parentIndex]) break
      swap(index, parentIndex)
      index = parentIndex
    }
  }

  // 추출 시 힙 속성 유지
  const heapifyDown = () => {
    let index = 0
    const length = heap.length

    while (getLeftChildIndex(index) < length) {
      const leftChildIndex = getLeftChildIndex(index)
      const rightChildIndex = getRightChildIndex(index)
      let smallerChildIndex = leftChildIndex

      if (
        rightChildIndex < length &&
        heap[rightChildIndex] < heap[leftChildIndex]
      ) {
        smallerChildIndex = rightChildIndex
      }

      if (heap[index] <= heap[smallerChildIndex]) break
      swap(index, smallerChildIndex)
      index = smallerChildIndex
    }
  }

  return { insert, extractMin, heap }
}
