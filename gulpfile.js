/* ======================================

1 - Pre tasks
	1.1 - Variables declaration
	1.2 - Compile all the ressources

2 - Task
	2.1 - Transform SVG to icon font
	2.2 - Compress images
	2.3 - Compile
	2.99 - Default

====================================== */


/* ======================================
1.1 - Variables declaration
====================================== */

var gulp         = require('gulp'),
	browserSync  = require('browser-sync').create(),
	sass         = require('gulp-sass'),
	iconfont     = require('gulp-iconfont'),
	consolidate  = require('gulp-consolidate'),
	htmlmin      = require('gulp-htmlmin'),
	imagemin     = require('gulp-imagemin'),
	uglify       = require('gulp-uglify'),
	reload       = browserSync.reload;


/* ======================================
1.2 - Compile all the ressources
====================================== */

gulp.task('fonts', function() {
	return	gulp.src(['app/assets/fonts/**/*'])
				.pipe(gulp.dest('www/assets/fonts'))
				.pipe(reload({stream:true}));
});

gulp.task('img', function() {
	return	gulp.src(['app/assets/img/**/*'])
				.pipe(gulp.dest('www/assets/img'))
				.pipe(reload({stream:true}));
});

gulp.task('js', function() {
	return	gulp.src(['app/assets/js/**/*'])
				.pipe(uglify())
				.pipe(gulp.dest('www/assets/js'))
				.pipe(reload({stream:true}));
});

gulp.task('sass', function() {
	return	gulp.src(['app/assets/scss/main.scss'])
				.pipe(sass({
					outputStyle: 'compressed'
				}))
				.pipe(gulp.dest('www/assets/css'))
				.pipe(reload({stream:true}));
});

gulp.task('templates', function() {
	return	gulp.src('app/*.html')
				.pipe(htmlmin({
					caseSensitive: true,
					collapseWhitespace: true,
					quoteCharacter: "'",
					removeEmptyAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				}))
				.pipe(gulp.dest('www'))
				.pipe(reload({stream:true}));
});

gulp.task('assets', ['fonts', 'img', 'js', 'sass', 'templates']);


/* ======================================
2.1 - Transform SVG to icon font
====================================== */

gulp.task('iconfont', function() {

	return	gulp.src(['app/assets/img/icons/**/*.svg'])
				.pipe(iconfont({
					fontName: 'icons',
					centerHorizontally: true,
					normalize: true,
					prependUnicode: true
				}))
				.on('glyphs', function(glyphs) {
					gulp.src('app/assets/scss/templates/_icons.scss')
						.pipe(consolidate('lodash', {
							glyphs: glyphs,
							fontName: 'icons',
							fontPath: '../fonts/icons/',
							className: 'icon'
						}))
						.pipe(gulp.dest('app/assets/scss'));
				})
				.pipe(gulp.dest('app/assets/fonts/icons'));

});


/* ======================================
2.2 - Compress images
====================================== */

gulp.task('imagemin', function() {
	return	gulp.src('app/assets/img/*')
				.pipe(imagemin())
				.pipe(gulp.dest('app/assets/img'));
});

/* ======================================
2.3 - Compile
====================================== */

gulp.task('compile', ['assets']);


/* ======================================
2.99 - Default
====================================== */

gulp.task('default', ['assets'], function() {

	browserSync.init({
		server: {
			baseDir: './www'
		}
	});

	gulp.watch('app/assets/fonts/**/*',		['fonts']);
	gulp.watch('app/assets/img/**/*',		['img']);
	gulp.watch('app/assets/js/**/*',		['js']);
	gulp.watch('app/assets/scss/**/*',		['sass']);
	gulp.watch('app/*.html',				['templates']);

});