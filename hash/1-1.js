const getAnswer = (arr) => {
  const getDeduplicateArr = (arr) => {
    return [...new Set(arr)]
  }
  const deduplicateArr = getDeduplicateArr(arr)

  const totalPokemon = arr.length
  const possibleCnt = totalPokemon / 2

  if (deduplicateArr.length > possibleCnt) {
    return possibleCnt
  } else {
    return deduplicateArr.length
  }
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/1845
 *
 * 풀이시간 : 30분
 *
 * 결과 : 성공
 */
