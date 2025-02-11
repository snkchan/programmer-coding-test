function solution(brown, yellow) {
  const TotalSize = brown + yellow

  for (
    let rowSize = Math.floor(Math.sqrt(TotalSize));
    rowSize >= 1;
    rowSize--
  ) {
    if (TotalSize % rowSize === 0) {
      let colSize = TotalSize / rowSize

      if (brown === colSize * 2 + rowSize * 2 - 4) {
        return [colSize, rowSize]
      }
    }
  }
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42842
 *
 * 풀이시간 : 60분 (실패 시간초과)
 *
 * 결과 :
 *
 * 리뷰 :
 *  - b + y 의 약수중 가장 두값이 가장 근접한 값을 찾으면되는거 아닐까?
 *  - 둘중 더 큰 숫자가 가로 작은숫자가 세로
 *  - 최소곱은 어떻게 로직으로 작성하는가?
 *  
 * 
 *  - 1차 제출 정답 시간초과뜸 ()
 *  - 총 사이즈를 구한후 1/4 (루트값)을기준으로 1씩증가시키면서 a*b = totalSize를 만족하는 ab값을 구했는데 시간초과가뜸
 * 
 *  - 접근한 아이디어는 정답, ===> 답을 도출하는 과정에서 더효율적인 연산을 하지못했음

 */

/**
 *   12 3 [5,3]
 *   10 2 [4,3]
 *   8  1 [3,3]
 *   12 4 [4,4]
 *
 *   24 24 [8,6]
 *
 *
 */
