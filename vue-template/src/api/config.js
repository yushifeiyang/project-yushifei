// 配置项
const dev = {
	STAGE_BASE_URL: '/api1'
};

const test = {
	STAGE_BASE_URL: '/'
};

const pro = {
	STAGE_BASE_URL: '/'
};

const ENV = process.env.NODE_ENV === 'development' ? dev : (process.env.NODE_ENV === 'test' ? test : pro);

export default ENV;