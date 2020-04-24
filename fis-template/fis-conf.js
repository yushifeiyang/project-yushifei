fis.hook('relative');
//让所有文件，都使用相对路径。 
fis.match('**', {
	relative: true
})

//不压缩layout目录下的文件
fis.match('layout/**', {
	release: false
});

//发布时，忽略项目中的这些文件
fis.set('project.ignore', ['.git/**', 'fis-conf.js', '*.bat']);

//将css文件夹下所有以scss结尾的文件转换为以css结尾的文件
fis.match('css/index/**.less', {
	rExt: '.css',
	useHash: true,
	parser: fis.plugin('less'),
	packTo: 'css/index/app.min.css'
})

fis.match('css/about/**.less', {
	rExt: '.css',
	useHash: true,
	parser: fis.plugin('less'),
	packTo: 'css/about/app.min.css'
})

//压缩合并js文件
fis.match('js/**.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js', {
		mangle: {},
		compress: {
			drop_console: true
		}
	}),
	packTo: 'js/app.min.js'
});

//压缩合并css文件
fis.match('*.css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
});

//压缩整合图片
fis.match('*.{png,jpg}', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
	optimizer: fis.plugin('png-compressor')
});

fis.match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});

fis.media('debug').match('*.{js,css,png}', {
	useHash: false,
	useSprite: false,
	optimizer: null
})