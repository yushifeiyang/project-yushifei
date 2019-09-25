const valid = {
  // 精确验证身份证
  isChinaIDCard: function (StrNo) {
    let res = {
      tip: '验证成功',
      value: true
    }
    StrNo = StrNo.toString()
    // 长度验证
    if (StrNo.length === 0) {
      res = {
        tip: '请填写您的证件号码！',
        value: false
      }
      return res
    } else if (StrNo.length === 18) {
      // 验证前17位是数字
      if (valid.validateNumber(StrNo.substr(0, 17))) {
        // 身份证合法校验
        if (valid.validateCodeBy18IdCard(StrNo)) {
          res = {
            tip: '成功',
            value: true
          }
          return res
        } else {
          res = {
            tip: '校验错误',
            value: false
          }
          return res
        }
      } else {
        res = {
          tip: '不是合法数字',
          value: false
        }
        return res
      }
    } else {
      res = {
        tip: '不是18位',
        value: false
      }
      return res
    }
  },
  validateCodeBy18IdCard: function (StrNo) {
    var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1] // 加权因子
    var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2] // 身份证验证位值，10代表X
    var aIdCard = StrNo.split('') // 得到身份证数组
    var sum = 0
    if (aIdCard[17].toLowerCase() === 'x') {
      aIdCard[17] = 10 // 将最后位为x的验证码替换为10方便后续操作
    }
    for (var i = 0; i < 17; i++) {
      sum += Wi[i] * aIdCard[i] // 加权求和
    }
    var valCodePosition = sum % 11
    if (aIdCard[17].toString() === ValideCode[valCodePosition].toString()) {
      return true
    } else {
      // console.log('校验错误')
      return false
    }
  },
  validateNumber: function (oNum) {
    if (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/.test(oNum)) {
      return true
    }
  }
}
module.exports = valid
