var path = require('path')
const { src, dest, watch, series } = require('gulp')
var wrap = require('gulp-wrap')
var declare = require('gulp-declare')
var concat = require('gulp-concat')
var merge = require('merge-stream')
var handlebars = require('gulp-handlebars')

const collateHandlebars = () => {
  // Assume all partials are in a folder such as src/partials/**/*.hbs
  var partials = gulp
    .src(['src/partials/**/*.hbs'])
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

  var templates = gulp
    .src('src/templates/**/*.hbs')
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
    .pipe(dest('dist/js/'))
}

const copyJS = () => {
  return gulp
    .src('node_modules/handlebars/dist/handlebars.runtime.js')
    .pipe(dest('dist/js/'))
}

const copyHTML = () => {
  return src('src/index.html').pipe(dest('dist/'))
}

const watchTask = () => {
  watch('src/templates/*.hbs', series(collateHandlebars))
  watch('src/index.html', copyHTMLFile)
}

// Default task
exports.default = series(
  parallel(copyJS, copyHTML),
  collateHandlebars,
  watchTask,
)
