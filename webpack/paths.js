const path = require('path')

export const outputPath = path.join(__dirname, '..', process.env.CLIENT_OUTPUT_PATH || 'dist/assets')
export const publicPath = `${process.env.CLIENT_PUBLIC_PATH || 'assets'}$`
