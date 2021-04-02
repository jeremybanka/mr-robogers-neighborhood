/* eslint max-len: 0 */

import { robogerConsiders } from '../src/js/core'

test(`mr roboger considers "Won't you be my neighbor?" to be the correct pronunciation of "3"`, () => {
  const input = 3
  const expected = `Won't you be my neighbor?`
  expect(robogerConsiders(input)).toEqual(expected)
})

test(`mr roboger considers "Boop!" to be the correct pronunciation of "2"`, () => {
  const input = 2
  const expected = `Boop!`
  expect(robogerConsiders(input)).toEqual(expected)
})

test(`mr roboger considers "Beep!" to be the correct pronunciation of "2"`, () => {
  const input = 1
  const expected = `Beep!`
  expect(robogerConsiders(input)).toEqual(expected)
})
