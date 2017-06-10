
var scssInput = ['scss/style.scss'],
    scssOutput = 'app/css',
    jsInput = ['scripts/vendor/**/*.js', 'scripts/domain/**/*.js'],
    jsOutput = 'app/scripts';

// Start everything up.
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


// Watch SASS.
gulp.task('sass', function() {
    return gulp
        .src(scssInput)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(scssOutput))
});

gulp.task('scripts', function() {
    return gulp.src(jsInput)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsOutput))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsOutput));
});

gulp.task('watch', ['sass', 'scripts'], function (){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('scripts/**/*.js', ['scripts']);
});