function solution(s) {
  let count = 0

  for (const char of s) {
    if (char === "(") {
      count++
    } else {
      count--
    }
    // 닫힌 괄호가 더 많아지는 경우
    if (count < 0) {
      return false
    }
  }

  // 모든 괄호가 짝이 맞는 경우 count가 0
  return count === 0
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12909
 *
 * 풀이시간 : 30분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - 아이디어가 조금 틀렸음 ... 아쉽다
 *
 *
 */
