function robogerConsiders(number) {
  const numberHolds3 = /3/.test(String(number))
  if (numberHolds3) {
    return `Won't you be my neighbor?`
  }
  return number
}

export default finalNumber => {
  let countedNumbers = []
  let currentNumber = 0
  while(currentNumber <= finalNumber) {
    const robogersThought = robogerConsiders(currentNumber)
    countedNumbers.push(robogersThought)
    currentNumber += 1
  }
  return countedNumbers
}
