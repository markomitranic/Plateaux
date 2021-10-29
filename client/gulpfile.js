var scssInput = ['scss/style.scss'],
    jsInput = [
        'src/domain/messageModule.js',
        'src/domain/websocketsModule.js',
        'src/domain/audioModule.js',
        'src/domain/sceneModule.js',
        'src/domain/materialsModule.js',
        'src/domain/planetModule.js',
        'src/domain/gizmoModule.js',
        'src/domain/asteroidsModule.js',
        'src/domain/drawerModule.js',
        'src/domain/interfaceModule.js',
        'src/domain/barometerModule.js',
        'src/domain/populateModule.js',
        'src/domain/preloadModule.js'
    ],
    vendorInput = [
        'src/vendor/pace.min.js',
        'src/vendor/three.min.js',
        'src/vendor/whitestorm.min.js',
        'src/vendor/howler.min.js',
        'src/vendor/analytics.js'
    ],
    scssOutput = 'dist/css',
    jsOutput = 'dist/src';

// Start everything up.
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


// Watch SASS.
gulp.task('sass', function () {
    return gulp
        .src(scssInput)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(scssOutput))
});

gulp.task('domainScripts', function () {
    return gulp.src(jsInput)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(jsOutput))
});

gulp.task('vendorScripts', function () {
    return gulp.src(vendorInput)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(jsOutput));
});

gulp.task('watch', ['sass', 'domainScripts', 'vendorScripts'], function () {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('src/domain/**/*.js', ['domainScripts']);
    gulp.watch('src/vendor/**/*.js', ['vendorScripts']);
});

gulp.task('build', ['sass', 'domainScripts', 'vendorScripts']);

