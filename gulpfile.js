var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var changed = require('gulp-changed');



//compile sass

gulp.task('sass', function(){
  return gulp.src('app/stylesheets/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//copy HTML
gulp.task('html', function(){
  return gulp.src('app/index.html')
  .pipe(gulp.dest('dist'))
});

//copy JS
gulp.task('js', function(){
  return gulp.src('app/js/*.js')
  .pipe(changed('dist/js'))
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//copy images
gulp.task('img', function(){
  return gulp.src('app/img/**/*')
  .pipe(gulp.dest('dist/img'))
});

//copy fonts
gulp.task('font', function(){
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

//browsersync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
})


//watcher

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/stylesheets/scss/**/*.scss', { interval: 8000 }, ['sass']);
  gulp.watch('app/*.html', ['html']).on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/img/**/*', ['img']).on('change', browserSync.reload);
  gulp.watch('app/font/**/*', ['font']).on('change', browserSync.reload);
})






//Default

gulp.task('default', ['watch']);
