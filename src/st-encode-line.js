export default function encodeLine(str) {
  let result = '',
    same = '-',
    num = 0;

  for (let i = 0; i < str.length; i++) {
    same = str[i];
    while (same == str[i]) {
      num++;
      i++;
    }
    result += (num > 1 ? num : '') + same;
    num = 0;
    i--;
  }
  return result;
}
