'use strict';

const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const bs = require('browser-sync').create();
const npmDist = require('gulp-npm-dist');
const htmlInjector = require('bs-html-injector');

sass.compiler = require('node-sass');

// Compile scss files to core.css file
function compileStyle() {
  return src('./scss/core.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./assets/css'))
  .pipe(bs.stream());
}

// Compile scss files to core.css file
function compileStyleMain() {
  return src('./scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./assets/css'))
  .pipe(bs.stream());
}

// Compile lease scss files
function compileLease() {
  return src('./scss/lease.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./assets/css'))
  .pipe(bs.stream());
}

// Compile frontpage scss files
function compileFrontpage() {
  return src('./scss/frontpage.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./assets/css'))
  .pipe(bs.stream());
}

// Compile documents scss files
function compileDocuments() {
  return src('./scss/documents.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('style.css'))
  .pipe(dest('./documents/css'))
  .pipe(bs.stream());
}

// Compile sub documents scss files
function compileSubDocuments() {
  return src('./scss/documents/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./documents/css'))
  .pipe(bs.stream());
}

// Compile and minify scss files to core.min.css file
function minifyStyle () {
  return src('./scss/core.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./assets/css'))
    .pipe(bs.stream());
}

// Compile and minify scss files to core.min.css file
function minifyStyleMain () {
  return src('./scss/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./assets/css'))
    .pipe(bs.stream());
}

// Compile and minify lease scss
function minifyLease () {
  return src('./scss/lease.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./assets/css'))
    .pipe(bs.stream());
}

// Compile and minify frontpage scss
function minifyFrontpage() {
  return src('./scss/frontpage.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./assets/css'))
    .pipe(bs.stream());
}

// Start a server
function serve () {
  bs.use(htmlInjector, {
    files: "**/*.html"
  });

  // Now init the Browsersync server
  bs.init({
    injectChanges: true,
    server: true,
    notify: false
  });

  // Listen to change events on HTML and reload
  watch('**/*.html').on('change', htmlInjector);

  // Provide a callback to capture ALL events to CSS
  // files - then filter for 'change' and reload all
  // css files on the page.
  watch('scss/_mixins.scss', series(compileStyle, compileStyleMain, minifyStyle, minifyStyleMain));
  watch('scss/_variables.scss', series(compileStyle, compileStyleMain, minifyStyle, minifyStyleMain));

  watch('scss/components/*.scss', series(compileStyle, minifyStyle));
  watch('scss/plugins/*.scss', series(compileStyle, minifyStyle));
  watch('scss/core.scss', series(compileStyle, minifyStyle));

  watch('scss/pages/*.scss', series(compileStyleMain, minifyStyleMain));
  watch('scss/panels/*.scss', series(compileStyleMain, minifyStyleMain));
  watch('scss/main.scss', series(compileStyleMain, minifyStyleMain));

  watch('scss/lease/*.scss', series(compileLease, minifyLease));
  watch('scss/lease.scss', series(compileLease, minifyLease));

  watch('scss/frontpage.scss', series(compileFrontpage, minifyFrontpage));
  watch('scss/pages/_frontpage.scss', series(compileFrontpage, minifyFrontpage));

  watch('scss/documents/*.scss', compileSubDocuments);

  watch('scss/documents.scss', compileDocuments);
  watch('scss/documents/_base.scss', compileDocuments);
  watch('scss/documents/_util.scss', compileDocuments);

  watch('scss/documents/_variables.scss', series(compileDocuments, compileSubDocuments));
}

// Copy dependencies to template/lib
function npmDep () {
  return src(npmDist(), { base:'./node_modules/' })
    .pipe(rename(function(path) {
      path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
    }))
    .pipe(dest('./lib'));
}

exports.compileStyle = compileStyle;
exports.compileStyleMain = compileStyleMain;
exports.compileLease = compileLease;
exports.compileFrontpage = compileFrontpage;
exports.compileDocuments = compileDocuments;
exports.compileSubDocuments = compileSubDocuments;

exports.minifyStyle = minifyStyle;
exports.minifyStyleMain = minifyStyleMain;
exports.minifyLease = minifyLease;
exports.minifyFrontpage = minifyFrontpage;

exports.serve = serve;
exports.npmDep = npmDep;
