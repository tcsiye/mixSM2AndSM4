const SM2 = require('./sm2.js')
const SM4 = require('./sm4.js')

class sm2MaxSm4Crypt{
  constructor(optBySM2,optBySM4){
    this.optBySM2 = optBySM2
    this.optBySM4 = optBySM4

  }
  encrypt(){
    const {key:code,text}= this.optBySM4
    const sm4 = new SM4()
    const result = sm4.crypt(code,text)
    console.log('--------sm4--------')
    console.log('public key:',code)
    console.log('text:',text)
    console.log('result:',result)
    if(result){
      const {key}= this.optBySM2
      const sm2 = new SM2()
      const data = sm2.crypt(key,code)

      console.log('--------sm2--------')
      // console.log('private key:',privateKey)
      console.log('public key:',key)
      console.log('result:',data)

    }
  }
}

module.exports = sm2MaxSm4Crypt