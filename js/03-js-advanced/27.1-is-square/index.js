function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;

  this.isSquare = function () {
    if (this.a === this.b && this.a - this.c === 0 && this.a - this.d === 0)
      return true;

    return false;
  };
}

let s = new Square(5, 15, 5, 5);

console.log(s.isSquare());
