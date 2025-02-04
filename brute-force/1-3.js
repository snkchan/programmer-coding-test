function solution(numbers) {
  const numArr = numbers.split("")
  const set = new Set()
  const generateArr = (arr, fixed) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const newNumber = fixed + arr[i]
        set.add(parseInt(newNumber, 10))
        const rest = arr.filter((_, idx) => idx !== i)

        generateArr(rest, newNumber)
      }
    }
  }

  const isPrime = (num) => {
    if (num < 2) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    if (num > 2) {
      for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
        if (num % i === 0) return false
      }
    }
    return true
  }

  generateArr(numArr, "")

  return [...set].filter((num) => isPrime(num)).length
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42839
 *
 * 풀이시간 : 30분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - 소수 판별
 *  - 내가 생각한 아이디어
 *  - 각 한자리 단위의 문자열을 조합해서 가능한 모든 경우의수를 가진 배열을 생성
 *    - 이 과정에서 중복을 제거해야하니깐 set을 활요하면 될듯
 *
 *  - 그 중 2를 제외한 짝수제거 ==> 나머지 숫자들로 소수판별
 *
 *
 *
 *  - 실패한 이유는 => ? 무자열의 조합을 가진 배열생성하는 코드를 작성못함
 *  - 소수판별을 하는 로직을 작성못함
 *
 *
 *
 *  - 재귀함수에대한 아이디어가 없었음...
 *  - parsInt의 두번째인자로 10을 넣으면 10진수가된다를 몰랐다
 *  - 소수판별의 로직을 이해못했음
 */
