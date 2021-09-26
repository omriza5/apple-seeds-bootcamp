var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const readableBooks = (library) =>
  library
    .filter((book) => book.readingStatus === true)
    .forEach((book) => {
      console.log(book.author, "-", book.title, "-", book.readingStatus);
    });

readableBooks(library);
