function piApprox(n) {
  let pi = 0;
  let outside = [];
  let inside = [];

  for (i = 1; i <= n; i++) {
    x = Math.random();
    y = Math.random();
    pythagoras = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
    if (pythagoras > 1) {
      outside.push(pythagoras);
    } else {
      inside.push(pythagoras);
    }
  }
  pi = 4 * (inside.length / (outside.length + inside.length));
  console.log(pi);
  return pi;
}
