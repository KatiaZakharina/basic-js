/**
 * @prettier
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = arr.slice();

  for (let i = 0; i < result.length; i++) {
    if (result[i] == '--discard-next') {
      if (i != result.length && result[i + 1]) {
        // && typeof result[i+2]!='string' && typeof result[i-2]!='string'
        result.splice(i + 1, 1);
        result.splice(i, 1, undefined);
      } else {
        result.splice(i, 1);
      }
    }
    if (result[i] == '--discard-prev') {
      if (i && result[i - 1]) {
        result.splice(i - 1, 1);
        result.splice(i, 1, undefined);
      } else {
        result.splice(i, 1);
      }
    }
    if (result[i] == '--double-next') {
      if (i != result.length && result[i + 1]) {
        result.splice(i, 1, result[i + 1]);
      } else {
        result.splice(i, 1);
      }
    }
    if (result[i] == '--double-prev') {
      if (i && result[i - 1]) {
        result.splice(i, 1, result[i - 1]);
      } else result.splice(i, 1);
    }
  }
  return result.filter(item => item);
}
