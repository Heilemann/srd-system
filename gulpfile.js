// dependencies
const { task, src, dest, watch, series, parallel } = require('gulp')
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
var path = require('path')
var filesTokeys = require('gulp-file-contents-to-keys')
var browserSync = require('browser-sync').create()
var systemConfig = JSON.parse(fs.readFileSync('./system.json'))

// scss -> css -> partial -> compile partial -> concat -> minify -> dest

function compileCSS() {
	return src('src/scss/*.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(minify())
		.pipe(dest('dist/css'))
		.pipe(browserSync.reload({ stream: true }))
}

function jsmin() {
	return src(systemConfig.scripts)
		.pipe(concat('scripts.js'))
		.pipe(terser())
		.pipe(
			footer(`
      let scripts = {}
      if (typeof hooks !== 'undefined') {
        scripts = { ...scripts, hooks: hooks }
      }
      if (typeof helpers !== 'undefined') {
        scripts = { ...scripts, helpers: helpers }
      }
      if (typeof partials !== 'undefined') {
        scripts = { ...scripts, partials: partials }
      }
      return scripts
    `),
		)
		.pipe(dest('dist/js'))
		.pipe(browserSync.reload({ stream: true }))
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

const collatePartials = () => {
	return src('src/partials/**/*.hbs')
		.pipe(
			filesTokeys({
				name: 'const partials',
				fileName: 'partials.js',
				minify: true,
				removeFileTypes: true,
				folderDelimiter: '|',
			}),
		)
		.pipe(footer('return partials'))
		.pipe(dest('dist/js'))
		.pipe(browserSync.reload({ stream: true }))
}

const collateHandlebars = () => {
	var templates = src('src/templates/**/*.hbs')
		.pipe(handlebars())
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(
			declare({
				namespace: 'System.templates',
				noRedeclare: true, // Avoid duplicate declarations
			}),
		)

	return merge(templates)
		.pipe(concat('templates.js'))
		.pipe(footer('return System.templates'))
		.pipe(dest('dist/js/'))
		.pipe(browserSync.reload({ stream: true }))
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

function watchTask() {
	watch('src/scss/*.scss', compileCSS)
	watch('src/js/*.js', jsmin)
	watch('src/images/*.{jpg,png}', optimizeimg)
	watch('src/partials/**/*.hbs', collatePartials)
	watch('src/templates/**/*.hbs', collateHandlebars)
	watch('src/values.yml', compileYAML)
	watch('utils/*.html', copyUtils)
	watch('dist/images/*.{jpg,png}', webpImage)
	watch('system.json', copyConfig)

	browserSync.init({
		server: {
			baseDir: './dist',
		},
	})
}

exports.default = series(
	// parallel(
	copyConfig,
	copyUtils,
	compileCSS,
	jsmin,
	optimizeimg,
	webpImage,
	collatePartials,
	collateHandlebars,
	compileYAML,
	// ),
	watchTask,
)

// exports.version = version
