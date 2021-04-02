# Describe: robogerCount()

Test: "mr roboger hands you back your zero"
Code: robogerCountsTo(0);
Expected Output: \[0]

Test: "mr roboger refuses to count to ten like a normal person"
Code: robogerCountsTo(10);
Expected Output: anything but \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Test: "mr roboger refuses to count to ten like a normal person"
Code: robogerCountsTo(3);
Expected Output: [ 0, 1, 2, `Won't you be my neighbor?` ]

Test: "mr roboger counts `Won't you be my neighbor?` instead of any number with `3`"
Code: robogerCountsTo(30);
Expected Output: [
     0,  1,  2, `Won't you be my neighbor?`,  4,  5,  6,  7,  8,  9, 
    10, 11, 12, `Won't you be my neighbor?`, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, `Won't you be my neighbor?`, 24, 25, 26, 27, 28, 29, 
    `Won't you be my neighbor?`,
  ]