const book1 = {
  name: "The Lie",
  author: "Omri Zaher",
  year: 2020,
};

const book2 = {
  name: "The Lie",
  author: "Omri Zaher",
  year: 2019,
};

const bookUtils = {
  getFirstPublished: function (book1, book2) {
    return book1.year >= book2.year ? book2 : book1;
  },
  setNewEdition: function (book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage: function (book, lang) {
    book.language = lang;
  },
  setTranslation: function (book, lang, translator) {
    book.translation = {
      translator,
      language: lang,
    };
  },
  setPublisher: function (book, name, location) {
    book.publisher = {
      name,
      location,
    };
  },
  isSamePublisher: function (book1, book1) {
    return (
      book1.publisher.name === book2.publisher.name &&
      book1.publisher.location === book2.publisher.location
    );
  },
};

console.log(bookUtils.getFirstPublished(book1, book2));
