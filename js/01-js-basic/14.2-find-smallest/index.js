function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
const res = findSmallest(52, 66, 2);

console.log(res);

// line 10 => wrong function name
// vscode debug tool
