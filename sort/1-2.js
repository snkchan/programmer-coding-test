function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
  return result[0] === "0" ? "0" : result.concat()
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42746
 *
 * 풀이시간 : 30분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - sort() 의 문자열 비교방법에대한 아이디어가 없었음
 * - loaceCompare 에대해서 몰랐음
 *
 *
 */

/** 다시푼 코드(실패)
 *  sort 의 문자열 비교를 위해서는 localeCompare()를 사용해야하고 - 연산은 숫자에만해당하기에 localeCompare로 문자열 비교를 해줘야함
 *
 *
 */
function solution(numbers) {
  if (numbers.every((num) => num === 0)) return "0"

  const sortedArr = numbers
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
  const result = sortedArr.join("")

  return result
}
