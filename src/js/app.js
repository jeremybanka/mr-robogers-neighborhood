// STYLE
import '../styles/core.scss'
import '../styles/font-face.scss'
// UI
import $ from 'jquery'
// LOGIC
import { robogerCountsTo } from './core'

$(() => {
  $(`form`).on(`submit`, e => {
    e.preventDefault()
    const numberToCount = $(`#how-high`).val()
    console.log(robogerCountsTo(numberToCount))
  })
})
