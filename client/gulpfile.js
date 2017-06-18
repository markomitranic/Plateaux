
var scssInput = ['scss/style.scss'],
    jsInput = [
        'scripts/domain/audioModule.js',
        'scripts/domain/sceneModule.js',
        'scripts/domain/materialsModule.js',
        'scripts/domain/planetModule.js',
        'scripts/domain/gizmoModule.js',
        'scripts/domain/asteroidsModule.js',
        'scripts/domain/drawerModule.js',
        'scripts/domain/interfaceModule.js',
        'scripts/domain/populateModule.js',
        'scripts/domain/preloadModule.js',
        'scripts/domain/**/*.js'
    ],
    vendorInput = [
        'scripts/vendor/pace.min.js',
        'scripts/vendor/three.min.js',
        'scripts/vendor/whitestorm.min.js',
        'scripts/vendor/whitestorm.physics.min.js',
        'scripts/vendor/howler.min.js',
        'scripts/vendor/**/*.js'
    ],
    scssOutput = 'app/css',
    jsOutput = 'app/scripts';



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
gulp.task('sass', function() {
    return gulp
        .src(scssInput)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(scssOutput))
});

gulp.task('domainScripts', function() {
    return gulp.src(jsInput)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(jsOutput))
        // .pipe(rename('scripts.min.js'))
        // .pipe(uglify())
        // .pipe(gulp.dest(jsOutput));
});

gulp.task('vendorScripts', function() {
    return gulp.src(vendorInput)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(jsOutput));
});

gulp.task('watch', ['sass', 'domainScripts', 'vendorScripts'], function (){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('scripts/domain/**/*.js', ['domainScripts']);
    gulp.watch('scripts/vendor/**/*.js', ['vendorScripts']);
});

