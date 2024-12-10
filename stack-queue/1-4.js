function solution(priorities, location) {
  const queue = priorities.map((priority, idx) => {
    return { priority, idx }
  })

  let order = 0

  while (queue.length > 0) {
    const currentElement = queue.shift()
    if (queue.some((el) => el.priority > currentElement.priority)) {
      queue.push(currentElement)
    } else {
      order++
      if (currentElement.idx === location) break
    }
  }
  return order
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42587
 *
 * 풀이시간 : 60분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - queue동작방식에 대한 이해가 부족
 *  - some , every 메서드의 사용을 잘몰랐음
 *
 */
