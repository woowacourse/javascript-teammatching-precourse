export function create2DArray(rows) {
  let arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
  }
  return arr;
}

export function sequenceArray(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }
  return arr;
}
