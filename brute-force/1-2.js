// function solution(answers) {
//   const PatternA = [1, 2, 3, 4, 5]
//   const PatternB = [2, 1, 2, 3, 2, 4, 2, 5]
//   const PatternC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

//   const scoreArr = [0, 0, 0]

//   answers.forEach((ans, idx) => {
//     if (ans === PatternA[idx % 5]) {
//       scoreArr[0]++
//     }

//     if (ans === PatternB[idx % 8]) {
//       scoreArr[1]++
//     }

//     if (ans === PatternC[idx % 10]) {
//       scoreArr[2]++
//     }
//   })

//   const MaxScore = Math.max(...scoreArr)

//   const answer = scoreArr
//     .map((el, idx) => (el === MaxScore ? idx + 1 : null))
//     .filter((el) => el !== null)

//   return answer
// }

// console.log(solution([1, 2, 3, 4]))

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42840
 *
 * 풀이시간 : 30분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - 너무 복잡하게생각했음...
 *  - Math에대해 떠올리지못했따..
 */

function solution(answers) {
  const patternA = [1, 2, 3, 4, 5]
  const patternB = [2, 1, 2, 3, 2, 4, 2, 5]
  const patternC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  const answerArr = [0, 0, 0]

  answers.forEach((ans, idx) => {
    if (ans === patternA[idx % patternA.length]) answerArr[0]++
    if (ans === patternB[idx % patternB.length]) answerArr[1]++
    if (ans === patternC[idx % patternC.length]) answerArr[2]++
  })

  const MaxScore = Math.max(...answerArr)

  const result = []

  answerArr.forEach((ansCnt, idx) => {
    if (ansCnt === MaxScore) result.push(idx + 1)
  })

  return result
}


