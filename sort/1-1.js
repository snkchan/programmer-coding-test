function solution(array, commands) {
  const result = []

  commands.forEach(([i, j, k]) => {
    const slicedArr = array
      .slice(i - 1, j)
      .sort((a, b) => String(a) - String(b))
    result.push(slicedArr[k - 1])
  })
  return result
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
)

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42748
 *
 * 풀이시간 : 10분
 *
 * 결과 : 성공
 *
 * 리뷰 :
 *  - sort() 메서드의 비교기준은 string으로 (아스키 코드)
 */
