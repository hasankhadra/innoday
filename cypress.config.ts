import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        // eslint-disable-next-line no-unused-vars
        setupNodeEvents(on, config) {},
    },

    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },
})
