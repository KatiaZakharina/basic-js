/**
 * @prettier
 */
export default function repeater(str, options) {
  let separator;
  if (!options.repeatTimes) {
    separator = options.addition;
    options.repeatTimes = 1;
  } else {
    options.separator = options.separator ? options.separator + '' : '+';
    options.additionSeparator = options.additionSeparator ? options.additionSeparator + '' : '|';

    separator = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      separator.push(options.addition);
    }
    separator = separator.join(options.additionSeparator);
  }

  let result = [];
  for (let j = 0; j < options.repeatTimes; j++) {
    result.push(str + separator);
  }
  result = result.join(options.separator);

  return result;
}
