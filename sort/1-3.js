function solution(citations) {
  const sortedArr = citations.sort((a, b) => b - a)

  let result = 0
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= i + 1) {
      result = i + 1
    } else {
      break
    }
  }
  return result
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42747
 *
 * 풀이시간 : 30분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - 아이디어 부족..
 *
 *
 */
