const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'example')
            }
        },
        entry: {
            app: path.join(__dirname, 'example', 'main.js')
        }
    }
}
