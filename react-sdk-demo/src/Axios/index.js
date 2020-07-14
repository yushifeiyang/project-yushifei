import axios from 'axios'
// export default axios.create({
//     baseURL: window.location.origin+'/lifePayment',
//     timeout: 100000,
//     headers: {'X-Requested-With': 'XMLHttpRequest'},
// });

export default axios.create({
		// baseURL: '/api1/medical-supervision',
		baseURL: window.location.origin + '/medical-supervision',
    timeout: 100000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});
