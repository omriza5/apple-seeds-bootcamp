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

boom(18);
