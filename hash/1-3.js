function solution(phone_book) {
  var answer = true
  for (let i = 0; i < phone_book.length; i++) {
    const length = phone_book[i].split("").length
    for (let j = 0; j < phone_book.length; j++) {
      if (i !== j) {
        const preFix = phone_book[j].slice(0, length)
        if (preFix === phone_book[i]) return false
      }
    }
  }
  return answer
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42577
 *
 * 풀이시간 : 20분
 *
 * 결과 : 실패(시간 초과)
 *
 * 원인 :
 * - for 문을 사용하면 시간복잡도가 증가한다.
 * - 문제해결을 위한 idea가 부족했음,.,,,,,
 * - sort() 정렬에대해 잘 몰랐음
 * - 문자열의 startsWith idea생각부족
 *
 *
 *
 */

function solution(phone_book) {
  var answer = true
  phone_book.sort()

  for (let i = 0; i < phone_book.length; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false
    }
  }

  return answer
}
