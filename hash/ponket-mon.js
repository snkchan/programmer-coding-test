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
