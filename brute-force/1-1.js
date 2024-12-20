function solution(sizes) {
  const rotatedSizes = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]))

  const maxWeight = Math.max(...rotatedSizes.map(([w, _]) => w))
  const maxHeight = Math.max(...rotatedSizes.map(([_, h]) => h))

  return maxWeight * maxHeight
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/86491
 *
 * 풀이시간 : 30분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - 너무 복잡하게생각했음...
 *  - Math에대해 떠올리지못했따.. 고차함수만 생각했음
 */
