function solution(progresses, speeds) {
  const dayArr = []

  for (let i = 0; i < progresses.length; i++) {
    let n = 1
    while (progresses[i] + speeds[i] * n < 100) {
      n++
    }
    dayArr.push(n)
  }

  let start = dayArr[0]
  let cnt = 1
  let result = []
  for (let j = 1; j < dayArr.length; j++) {
    if (start >= dayArr[j]) {
      cnt++
    } else {
      result.push(cnt)
      start = dayArr[j]
      cnt = 1
    }
  }
  result.push(cnt)
  return result
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42586
 *
 * 풀이시간 : 30분
 *
 * 결과 : 성공
 *
 * 리뷰 :
 *  - stack queue에대한 간단한 이해만 있으면 풀 수 있는 문제인듯?
 *
 *
 */
