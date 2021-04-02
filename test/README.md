# Describe: robogerCount()

Test: "mr roboger hands you back your zero"
Code: robogerCountsTo(0);
Expected Output: \[0]

Test: "mr roboger refuses to count to ten like a normal person"
Code: robogerCountsTo(10);
Expected Output: anything but \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Test: `mr roboger tries to count to three, but just goes "0, Beep! Boop! Won't you be my neighbor?"`
Code: robogerCountsTo(3);
Expected Output: [0, `Beep!`, `Boop!`, `Won't you be my neighbor?`]

Test: "mr roboger counts to thirty very strangely!"
Code: robogerCountsTo(30);
Expected Output: [
    0, `Beep!`, `Boop!`, `Won't you be my neighbor?`, 4, 5, 6, 7, 8, 9,
    `Beep!`, `Beep!`, `Boop!`, `Won't you be my neighbor?`, `Beep!`, `Beep!`, `Beep!`, `Beep!`, `Beep!`, `Beep!`,
    `Boop!`, `Boop!`, `Boop!`, `Won't you be my neighbor?`, `Boop!`, `Boop!`, `Boop!`, `Boop!`, `Boop!`, `Boop!`,
    `Won't you be my neighbor?`,
  ]