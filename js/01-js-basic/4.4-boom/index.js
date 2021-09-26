function boom(n) {
  for (let currentNumber = 1; currentNumber <= n; currentNumber++) {
    if (currentNumber % 7 === 0 && isIncludesSeven(currentNumber))
      console.log("Boom-Boom");
    else if (currentNumber % 7 === 0) console.log("Boom");
    else console.log(currentNumber);
  }
}

function isIncludesSeven(n) {
  const arrNum = n.toString().split("");

  return arrNum.includes("7");
}

/* another way to check if a number includes 7 */
function isIncludesSeven1(num) {
  while (num > 0) {
    let reminder = num % 10;
    if (reminder === 7) return true;

    num = Math.floor(num / 10);
  }

  return false;
}

boom(18);
