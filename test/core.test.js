import robogerCount from '../src/js/core'

test(`mr roboger hands you back your zero`, () => {
  const input = 0
  const expected = [0]
  expect(robogerCount(input)).toEqual(expected)
})

test(`mr roboger counts to ten`, () => {
  const input = 10
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(robogerCount(input)).toEqual(expected)
})
