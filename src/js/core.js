/* eslint no-restricted-syntax: 0 */

const ROBOGERS_WEIRD_IDEAS = [
  { digit: 3, specialPronunciation: `Won't you be my neighbor?` },
  { digit: 2, specialPronunciation: `Boop!` },
  { digit: 1, specialPronunciation: `Beep!` },
]

export function robogersConsiders(number) {
  let robogersInterpretation = number
  for(const { digit, specialPronunciation } of ROBOGERS_WEIRD_IDEAS) {
    const digitRegExp = new RegExp(digit)
    const numberContainsDigit = digitRegExp.test(String(number))
    if(numberContainsDigit) {
      robogersInterpretation = specialPronunciation
      break
    }
  }
  return robogersInterpretation
}

export function robogersCountsTo(finalNumber) {
  const countedNumbers = []
  for(let currentNumber = 0; currentNumber <= finalNumber; currentNumber++) {
    const robogersInterpretation = robogersConsiders(currentNumber)
    countedNumbers.push(robogersInterpretation)
  }
  return countedNumbers
}
