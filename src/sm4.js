const Hex = require('./js/utils/hex.js')
const SM4 = require('./js/crypto/sm4.js')
// const SM4 = require('./js/utils/byteUtil.js')


// import Hex from './js/utils/hex.js'
// import  SM4 from './js/crypto/sm4.js'

// const hex = require('js/utils/byteUtil.js')
// const SM4 = require('./js/crypto/sm4-1.0.js')
// const hex = require('js/ext/jsbn.js')
// const hex = require('js/ext/jsbn2.js')
// const hex = require('js/ext/prng4.js')
// const hex = require('js/ext/rng.js')


/**
 * sm加密
 * 
 */
class sm4Crypt{

  constructor(key,value){
    this.key = key
    this.value = value

  }

  crypt(key,value){
    var inputBytes = Hex.utf8StrToBytes(value);
    var key = Hex.decode(key);
    var sm4 = new SM4();
    var cipher = sm4.encrypt_ecb(key,inputBytes);
    const result = Hex.encode(cipher,0,cipher.length)
    // console.log(result)
    return result
  }
}

// test
// const sm4 = new sm4Crypt()
// sm4.crypt()

module.exports = sm4Crypt