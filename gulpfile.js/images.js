const { dest, src } = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')
const toaster = require('./toaster')
const flatten = require('gulp-flatten')

function optimizeImages (cb) {
  return src([
    'images/**/*.+(webp|jpg|png|gif|svg)',
    'src/pages/**/*.+(webp|jpg|png|gif|svg)'
  ])
    .pipe(toaster('Images', cb))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: true }
      ],
      use: [imageminPngquant()]
    }))
    .pipe(flatten())
    .pipe(dest('dist/img'))
}

module.exports = { optimizeImages }
