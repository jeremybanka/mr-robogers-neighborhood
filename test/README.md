# robogersCountsTo()

#### mr robogers hands you back your zero
* \> `robogersCountsTo(0)`
* \< `[0]`

#### mr robogers refuses to count to ten like a normal person
* \> `robogersCountsTo(10)`
* \< _anything_ but `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

#### mr robogers seems like he wants to count to three, but just goes `[ 0, "Beep!", "Boop!", "Won't you be my neighbor?" ]` instead
* \> `robogersCountsTo(3)`
* \< `[0, "Beep!", "Boop!", "Won't you be my neighbor?"]`

#### mr robogers counts to thirty very strangely!
* \> `robogersCountsTo(30)`
* \< `[
    0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9,
    "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!",
    "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!",
    "Won't you be my neighbor?",
]`

# robogersConsiders()

#### mr robogers considers `"Won't you be my neighbor?"` to be the correct pronunciation of 3
* \> `robogersConsiders(3)`
* \< `"Won't you be my neighbor?"`

#### mr robogers considers `"Boop!"` to be the correct pronunciation of `2`
* \> `robogersConsiders(2)`
* \< `"Boop!"`

#### mr robogers considers `"Beep!"` to be the correct pronunciation of `1`
* \> `robogersConsiders(1)`
* \< `"Beep"`

#### mr robogers considers `"Beep!"` to be the correct pronunciation of `111`
* \> `robogersConsiders(111)`
* \< `"Beep"`

#### mr robogers prefers to pronounce `112` as `"Boop!"` not `"Beep!"`
* \> `robogersConsiders(112)`
* \< `"Boop!"`

#### mr robogers prefers to pronounce `21312` as `"Won't you be my neighbor?`", not `"Boop!"` or `"Beep!"`
* \> `robogersConsiders(21312)`
* \< `"Won't you be my neighbor?"`