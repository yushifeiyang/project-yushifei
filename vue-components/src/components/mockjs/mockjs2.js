const Mock = require('mockjs')
const Random = Mock.Random
// mock一组数据
const produceNewsData = function () {
  let articles = [];
  for (let i = 0; i < 3; i++) {
    let newArticleObject = {
      RandomNumber: Random.natural(1, 20), // 返回随机(n>0)整数
      RandomNumber_int: Random.integer(-20, 20), // 返回随机整数
      RandomNumber_float: Random.float(1, 8, 3, 5), // 返回随机float，1-8之间的整数，3-5位小数
      title: Random.csentence(5, 30), // 文本中文字个数
      paragraph: Random.cparagraph(5, 20), // 文本中句子的最小个数
      thumbnail_pic_di: Random.dataImage('300x250', 'mock的图片'), // 生成一段随机的 Base64 图片编码。
      thumbnail_pic_i: Random.image('300x250', '#ffcc33', '#FFF', 'png', 'ph'), // "http://dummyimage.com/200x100/ffcc33/FFF.png&text=!"
      author_name: Random.cname(), //生成中文名
      email: Random.email(), //email
      address_r: Random.province() + ' ' + Random.city() + ' ' + Random.county(),
      address_n: Random.county(true), //true是生成所属的县
      address_n2: Random.city(true), //true是生成所属的市
      date: Random.date('yyyy-MM-dd HH:mm:ss') + '&' + Random.time()
    }
    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
}
export default Mock.mock('api/mocktest2', produceNewsData)
