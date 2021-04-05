// STYLE
import '../styles/core.scss'
import '../styles/font-face.scss'
// UI
import $ from 'jquery'
// LOGIC
import { robogersCountsTo } from './core'

$(() => {
  $(`form`).on(`submit`, e => {
    e.preventDefault()
    const numberToCount = $(`#how-high`).val()
    const countedNumbers = robogersCountsTo(numberToCount)
    const $main = $(`main`)
    const $outputList = $(`<ol/>`).attr(`start`, 0)
    $main.empty()
    $main.append($outputList)
    countedNumbers.forEach(countedNumber => {
      const $countedNumber = $(`<li/>`).text(countedNumber)
      $outputList.delay(1000).append($countedNumber)
    })
    $outputList.scrollTop($outputList.height() - $main.height())
  })
})
