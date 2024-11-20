function solution(genres, plays) {
  const map = new Map()

  genres.forEach((genre, idx) => {
    if (!map.has(genre)) {
      map.set(genre, [plays[idx]])
    } else {
      map.get(genre).push(plays[idx])
    }
  })
  const playTimeArr = []

  for (let arr of map.values()) {
    playTimeArr.push(arr.reduce((acc, cur) => acc + cur, 0))
  }

  let idx = 0 // playTimeArr의 인덱스를 추적하는 변수
  for (let [key] of map) {
    map.set(key, playTimeArr[idx]) // 총 플레이 시간을 해당 장르의 값으로 설정
    idx++
  }
}
solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
)

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42579
 *
 * 풀이시간 : 1시간 30
 *
 * 결과 : 실패
 *
 * 원인 :
 *  - 접근은 비슷했지만 반복문, idea가 틀렸음,,,
 *
 *
 */

function solution(genres, plays) {
  const genreMap = new Map()
  const songMap = new Map()

  genres.forEach((genre, idx) => {
    genreMap.set(genre, (genreMap.get(genre) || 0) + plays[idx])

    if (!songMap.has(genre)) {
      songMap.set(genre, [])
    }
    songMap.get(genre).push([idx, plays[idx]])
  })

  const sortedGenreArr = Array.from(genreMap.entries()).sort(
    (a, b) => b[1] - a[1]
  )

  const result = []

  sortedGenreArr.forEach(([genre]) => {
    const sortedSongs = songMap
      .get(genre)
      .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    result.push(sortedSongs[0][0])
    if (sortedSongs.length > 1) {
      result.push(sortedSongs[1][0])
    }
  })

  return result
}
