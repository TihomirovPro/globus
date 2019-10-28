module.exports = function (plop) {
  plop.setGenerator('page', require('./page/generator.js')())
  plop.setGenerator('section', require('./section/generator.js')())
  plop.setGenerator('js', require('./js/generator.js')())
  plop.setGenerator('block', require('./block/generator.js')())
}
