// const Hex = require('./js/utils/hex.js')
const SM2Cipher = require('./js/crypto/sm2.js')
const BigInteger = require('./js/ext/jsbn2.js')
const CryptoJS = require('./js/utils/core.js')

class sm2Crypt {
  constructor(privateKey, publicKey, value, cipherMode) {
    this.privateKey = privateKey
    this.publicKey = publicKey
    this.value = value
    this.cipherMode = cipherMode || '0'
  }

  decrypt() {
  // TODO:待完善
    const privateKey = new BigInteger(this.privateKey, 16)
    const cipher = new SM2Cipher(this.cipherMode)
    const data = cipher.Decrypt(privateKey, this.value)
    console.log(data)
    return data
  }
  encrypt(publicKey, value) {
    let msgData = CryptoJS.enc.Utf8.parse(value)

    if (publicKey.length > 130) {
      publicKey = publicKey.substr(publicKey.length - 130)
    }

    const cipher = new SM2Cipher(this.cipherMode)
    const userKey = cipher.CreatePoint(publicKey)

    msgData = cipher.str2Bytes(msgData.toString())
    const encryptData = cipher.Encrypt(userKey, msgData)
    console.log(encryptData)
    return encryptData
  }
}


//test 
const sm2 = new sm2Crypt()
sm2.encrypt('04064A192A13B1920A2044890A90ADC1AE5006C9B95595191FC056A1747346A0CFAB471D017A81AAD20E5C6AA28BF896A6A85E7570003F94E010988BA9F39AD489','天下第一')

// module.exports = sm2Crypt
