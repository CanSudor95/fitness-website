const exercises = [
  {
    id: "1",
    name: "Crunch",
    bodyPart: "Abs",
    equipment: "None",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/a3/2a/af/a32aafc1868eebbfbbcdce801bcbd391.jpg",
    description: "Empty Right Now",
  },
  {
    id: "2",
    name: "Chest Press",
    bodyPart: "Chest",
    equipment: "Barbell, Bench",
    difficulty: "Beginner",
    image:
      "https://image.shutterstock.com/image-illustration/closegrip-barbell-bench-press-3d-260nw-430936051.jpg",
    description:
      "Lie face up on a flat bench, and grip a barbell with the hands slightly wider than shoulder-width. Press the feet into the ground and the hips into the bench while lifting the bar off the rack. Slowly lower the bar to the chest by allowing the elbows to bend out to the side. Stop when the elbows are just below the bench, and press feet into the floor to press the weight straight up to return to the starting position",
  },
  {
    id: "3",
    name: "Standing Biceps Curl",
    bodyPart: "Arms",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/81/f0/85/81f0855f419d378af8689e8052d1600d.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "4",
    name: "Pushup",
    bodyPart: "Chest",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/01/cc/29/01cc29f00118392a0d29a2f178e4677a.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "5",
    name: "Front Squats",
    bodyPart: "Legs",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/8d/85/4e/8d854e73b66aa9a699c3886bcacded3c.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "6",
    name: "Lateral Raise",
    bodyPart: "Shoulder",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/5b/f6/25/5bf625f99d7f734f024fda07bb3ca3ee.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "7",
    name: "Lateral Raise",
    bodyPart: "Shoulder",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/32/4c/25/324c25f013ba74b0bd7d5c3b6be445ca.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "8",
    name: "Seated Dumbell Raise",
    bodyPart: "Arms",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/8e/f6/bf/8ef6bfaff5fd67b600e939c6cb2826d4.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "9",
    name: "Dumbell Raise",
    bodyPart: "Arms",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/f6/77/67/f67767d56a4d33cefe10472239e01763.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "10",
    name: "Seated Dumbell Shoulder Raise",
    bodyPart: "Arms",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/5e/b7/de/5eb7de102f15a4141880c943502fa66c.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "11",
    name: "Lying Dumbell Shoulder Raise",
    bodyPart: "Chest",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/7e/54/da/7e54da988578fce3d18f4189de25dc17.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "12",
    name: "Jumping Squat",
    bodyPart: "Legs",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/15/a7/94/15a7943a09c14dc8fd24478c84fb282c.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "13",
    name: "Running Man",
    bodyPart: "Full Body",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/cb/9f/f7/cb9ff770311b6d14ac205241843873cf.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "14",
    name: "Jumping Man",
    bodyPart: "Full Body",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/9a/37/19/9a37193430074a8e1473ecd2c514f6a2.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "15",
    name: "Jumping Rope",
    bodyPart: "Full Body",
    equipment: "Jumping Rope",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/a3/45/13/a34513175dce3a1a80a78bd5018eb956.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "16",
    name: "KettleBell Swing",
    bodyPart: "Full Body",
    equipment: "KettleBell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/d7/8f/ca/d78fca2fce3de14189e9fc4b0c604500.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "17",
    name: "Side Movement",
    bodyPart: "Abs",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/d5/48/88/d548889b7a9737da1484dc94e2ea071b.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "18",
    name: "Russian Swing",
    bodyPart: "Abs",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/35/cd/6e/35cd6e2964b66ee87db1b544db2cc8e9.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "19",
    name: "Cross Leg Swing",
    bodyPart: "Legs",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/2f/b1/9a/2fb19a077b13d9e25ac0d983a1d6a03e.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "20",
    name: "Bicycle",
    bodyPart: "Legs",
    equipment: "Bicycle",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/21/cb/7e/21cb7ecb2509e71bc885bf468e5b7f8b.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
];

export default exercises;
