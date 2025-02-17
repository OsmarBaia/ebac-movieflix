import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import browserSyncLib from 'browser-sync';

const sass = gulpSass(dartSass);
const browserSync = browserSyncLib.create();

// Compilar SCSS para CSS
export function styles() {
    return gulp.src('src/scss/global.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

// Compilar Slick SCSS para CSS
export function slick_styles() {
    return gulp.src('src/scss/slick.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

// Minificar JavaScript
export function scripts() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(terser())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

// Otimizar imagens
export function images() {
    return gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// Watcher para mudanças
export function watchFiles() {
    browserSync.init({
        server: { baseDir: './' }
    });
    gulp.watch('src/scss/**/*.scss', styles);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch('*.html').on('change', browserSync.reload);
}

// Tarefa padrão
export default gulp.parallel(styles,slick_styles, scripts, images, watchFiles);