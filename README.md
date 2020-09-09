# js国密sm2与sm4算法混合加密
sm2与sm4的加密原理可以查看根目录的doc文件夹，关于sm2与sm的混合加密算法如下：

**资源**：[基于国密 SM4和 SM2的混合密码算法研究与实现](http://r.cnki.net/Kreader/CatalogViewPage.aspx?dbCode=CRJT_CJFD&filename=rjdk201308048&tablename=CJFD2013&compose=&first=1&uid=&ecode=CRJT_CJFD)

**加密过程**：

<img src="https://i.loli.net/2020/09/09/9VNGftdqWXAcueS.png" style="width:90%;float:left" />

加密过程明文通过sm4（ecb）模式进行加密，再通过sm2（c1c2c3）加密sm4的密钥。



使用方法：

Install package "mixSM2andSM4" to you project

`npm i mixSM2andSM4 --save` or `yarn add mixSM2andSM4 --save`



```javascript
// the example for crypt and encrypt by SM2, but SM4 and mix‘s like it.  
// 1.import functional like "sm2"、"sm4" in "mixSm2andSM4" by npm package
import {sm2,sm4,mixCrypt} from 'mixSm2andSM4'

//-------sm2---------
// 2.the step paly construct crpt or encrypt class
const _sm2 = new sm2()
// crypt
const result = _sm2.crypt(publicKey,value)
// 解密
const result = _sm2.encrypt(publickey,privateKey,value)

// -------sm4
...
// -------mix
...



```

