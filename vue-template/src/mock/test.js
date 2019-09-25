const Mock = require('mockjs');

const produceData = function (opt) {
  return {
    errorCode: '0',
		Errormsg: 'success',
		data: {
			name: 'test'
		}
  };
};

Mock.mock('/api1/h5gateway/article/getArticleList', /post/, produceData);
