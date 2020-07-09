// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
		"autoprefixer": {},
		"postcss-px-to-viewport": {
			unitToConvert: 'px',
			viewportWidth: 750, // (Number) The width of the viewport.
			viewportHeight: 1334, // (Number) The height of the viewport.
			unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
			viewportUnit: 'vw', // (String) Expected units.
			selectorBlackList: [], // (Array) The selectors to ignore and leave as px.
			minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
			mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
			exclude: /(\/|\\)(node_modules)(\/|\\)/
		}
  }
}
