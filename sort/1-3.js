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

/** 재시도 (실패)
 *  큰수로 정렬했기때문에 index를 사용해서 비교할 수 있었는데 거기까지 생각하지 못했음
 *
 */
function solution(citations) {
  let HCount = 0
  const length = citations.length
  const sortedArr = citations.sort((a, b) => b - a)
  for (let i = 0; i < length; i++) {
    if (sortedArr[i] >= i + 1) {
      HCount++
    } else {
      break
    }
  }
  return HCount
}
