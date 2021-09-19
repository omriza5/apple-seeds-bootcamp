const isString = (str, cb) => {
  if (typeof str === "string") {
    cb(str);
  } else {
    console.log(false);
  }
};

isString("Omri", () => {
  console.log(true);
});

/************************************************************************************** */

const firstWordUpperCase = (sentence, cb) => {
  const sentenceArr = sentence.split(" ");

  /* Capitalize the first word in the sentence */
  sentenceArr[0] = sentenceArr[0].toUpperCase();

  /* convert sentence array to a string */
  const newSentence = sentenceArr.join(" ");

  cb(newSentence);
};

firstWordUpperCase("Omri Zaher", (sentence) => {
  const dashedWord = sentence.split(" ");
  console.log(dashedWord.join("-"));
});
