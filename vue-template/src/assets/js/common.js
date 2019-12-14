// getAuthcode
export function getAuthCodeFn () {
	return new Promise((resolve, reject) => {
	  try {
	    window.yl.call('getAuthcode', {}, {
	      onSuccess: (res) => {
	        resolve(res);
	      },
	      onFail: (e) => {
	        reject(e);
	      }
	    });
	  } catch (error) {
	    return new Error('获取AuthCode异常');
	  }
	});
}
