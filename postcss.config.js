module.exports = {
  plugins: [
    require('autoprefixer')({browsers: ['IOS > 8']}),
    require('cssnano')()
  ]
}
