const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    moduleDirectories: ['node_modules', '/'],
    verbose: true,
}

module.exports = createJestConfig(customJestConfig)
