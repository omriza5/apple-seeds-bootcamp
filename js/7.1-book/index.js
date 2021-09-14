const book = {
  name: "The Lie",
  author: "Omri Zaher",
  price: 25,
  releaseYear: "2020",
  category: "drama",
};

const displayBook = (book) => {
  console.log(
    `The book ${book.name} was written by ${book.author} in the year ${book.releaseYear}`
  );
};

displayBook(book);
