import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import buble from '@rollup/plugin-buble'

const production = !process.env.ROLLUP_WATCH

let config = [
	{
		input: 'index.js',
		output: {
			// demo site / dev file
			format: 'iife',
			name: 'hideShowScroll',
			file: 'demo/hide-show-scroll.js',
			strict: false,
		},
		plugins: [
			buble(),
			terser(),
			filesize({
				showMinifiedSize: !production,
			}),
		],
	},
]

if (production) {
	config = [
		...config,
		{
			input: 'index.js',
			output: [
				{
					format: 'iife',
					name: 'hideShowScroll',
					file: 'dist/hide-show-scroll.min.js',
					strict: false,
					plugins: [terser()],
				},
				{
					format: 'umd',
					name: 'hideShowScroll',
					file: 'dist/hide-show-scroll.umd.js',
					strict: false,
					plugins: [terser()],
				},
			],
			plugins: [buble(), terser()],
		},
		{
			input: 'index.js',
			output: {
				format: 'es',
				file: 'dist/hide-show-scroll.mjs',
				plugins: [
					terser(),
					filesize({
						showMinifiedSize: !production,
					}),
				],
			},
			plugins: [terser()],
		},
	]
}

export default config
