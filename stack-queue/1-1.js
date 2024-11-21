function solution(arr) {
  if (arr.lenth === 1) return arr[0]

  const result = [arr[0]]

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i + 1])
    }
  }
  return result
}


/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12906
 *
 * 풀이시간 : 20분
 *
 * 결과 : 성공
 *
 * 리뷰 :
 *  - 간단한 스택문제
 */
