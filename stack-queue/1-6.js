function solution(prices) {
  const stack = []
  const answer = Array(prices.length).fill(0)

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop()
      answer[j] = i - j
    }
    stack.push(i)
  }

  while (stack.length > 0) {
    const j = stack.pop()
    answer[j] = prices.length - j - 1
  }
  return answer
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42584
 *
 * 풀이시간 : 60분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - stack에대해 이해가부족한듯.
 *  - 여전히 반복문에서 약하다...
 *  - 문제도 제대로이해못하고 풀었음
 *
 */
