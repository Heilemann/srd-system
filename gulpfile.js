// dependencies
const { src, dest, watch, series, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const prefix = require('gulp-autoprefixer')
const minify = require('gulp-clean-css')
const terser = require('gulp-terser')
// const imagemin = require('gulp-imagemin')
const imagewebp = require('gulp-webp')
const footer = require('gulp-footer')
const fs = require('fs')
const handlebars = require('gulp-handlebars')
const wrap = require('gulp-wrap')
const declare = require('gulp-declare')
const concat = require('gulp-concat')
const merge = require('merge-stream')
const yaml = require('gulp-yaml')
const jsonModify = require('gulp-json-modify')

var systemConfig = JSON.parse(fs.readFileSync('./system.json'))

function compilecss() {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest('/dist/css'))
}

const copyJS = () => {
  // return gulp
  //   .src('node_modules/handlebars/dist/handlebars.runtime.js')
  //   .pipe(dest('dist/js/'))
}

function jsmin() {
  return src(systemConfig.scripts)
    .pipe(concat('scripts.js'))
    .pipe(terser())
    .pipe(
      footer(
        'return {hooks: hooks || {}, helpers: helpers || {}, partials: partials || {}}',
      ),
    )
    .pipe(dest('dist/js'))
}

function optimizeimg() {
  return (
    src('/src/images*.{jpg.,png}')
      // .pipe(
      //   imagemin([
      //     imagemin.mozjpeg({ quality: 80, progressive: true }),
      //     iamgemin.optipng({ optimizationLevel: 2 }),
      //   ])
      .pipe(dest('dist/images'))
  )
  // )
}

function webpImage() {
  return src('dist/images/*.{jpg,png}')
    .pipe(imagewebp())
    .pipe(dest('dist/images'))
}

const collateHandlebars = () => {
  // Assume all partials are in a folder such as src/partials/**/*.hbs
  var partials = src(['src/partials/**/*.hbs'])
    .pipe(handlebars())
    .pipe(
      wrap(
        'Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));',
        {},
        {
          imports: {
            processPartialName: function (fileName) {
              // Strip the extension and the underscore
              // Escape the output with JSON.stringify
              return JSON.stringify(path.basename(fileName, '.js'))
            },
          },
        },
      ),
    )

  var templates = src('src/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(
      declare({
        namespace: 'System.templates',
        noRedeclare: true, // Avoid duplicate declarations
      }),
    )

  // Output both the partials and the templates as build/js/templates.js
  return merge(partials, templates)
    .pipe(concat('templates.js'))
    .pipe(footer('return System.templates'))
    .pipe(dest('dist/js/'))
}

const copyUtils = () => {
  return src('utils/*').pipe(dest('dist/'))
}

const copyConfig = () => {
  return src('system.json')
    .pipe(jsonModify({ key: 'scripts', value: 'dist/js/scripts.js' }))
    .pipe(dest('dist/'))
}

// function version() {
//   const version = process.argv[4]
//   // const download = `https://github.com/Heilemann/srd-system/releases/download/${version}/release${version}.zip`

//   return (
//     gulp
//       .src('./system.json')
//       .pipe(jsonModify({ key: 'version', value: version }))
//       // .pipe(jsonModify({ key: 'download', value: download }))
//       .pipe(gulp.dest('./'))
//   )
// }

const compileYAML = () => {
  return src('src/values.yml')
    .pipe(yaml({ space: 2 }))
    .pipe(dest('dist/'))
}

// watchtask

function watchTask() {
  watch('src/scss/*.scss', compilecss)
  watch('src/js/*.js', series(copyJS, jsmin))
  watch('src/images/*.{jpg,png}', optimizeimg)
  watch('dist/images/*.{jpg,png}', webpImage)
  watch('src/templates/**/*.hbs', collateHandlebars)
  watch('utils/*.html', copyUtils)
  watch('system.json', copyConfig)
  watch('src/values.yml', compileYAML)
}

// default gulp
exports.default = series(
  parallel(
    copyConfig,
    copyUtils,
    compilecss,
    jsmin,
    optimizeimg,
    webpImage,
    collateHandlebars,
    compileYAML,
  ),
  watchTask,
)
// exports.version = version
