const gulp = require('gulp'),
    terser = require('gulp-terser'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint');

gulp.task('sass', function() {
    return gulp
        .src('./sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./build/css'))
});
gulp.task('scripts', function() {
    return gulp
        .src('./js/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(terser())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./build/js'))
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('reload', function(done) {
    browserSync.reload();
    done()
})

gulp.task('watch', function() {
    gulp.watch('./js/*.js', gulp.series('scripts', 'reload'));
    gulp.watch('./sass/*.scss', gulp.series('sass', 'reload'));
    gulp.watch('index.html', gulp.series('reload'))

});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));