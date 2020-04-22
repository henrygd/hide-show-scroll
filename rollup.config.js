import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

const production = !process.env.ROLLUP_WATCH

let iifeOutput = [
	{
		// demo site / dev file
		format: 'iife',
		name: 'hideShowScroll',
		file: 'demo/hide-show-scroll.js',
		strict: false,
	},
]

production &&
	iifeOutput.push({
		// dist file
		format: 'iife',
		name: 'hideShowScroll',
		file: 'dist/hide-show-scroll.min.js',
		strict: false,
	})
production &&
	iifeOutput.push({
		// dist file
		format: 'umd',
		name: 'hideShowScroll',
		file: 'dist/hide-show-scroll.umd.js',
		strict: false,
	})

let config = [
	{
		input: 'index.js',
		output: iifeOutput,
		plugins: [
			terser({
				compress: {
					booleans_as_integers: true,
					pure_getters: true,
				},
			}),
			filesize({
				showMinifiedSize: !production,
			}),
		],
	},
]

export default config
