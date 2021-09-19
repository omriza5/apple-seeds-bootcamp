const isString = (str, cb) => {
  if (typeof str === "string") {
    cb(str);
  }
};

isString("1", (str) => {
  console.log(str);
});
