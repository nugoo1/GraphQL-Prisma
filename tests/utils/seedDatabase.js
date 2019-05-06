import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../src/prisma";

const userOne = {
  input: {
    name: "Jen",
    email: "jen@example.com",
    password: bcrypt.hashSync("Red098!@#$")
  },
  user: undefined,
  jwt: undefined
};

const userTwo = {
  input: {
    name: "Jeff",
    email: "jeff@example.com",
    password: bcrypt.hashSync("Red098!@#$")
  },
  user: undefined,
  jwt: undefined
};

const postOne = {
  input: {
    title: "My published post",
    body: "...",
    published: true
  },
  post: undefined
};

const postTwo = {
  input: {
    title: "My draft post",
    body: "...",
    published: false
  },
  post: undefined
};

const commentOne = {
  input: {
    text: "Comment One"
  },
  comment: undefined
};

const commentTwo = {
  input: {
    text: "Comment Two"
  },
  comment: undefined
};

const seedDatabase = async () => {
  jest.setTimeout(20000);

  //   Delete Test Data
  await prisma.mutation.deleteManyComments();
  await prisma.mutation.deleteManyPosts();
  await prisma.mutation.deleteManyUsers();

  //   Create userOne
  userOne.user = await prisma.mutation.createUser({
    data: userOne.input
  });
  userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);

  //   Create userTwo
  userTwo.user = await prisma.mutation.createUser({
    data: userTwo.input
  });
  userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_SECRET);

  // Create postOne
  postOne.post = await prisma.mutation.createPost({
    data: {
      ...postOne.input,
      author: {
        connect: {
          id: userOne.user.id
        }
      }
    }
  });

  // Create postTwo
  postTwo.post = await prisma.mutation.createPost({
    data: {
      ...postTwo.input,
      author: {
        connect: {
          id: userOne.user.id
        }
      }
    }
  });

  // create commentOne
  commentOne.comment = await prisma.mutation.createComment({
    data: {
      text: commentOne.input.text,
      author: {
        connect: {
          id: userTwo.user.id
        }
      },
      post: {
        connect: {
          id: postOne.post.id
        }
      }
    }
  });

  // create commentTwo
  commentTwo.comment = await prisma.mutation.createComment({
    data: {
      text: commentTwo.input.text,
      author: {
        connect: {
          id: userOne.user.id
        }
      },
      post: {
        connect: {
          id: postOne.post.id
        }
      }
    }
  });
};

export {
  seedDatabase as default,
  userOne,
  userTwo,
  postOne,
  postTwo,
  commentOne,
  commentTwo
};
