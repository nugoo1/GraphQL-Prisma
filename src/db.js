const users = [
  {
    id: "1",
    name: "Nuwan",
    email: "nuwan@example.com",
    age: 26
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com"
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@example.com"
  }
];

const posts = [
  {
    id: "10",
    title: "GraphQL Course",
    body: "GraphQL with NodeJs",
    published: true,
    author: "1"
  },
  {
    id: "11",
    title: "Reactjs Course",
    body: "React and Redux Web Developer Course",
    published: false,
    author: "1"
  },
  {
    id: "12",
    title: "Nodejs",
    body: "The Complete Nodejs Developer Course",
    published: true,
    author: "2"
  }
];

const comments = [
  {
    id: "102",
    text: "That's awesome. Thanks.",
    author: "2",
    post: "10"
  },
  {
    id: "103",
    text: "I agree. Great article man.",
    author: "1",
    post: "10"
  },
  {
    id: "104",
    text: "This did not work.",
    author: "3",
    post: "11"
  },
  {
    id: "105",
    text: "Never mind. I got it to work.",
    author: "3",
    post: "12"
  }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
