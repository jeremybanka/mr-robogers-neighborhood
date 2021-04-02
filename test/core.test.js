import robogerCountsTo from '../src/js/core'

test(`mr roboger hands you back your zero`, () => {
  const input = 0
  const expected = [0]
  expect(robogerCountsTo(input)).toEqual(expected)
})

test(`mr roboger refuses to count to ten like a normal person`, () => {
  const input = 10
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(robogerCountsTo(input)).not.toEqual(expected)
})

test(`mr roboger counts "Won't you be my neighbor?" instead of "3"`, () => {
  const input = 3
  const expected = [ 0, 1, 2, `Won't you be my neighbor?` ]
  expect(robogerCountsTo(input)).toEqual(expected)
})

test(`mr roboger counts "Won't you be my neighbor?" instead of any number with "3"`, () => {
  const input = 30
  const expected = [
     0,  1,  2, `Won't you be my neighbor?`,  4,  5,  6,  7,  8,  9, 
    10, 11, 12, `Won't you be my neighbor?`, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, `Won't you be my neighbor?`, 24, 25, 26, 27, 28, 29, 
    `Won't you be my neighbor?`,
  ]
  expect(robogerCountsTo(input)).toEqual(expected)
})

