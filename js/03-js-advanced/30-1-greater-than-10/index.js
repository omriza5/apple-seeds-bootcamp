function isGreaterThanTen(num) {
  return new Promise((resolve, reject) => {
    if (num >= 10) resolve(true);
    else reject(false);
  });
}

isGreaterThanTen(9)
  .then((result) => console.log(result))
  .catch((result) => console.log(result));
