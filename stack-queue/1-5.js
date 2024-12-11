function solution(bridge_length, weight, truck_weights) {
  const processArr = []
  let time = 0

  while (true) {
    time++
    if (
      testMaxLength(weight, processArr) &&
      testMaxWeight(bridge_length, processArr)
    ) {
      processArr.push({
        truck_weights: truck_weights.shift(),
        passTime: time,
      })
    }

    processArr.forEach((process) => process.passTime++)

    processArr.forEach((process) => {
      if (isTruckPassBridge(bridge_length, process)) {
        processArr.shift()
      }
    })

    if (processArr.length === 0) break
  }
  return time
}

function testMaxWeight(weight, processArr) {
  const totalWeight =
    processArr.length !== 0
      ? processArr.reduce((acc, car) => acc + car.truck_weights, 0)
      : 0

  return weight >= totalWeight
}

function testMaxLength(bridge_length, processArr) {
  return bridge_length >= processArr.length
}

function isTruckPassBridge(bridge_length, process) {
  return bridge_length <= process.passTime
}

/**
 * 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42583
 *
 * 풀이시간 : 60분
 *
 * 결과 : 실패
 *
 * 리뷰 :
 *  - 비슷했는데,,, 논리가 조금 틀린부분이 존재한다.
 *
 */

function solution(bridge_length, weight, truck_weights) {
  const processArr = []
  let time = 0
  let totalWeight = 0 // 현재 다리 위 트럭들의 총 무게

  while (truck_weights.length > 0 || processArr.length > 0) {
    time++

    // 1. 다리를 건넌 트럭 제거
    if (
      processArr.length > 0 &&
      time - processArr[0].passTime >= bridge_length
    ) {
      const finishedTruck = processArr.shift()
      totalWeight -= finishedTruck.truck_weights // 다리에서 트럭 무게 제거
    }

    // 2. 새로운 트럭 다리에 추가
    const nextTruckWeight = truck_weights[0]
    if (
      truck_weights.length > 0 &&
      totalWeight + nextTruckWeight <= weight &&
      processArr.length < bridge_length
    ) {
      processArr.push({ truck_weights: truck_weights.shift(), passTime: time })
      totalWeight += nextTruckWeight // 다리에 트럭 무게 추가
    }
  }

  return time
}
