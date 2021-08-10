module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let teens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
  let result = '';
  let space = '';
  let numHundred = Math.trunc(number / 100);
  let numTeens = number - numHundred * 100;
  let numOnes = numTeens % 10;
  
  if (number === 0) {
    return 'zero';
  }
  else {
    result = (numHundred !== 0) ? result + ones[numHundred] + ' hundred': result;
    if (numTeens === 0) {
      return result;
    }
    else {
      if (numHundred !== 0) {
        space = ' '
      }
      if (numTeens < 20) {
        return result + space + ones[numTeens];
      }
      else {
        result = (numOnes === 0) ? result + space + teens[Math.trunc(numTeens / 10) - 2] : result + space + teens[Math.trunc(numTeens / 10) - 2] + ' ' + ones[numOnes];
        return result;
      }
    }
  }

return result;
}

/* console.log(toReadable(999)); */