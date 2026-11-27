function digitize(n) {
  return String(n).split("").reverse().map(i =>Number(i));
}