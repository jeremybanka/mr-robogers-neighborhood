import robogerCount from '../src/js/core'

test(`mr roboger hands you back your zero`, () => {
  const input = 0
  const expected = [0]
  expect(robogerCount(input)).toEqual(expected)
})
