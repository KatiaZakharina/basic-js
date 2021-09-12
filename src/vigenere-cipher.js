export default class VigenereCipheringMachine {
  constructor(type) {
    this.type = type ? type : true;
  }
  encrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    let keyLength = key.length;
    for (let i = key.length; i < message.length; i++) {
      key += key[i % keyLength];
    }
    key = key.toUpperCase();
    message = message.toUpperCase();

    let result = '';
    for (let i = 0, j = 0; i < message.length; i++, j++) {

      if (!(message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91)) {
        result += message[i];
        j--;
      } else {
        result += String.fromCharCode(
          ((message.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26) + 65,
        );
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    let keyLength = key.length;
    for (let i = key.length; i < message.length; i++) {
      key += key[i % keyLength];
    }
    key = key.toUpperCase();
    message = message.toUpperCase();

    let result = '';
    for (let i = 0, j = 0; i < message.length; i++, j++) {

      if (!(message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91)) {
        result += message[i];
        j--;
      } else {
        result += String.fromCharCode(
          ((message.charCodeAt(i) - 65 + 26 - key.charCodeAt(j) + 65) % 26) + 65,
        );
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }
}
