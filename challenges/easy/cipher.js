class Cipher {
  static ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  static encode(string) {
    let result = '';

    for (let indx = 0; indx < string.length; indx += 1) {
      let char = string[indx];

      if (Cipher.ALPHABET.includes(char.toLowerCase())) {
        result += Cipher.getCipheredLetter(char);
      } else {
        result += char;
      }
    }

    return result;
  }

  static getCipheredLetter(letter) {
    let lowerLetter = letter.toLowerCase();
    let indx = Cipher.ALPHABET.indexOf(lowerLetter);

    if (indx > 12) {
      indx -= 13;
    } else {
      indx += 13;
    }

    let result = Cipher.ALPHABET[indx];

    if (letter.toUpperCase() === letter) {
      return result.toUpperCase();
    }
    return result;
  }
}

module.exports = Cipher;