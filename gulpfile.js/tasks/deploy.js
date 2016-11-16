'use strict';

var gulp  = require('gulp');
var pkg = require('../../package.json');
var execSync = require('child_process').execSync;
var config = require('../config');
var path = require('path');
var zip = require('gulp-zip');
var gulpSequence = require('gulp-sequence');

gulp.task('deploy', ['prod'], function() {
  // execSync(['bash gulpfile.js/lib/deploy.sh ' + pkg.name], { stdio: 'inherit' });
  console.log('upload');
});

// gulp.task('build:production', function(cb) {
//   process.env.NODE_ENV = 'production';
//   gulpSequence('clean', ['fonts', 'images', 'svg-sprite'], ['sass', 'js', 'json', 'manifest', 'html'], ['zip', 'backup-image'], cb);
// });

// gulp.task('downloads', function() {
//   return gulp.src(path.join(config.tasks.zip.dest, '/**/*'))
//   .pipe(gulp.dest(path.join(config.root.dest, 'downloads')))
//   .pipe(zip(pkg.name + 'all.zip'))
//   .pipe(gulp.dest(config.root.dest));
// });

// gulp.task('deploy:downloads', function(cb) {
//   gulpSequence('prod', ['downloads', 'deploy'], cb);
// });


gulp.task('deploy:downloads', ['prod'], function() {
  return gulp.src(path.join(config.tasks.zip.dest, '/**/*'))
  .pipe(gulp.dest(path.join(config.root.dest, 'downloads')))
  .pipe(zip(pkg.name + 'all.zip'))
  .pipe(gulp.dest(config.root.dest));
});