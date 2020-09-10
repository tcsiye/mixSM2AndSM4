const Hex = require('./js/utils/hex.js')
const SM4 = require('./js/crypto/sm4.js')

/**
 * sm4加密
 * 
 */
class sm4Crypt{

  constructor(key,value){
    this.key = key
    this.value = value

  }

  encrypt(key,value){
    var inputBytes = Hex.utf8StrToBytes(value);
    var key = Hex.decode(key);
    var sm4 = new SM4();
    var cipher = sm4.encrypt_ecb(key,inputBytes);
    const result = Hex.encode(cipher,0,cipher.length)

    return result
  }
}

module.exports = sm4Crypt