const exercises = [
  {
    id: "1",
    toggled: false,
    name: "Crunch",
    bodyPart: "Abs",
    equipment: "None",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/a3/2a/af/a32aafc1868eebbfbbcdce801bcbd391.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "2",
    toggled: false,
    name: "Chest Press",
    bodyPart: "Chest",
    equipment: "Barbell, Bench",
    difficulty: "Advanced",
    image:
      "https://image.shutterstock.com/image-illustration/closegrip-barbell-bench-press-3d-260nw-430936051.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "3",
    toggled: false,
    name: "Standing Biceps Curl",
    bodyPart: "Arms",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/81/f0/85/81f0855f419d378af8689e8052d1600d.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "4",
    toggled: false,
    name: "Pushup",
    bodyPart: "Chest",
    equipment: "None",
    difficulty: "Advanced",
    image:
      "https://i.pinimg.com/564x/01/cc/29/01cc29f00118392a0d29a2f178e4677a.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "5",
    toggled: false,
    name: "Front Squats",
    bodyPart: "Legs",
    equipment: "Dumbell",
    difficulty: "Advanced",
    image:
      "https://i.pinimg.com/564x/8d/85/4e/8d854e73b66aa9a699c3886bcacded3c.jpg",
    description:
      "With the palms facing the ceiling, bend the elbows to bring the hands up toward the shoulders. Keep the elbows in close to the sides through the movement, and lower slowly back down to complete the repetition.",
  },
  {
    id: "6",
    toggled: false,
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
    toggled: false,
    name: "Dumbell Upright Row",
    bodyPart: "Shoulder",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/32/4c/25/324c25f013ba74b0bd7d5c3b6be445ca.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "8",
    toggled: false,
    name: "Seated Dumbell Raise",
    bodyPart: "Arms",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/8e/f6/bf/8ef6bfaff5fd67b600e939c6cb2826d4.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "9",
    toggled: false,
    name: "Dumbell Raise",
    bodyPart: "Arms",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/f6/77/67/f67767d56a4d33cefe10472239e01763.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "10",
    toggled: false,
    name: "Seated Dumbell Shoulder Raise",
    bodyPart: "Arms",
    equipment: "Dumbell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/5e/b7/de/5eb7de102f15a4141880c943502fa66c.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "11",
    toggled: false,
    name: "Lying Dumbell Shoulder Raise",
    bodyPart: "Chest",
    equipment: "Dumbell",
    difficulty: "Advanced",
    image:
      "https://i.pinimg.com/564x/7e/54/da/7e54da988578fce3d18f4189de25dc17.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "12",
    toggled: false,
    name: "Jumping Squat",
    bodyPart: "Legs",
    equipment: "Nothing",
    difficulty: "Advanced",
    image:
      "https://i.pinimg.com/564x/15/a7/94/15a7943a09c14dc8fd24478c84fb282c.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "13",
    toggled: false,
    name: "Running Man",
    bodyPart: "Full Body",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/cb/9f/f7/cb9ff770311b6d14ac205241843873cf.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "14",
    toggled: false,
    name: "Jumping Man",
    bodyPart: "Full Body",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/9a/37/19/9a37193430074a8e1473ecd2c514f6a2.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "15",
    toggled: false,
    name: "Jumping Rope",
    bodyPart: "Full Body",
    equipment: "Jumping Rope",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/a3/45/13/a34513175dce3a1a80a78bd5018eb956.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "16",
    toggled: false,
    name: "KettleBell Swing",
    bodyPart: "Full Body",
    equipment: "KettleBell",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/d7/8f/ca/d78fca2fce3de14189e9fc4b0c604500.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "17",
    toggled: false,
    name: "Side Movement",
    bodyPart: "Abs",
    equipment: "Nothing",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/d5/48/88/d548889b7a9737da1484dc94e2ea071b.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "18",
    toggled: false,
    name: "Russian Swing",
    bodyPart: "Abs",
    equipment: "Nothing",
    difficulty: "Advanced",
    image:
      "https://i.pinimg.com/564x/35/cd/6e/35cd6e2964b66ee87db1b544db2cc8e9.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "19",
    toggled: false,
    name: "Cross Leg Swing",
    bodyPart: "Legs",
    equipment: "Nothing",
    difficulty: "Advanced",
    image:
      "https://i.pinimg.com/564x/2f/b1/9a/2fb19a077b13d9e25ac0d983a1d6a03e.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
  {
    id: "20",
    toggled: false,
    name: "Bicycle",
    bodyPart: "Legs",
    equipment: "Bicycle",
    difficulty: "Beginner",
    image:
      "https://i.pinimg.com/564x/21/cb/7e/21cb7ecb2509e71bc885bf468e5b7f8b.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, saepe minima! Numquam praesentium ducimus, quaerat, ullam sunt necessitatibus doloremque minima optio corporis laboriosam totam voluptas rem consectetur nobis modi dolor voluptates. Distinctio a quas officiis ea corporis facilis iusto nostrum.\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem veritatis eaque perspiciatis, suscipit sequi eveniet magni ipsam delectus possimus labore est saepe eligendi fugit praesentium sapiente maiores? Aspernatur ipsum, amet ex odio consequuntur laboriosam voluptas, saepe in autem quaerat nostrum provident? Sequi illo rerum eum ab cum debitis fuga perspiciatis nobis. Necessitatibus natus, voluptas at blanditiis voluptatem saepe dicta fuga, nam cum velit praesentium facere magnam non maiores esse aperiam modi, eius voluptates dolore. Aliquam officiis, incidunt repellendus corporis nemo id consectetur velit ut porro inventore quo, dolores expedita ratione obcaecati laudantium minima aspernatur voluptas sequi. Voluptatum nam architecto sapiente recusandae nemo dolore nobis minus consequatur cupiditate provident est facilis autem tempore inventore dolores sit quo, nesciunt maiores, qui ab labore aperiam et possimus placeat? Doloribus ut esse numquam magni id molestiae rem distinctio, corporis dolores iste facilis. Illo, sed? Aperiam unde ut dolorum, itaque illo enim obcaecati! Velit ipsum fugit amet molestiae possimus sapiente doloribus similique error. Mollitia.",
  },
];

export default exercises;
