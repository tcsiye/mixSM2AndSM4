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

  deCrypt() {
    // var f1 = document.form1
    // var prvkey = f1.prvkey1.value
    // var encryptData = value

    const privateKey = new BigInteger(this.privateKey, 16)

    // var cipherMode = f1.cipherMode.value

    const cipher = new SM2Cipher(this.cipherMode)
    const data = cipher.Decrypt(privateKey, this.value)
    console.log(data)
    return data
  }
  crypt(publicKey, value) {
    // this.publicKey = publicKey
    // this.value = value

    // let { publicKey, value } = this

    let msgData = CryptoJS.enc.Utf8.parse(value)

    if (publicKey.length > 130) {
      publicKey = publicKey.substr(publicKey.length - 130)
    }

    const cipher = new SM2Cipher(this.cipherMode)
    const userKey = cipher.CreatePoint(publicKey)

    msgData = cipher.str2Bytes(msgData.toString())

    const encryptData = cipher.Encrypt(userKey, msgData)

    // console.log(encryptData)
    return encryptData
  }
}


//test 
// const sm2 = new sm2Crypt()
// sm2.crypt('04cc891876ada144f95bba99695e28a032c545eb6df5fa1d472278b37a4aed0d0b1e0ae535c98d37802be567fa68e95dc2a8eef3a6037c6fe9bf3524a152f1e553','BB64D440C90C64AC77E612AE7D3DCBF4')

module.exports = sm2Crypt
