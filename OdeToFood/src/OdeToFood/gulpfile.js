var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', function () {
    return gulp.sec('node_modules/*').pipe(uglify()).pipe(gulp.dest('wwwroot/lib/_app'));
});