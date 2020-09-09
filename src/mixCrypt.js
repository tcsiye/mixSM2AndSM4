const SM2 = require('./sm2.js')
const SM4 = require('./sm4.js')

class sm2MaxSm4Crypt{
  constructor(optBySM2,optBySM4){
    this.optBySM2 = optBySM2
    this.optBySM4 = optBySM4

  }
  crypt(){
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

const obj =  new sm2MaxSm4Crypt({
  key:'04727471f46837fac5836bd8842debd2547549ae546daa6b4f4d8b896f81dab119e3cb52f8cbce9df1625d804a5b59c0a338115711927a04e48d7dad8e4b37b50c'
},{
  key: 'FB076D2493D2BD130BAE44060F30C29C',text:'世界和平'
},)

obj.crypt()