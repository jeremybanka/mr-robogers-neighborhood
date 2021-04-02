export default finalNumber => {
  let countedNumbers = []
  let currentNumber = 0
  while(currentNumber <= finalNumber) {
    countedNumbers.push(currentNumber)
    currentNumber += 1
  }
  return countedNumbers
}
