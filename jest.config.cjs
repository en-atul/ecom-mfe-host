/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'jsdom',
	rootDir: __dirname,
	setupFilesAfterEnv: [require.resolve('./jest.setup.ts')],
	transform: {
		'^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.jest.json' }],
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': require.resolve('./test/styleMock.js'),
	},
};
