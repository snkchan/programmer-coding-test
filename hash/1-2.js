function solution(participant, completion) {
  let answer = ""
  const idxArr = []

  completion.forEach((name) => {
    const idx = participant.findIndex(
      (participantName) => participantName === name
    )
    idxArr.push(idx)
  })

  participant.forEach((name, idx) => {
    if (!idxArr.includes(idx)) {
      answer = name
    }
  })

  return answer
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42576
 *
 * 풀이시간 : 1시간 30
 *
 * 결과 : 실패(시간 초과)
 *
 * 원인 : Map 의 사용법을 몰랐음
 *       - findIndex()의 메서드의 경우 시간복잡도가 최악의 경우  O(n^2)로 비효율적이다.
 *       - for of의 사용법도 잘 몰랐음..
 *
 *
 */

// 정답 코드

function solution(participant, completion) {
  let answer = ""

  const map = new Map()

  participant.forEach((name) => map.set(name, (map.get(name) || 0) + 1))
  completion.forEach((name) => map.set(name, (map.get(name) || 0) - 1))

  for (let [name, count] of map) {
    if (count > 0) {
      return name
    }
  }

  return answer
}

//** 다시푼 코드 */
/** for of for in 차이를 햇갈렸음,,, ,그거외엔 정답 */

function solution(participant, completion) {
  const map = new Map()

  participant.forEach((name) => {
    map.set(name, (map.get(name) || 0) + 1)
  })

  completion.forEach((name) => {
    map.set(name, (map.get(name) || 0) - 1)
  })

  for (let [name, count] of map) {
    if (count > 0) {
      return name
    }
  }
}
