/**
 * Created by lenovo on 2017/10/9.
 */
var gulp=require("gulp");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var cssminfy=require("gulp-minify-css");


gulp.task("js",function(){
   gulp.src("./js/*.js")
       .pipe(concat("main.js"))
       .pipe(rename({suffix:".min"}))
       .pipe(uglify())
       .pipe(gulp.dest("./js"));
});

gulp.task("css",function(){
   gulp.src("./css/*.css")
       .pipe(concat("main.css"))
       .pipe(rename({suffix:".min"}))
       .pipe(cssminfy())
       .pipe(gulp.dest("./css"));
});