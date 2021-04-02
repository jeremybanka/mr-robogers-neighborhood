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

test(`mr roboger considers "Beep!" to be the correct pronunciation of "1"`, () => {
  const input = 1
  const expected = `Beep!`
  expect(robogerConsiders(input)).toEqual(expected)
})

test(`mr roboger considers "Beep!" to be the correct pronunciation of "111", also`, () => {
  const input = 111
  const expected = `Beep!`
  expect(robogerConsiders(input)).toEqual(expected)
})

test(`mr roboger prefers to pronounce "112" as "Boop!" not "Beep!"`, () => {
  const input = 112
  const expected = `Boop!`
  expect(robogerConsiders(input)).toEqual(expected)
})

test(`mr roboger prefers to pronounce "21312" as "Won't you be my neighbor?", not "Boop!" or "Beep!"`, () => {
  const input = 21312
  const expected = `Won't you be my neighbor?`
  expect(robogerConsiders(input)).toEqual(expected)
})
