function isUrl(string) {
  return !!string.match(/^https?:\/\/\S*$/);
}

function fields(string) {
  return string.split(/[ \t,]+/)
}

function mysteryMath(string) {
  return string.replace((/[\+\-\*\/]/), '?');
}

function mysteriousMath(string) {
  return string.replaceAll((/[\+\-\*\/]/g), '?');
}

function danish(string) {
  return string.replace((/\b(apple|blueberry|cherry)\b/), 'danish');
}

function formatDate(date) {
  return date.replace(/(\d\d\d\d)[\-\\](\d\d)[\-\\](\d\d)/, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)