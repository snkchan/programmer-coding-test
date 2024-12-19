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

function solution(scoville, K) {
  const heap = createMinHeap()

  scoville.forEach((el) => heap.insert(el))
  let count = 0

  while (heap.heap.length > 1 && heap.heap[0] < K) {
    const first = heap.extractMin()
    const second = heap.extractMin()

    const newScoville = first + second * 2
    heap.insert(newScoville)

    count++
    if (heap.heap[0] >= K) {
      break
    }
  }
  return heap.heap[0] >= K ? count : -1
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42626
 *
 * 풀이시간 : 60분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - heap의 개념을 몰랐음 (최대힙 최소힙)
 *  - 언제 사용해야하는지? => 최소 or 최대 값을 시간복잡도 낮게 추출해야할때 & 순서가 존재한다
 */
