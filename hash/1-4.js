function solution(clothes) {
  const map = new Map()

  clothes.forEach(([name, type]) => {
    map.set(type, (map.get(type) || 0) + 1)
  })

  let result = 1
  for (let count of map.values()) {
    result = result * (count + 1)
  }

  return result - 1
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42578
 *
 * 풀이시간 : 30분
 *
 * 결과 : 성공
 *
 * 리뷰 :
 *  - map을 알고있어서 풀이를 성공
 *  - for of 에대해 살짝부족했다,,,,
 *
 *
 */