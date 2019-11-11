const { series, parallel, watch } = require('gulp')
const { runServer, reloadServer } = require('./server')
const { cleanDistFolder } = require('./clean')
const { copyStaticFiles } = require('./static')
const {
  buildMarkup,
  buildSections
} = require('./markup')
const { buildStyles } = require('./styles')
const { optimizeImages } = require('./images')
const { upload, uploadMin } = require('./upload')

// watchers
function runWatchers (cb) {
  // pug
  watch([
    'src/siteConfig.pug',
    'src/pages/**/*.pug',
    'src/layout/**/*.pug',
    'src/blocks/**/*.pug',
    'src/sections/**/*.pug'
  ], series(buildMarkup, reloadServer))

  // styles
  watch([
    'src/blocks/**/*.sass',
    'src/styles/**/*.sass',
    'src/pages/**/*.sass',
    'src/sections/**/*.sass'
  ], series(buildStyles, reloadServer))

  // static
  watch([
    'static/**/*'
  ], series(copyStaticFiles, reloadServer))

  // images
  watch([
    'images/*.+(webp|jpg|png|gif|svg)',
    'src/pages/**/*.+(webp|jpg|png|gif|svg)'
  ], series(optimizeImages, reloadServer))
  cb()
}

// development task
exports.default = series(
  cleanDistFolder,
  parallel(copyStaticFiles),
  parallel(buildStyles, buildMarkup, buildSections, runServer, optimizeImages),
  runWatchers
)

// build task
exports.build = series(
  cleanDistFolder,
  parallel(copyStaticFiles),
  parallel(buildStyles, buildMarkup, buildSections, optimizeImages)
)

// upload task
exports.upload = upload
exports.uploadMin = uploadMin

// clean task
exports.clean = cleanDistFolder
