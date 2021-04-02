# Describe: robogerCountsTo()

#### mr roboger hands you back your zero
* \> `robogerCountsTo(0)`
* \< `[0]`

#### mr roboger refuses to count to ten like a normal person
* \> `robogerCountsTo(10)`
* \< _anything_ but `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

#### mr roboger seems like he wants to count to three, but just goes `[ 0, "Beep!", "Boop!", "Won't you be my neighbor?" ]` instead
* \> `robogerCountsTo(3)`
* \< `[0, "Beep!", "Boop!", "Won't you be my neighbor?"]`

#### mr roboger counts to thirty very strangely!
* \> `robogerCountsTo(30)`
* \< `[
    0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9,
    "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!",
    "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!",
    "Won't you be my neighbor?",
]`

# robogerConsiders()

#### mr roboger considers `"Won't you be my neighbor?"` to be the correct pronunciation of 3
* \> `robogerConsiders(3)`
* \< "Won't you be my neighbor?"

#### mr roboger considers `"Boop!"` to be the correct pronunciation of `2`
* \> `robogerConsiders(2)`
* \< `"Boop!"`

#### mr roboger considers `"Beep!"` to be the correct pronunciation of `1`
* \> `robogerConsiders(1)`
* \< `"Beep"`

#### mr roboger considers `"Beep!"` to be the correct pronunciation of `111`
* \> `robogerConsiders(111)`
* \< `"Beep"`

#### mr roboger prefers to pronounce `112` as `"Boop!"` not `"Beep!"`
* \> `robogerConsiders(112)`
* \< `"Boop!"`

#### mr roboger prefers to pronounce `21312` as "Won't you be my neighbor?", not "Boop!" or "Beep!"
* \> `robogerConsiders(21312)`
* \< `"Won't you be my neighbor?"`