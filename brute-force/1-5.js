// 처음 제출한 틀린코드

// function solution(k, dungeons) {
//   const sortedDungeonsArr = dungeons.sort((a, b) => b[0] - b[1] - (a[0] - a[1]))

//   let count = 0
//   let curK = k
//   for (let i = 0; i < sortedDungeonsArr.length; i++) {
//     if (curK >= sortedDungeonsArr[i][0]) {
//       curK = curK - sortedDungeonsArr[i][1]
//       count++
//     }
//   }
//   return count
// }

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42842
 *
 * 풀이시간 : 60분 (실패 시간초과)
 *
 * 결과 :
 *
 * 리뷰 :
 *  - 현재피로도와 소모피로도의 차이가 크게 나는 것들로 2차원배열을 정렬후
 *  - 조건에 맞는 것들을 전부카운트 하면서 반복해나가면 되지않을까? =>>당연히 시간초과가 뜸
 *  - 어떻게 해결해야 하는가?
 *  - 백트래킹으로 탐색하는것이 더 효과적임 가능한것을 카운트해나가는것 보다 불가능한것들을 제거해나가는게 더빠르다,,, ㅇㅋ
 * 

 */

/**
 *
 * 정답 코드인데 아직 완전히 이해하지못함,,,, 내일다시
 */
// function solution(k, dungeons) {
//   let maxCount = 0

//   function dfs(curK, count, visited) {
//     maxCount = Math.max(maxCount, count)

//     for (let i = 0; i < dungeons.length; i++) {
//       if (visited[i]) continue // 이미 방문한 던전이면 스킵
//       if (curK < dungeons[i][0]) continue // 피로도가 부족하면 스킵

//       visited[i] = true
//       dfs(curK - dungeons[i][1], count + 1, visited) // 던전 탐색
//       visited[i] = false // 백트래킹 (되돌리기)
//     }
//   }

//   dfs(k, 0, Array(dungeons.length).fill(false))
//   return maxCount
// }

/**
 *
 * 재귀함수에대한 아이디어를 사용해볼 수있는 문제였다.
 * 다시 한번더 도전해봐야할듯
 */

function solution(k, dungeons) {
  let maxCount = 0

  function dfs(curK, count, visited) {
    maxCount = Math.max(maxCount, count)

    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i]) continue // 이미 방문한 던전이면 스킵
      if (curK < dungeons[i][0]) continue // 피로도가 부족하면 스킵

      visited[i] = true
      dfs(curK - dungeons[i][1], count + 1, visited) // 던전 탐색
      visited[i] = false // 백트래킹 (되돌리기)
    }
  }

  dfs(k, 0, Array(dungeons.length).fill(false))
  return maxCount
}
