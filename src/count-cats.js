export default function countCats(matrix) {
  let arr = matrix.flat(),
    number = 0;
  for (let i of arr) {
    if (i == '^^') number++;
  }
  return number;
}
