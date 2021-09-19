const isString = (str, cb) => {
  if (typeof str) cb(str);
};

isString("Omri", (str) => {
  console.log(str);
});
