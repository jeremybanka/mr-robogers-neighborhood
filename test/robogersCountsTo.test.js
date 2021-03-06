/* eslint max-len: 0 */

/* eslint max-len: 0 */

import { robogersCountsTo } from '../src/js/core'

test(`mr roboger hands you back your zero`, () => {
  const input = 0
  const expected = [0]
  expect(robogersCountsTo(input)).toEqual(expected)
})

test(`mr roboger refuses to count to ten like a normal person`, () => {
  const input = 10
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(robogersCountsTo(input)).not.toEqual(expected)
})

test(`mr roboger seems like he wants to count to three, but just goes "0 Beep! Boop! Won't you be my neighbor?" instead`, () => {
  const input = 3
  const expected = [0, `Beep!`, `Boop!`, `Won't you be my neighbor?`]
  expect(robogersCountsTo(input)).toEqual(expected)
})

test(`mr roboger counts to thirty very strangely!`, () => {
  const input = 30
  const expected = [
    0, `Beep!`, `Boop!`, `Won't you be my neighbor?`, 4, 5, 6, 7, 8, 9,
    `Beep!`, `Beep!`, `Boop!`, `Won't you be my neighbor?`, `Beep!`, `Beep!`, `Beep!`, `Beep!`, `Beep!`, `Beep!`,
    `Boop!`, `Boop!`, `Boop!`, `Won't you be my neighbor?`, `Boop!`, `Boop!`, `Boop!`, `Boop!`, `Boop!`, `Boop!`,
    `Won't you be my neighbor?`,
  ]
  expect(robogersCountsTo(input)).toEqual(expected)
})
