var gulp = require("gulp");
var sass = require("gulp-sass"); //sassのコンパイル
var autoprefixer = require("gulp-autoprefixer"); //bender-prefix自動化
var uglify = require("gulp-uglify"); //jsの圧縮
var webserver = require('gulp-webserver'); //サーバーを起動
var plumber = require("gulp-plumber"); //エラーハンドリング
var notify = require("gulp-notify"); //デスクトップ通知
var concat = require("gulp-concat"); //ファイルの結合
var imagemin = require("gulp-imagemin"); //画像の圧縮
var rimraf = require('rimraf'); //ファイルの削除

//サーバーを起動
gulp.task('webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      port: 8001,
      fallback: 'index.html',
      open: true
    }));
});

//jsのコピー
gulp.task("js", function() {
  gulp.src(["_src/js/**/*.js","!_src/js/lib/*.js"])
  	.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
	  // .pipe(uglify())
	  .pipe(gulp.dest("dist/js"))
});

//jsライブラリのコピー＆結合
gulp.task("lib", function() {
  gulp.src("_src/js/lib/*.js")
  	.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(concat('lib.js'))
	  .pipe(uglify())
	  .pipe(gulp.dest("dist/js"))
});

//sassのコンパイル
gulp.task("sass", function() {
  gulp.src("_src/sass/**/*scss")
  	.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest("dist/css"))
});

//htmlのコピー
gulp.task("html", function () {
	gulp.src("_src/**/*.html")
		.pipe(gulp.dest("dist"))
});

//画像のコピー
gulp.task("img_copy", function () {
	gulp.src(["_src/img/**/*.jpg","_src/img/**/*.png"])
		.pipe(gulp.dest("dist/img/"))
});

//distの画像を削除
gulp.task('img_clean', function (cb) {
  rimraf('dist/img/**/**', cb);
});

//画像の圧縮
gulp.task("img_min", function () {
	gulp.src("dist/img/**/")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/img/"))
});

//監視
gulp.task("watch", function() {
    gulp.watch("_src/js/*.js",["js"]);
    gulp.watch("_src/js/lib/*.js",["lib"]);
    // gulp.watch("_src/*/*.js",["js_all"]);
    
    gulp.watch("_src/sass/**/*.scss",["sass"]);
    gulp.watch("_src/**/*.html",["html"]);
    gulp.watch(["_src/img/**/*.jpg","_src/img/**/*.png"],["img_copy"]);
});

gulp.task("default",['webserver','watch']);

