module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>'],
	testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'.+\\.(css|sass|scss)$': 'jest-transform-stub',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	verbose: true,
}
