/*
Problem:
input: A number
output: the number but represented as a roman numeral
rules: 
I - equals 1. I, II, III, 
V - equals 5. IV, V, VI, VII, VIII, 
X - equals 10. IX, X, XI, XII, XIII. XX = 20, XXX = 30
L - same as V
C - 100
D - 500
M - 1000



Examples: see test code


Data Structures:

class to create he numeral
  constructor that defines the number

  toRoman to convert the number property to a string roman numeral


Algorithm:
  create and get the number of each of these catagories:
  1000s: divide number by 1000 round down
  set number to input % 1000
  500s:  
  100s:
  50s:
  10s:
  5s:
  1s:


*/
class RomanNumeral {
  static ONES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  static TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  static HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'DM'];
  static THOUSANDS = ['M', 'MM', 'MMM'];

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let num = this.number;
    let thousands = Math.floor(num / 1000);
    let hundreds = Math.floor((num % 1000) / 100);
    let tens = Math.floor((num % (100 * hundreds)) / 10);
    let ones = Math.floor(num % (10 * tens));
    
    let romanThousand = THOUSANDS[thousands - 1];
    let romanHundred = HUNDREDS[hundreds - 1];
    let romanTens = TENS[tens - 1];
    let romanOnes = ONES[ones - 1];

    return romanThousand + romanHundred + romanTens + romanOnes;
  }
}

module.exports = RomanNumeral;