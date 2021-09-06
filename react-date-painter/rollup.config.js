import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				exports: 'named',
				sourcemap: true,
				strict: false,
			},
			{
				file: pkg.module,
				format: 'esm',
				compact: true,
				sourcemap: true,
			},
		],
		plugins: [
			typescript(),
			terser(),
			postcss({
				extract: true,
			}),
		],
		external: ['react', 'react-dom'],
	},
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es' }],
		plugins: [
			dts(),
			postcss({
				extract: true,
			}),
		],
	},
]
