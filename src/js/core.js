export function robogerConsiders(number) {
  const numberHolds3 = /3/.test(String(number))
  const numberHolds2 = /2/.test(String(number))
  const numberHolds1 = /1/.test(String(number))
  if (numberHolds3) return `Won't you be my neighbor?`
  if (numberHolds2) return `Boop!`
  if (numberHolds1) return `Beep!`
  return number
}

export function robogerCountsTo(finalNumber) {
  let countedNumbers = []
  let currentNumber = 0
  while(currentNumber <= finalNumber) {
    const robogersThought = robogerConsiders(currentNumber)
    countedNumbers.push(robogersThought)
    currentNumber += 1
  }
  return countedNumbers
}
