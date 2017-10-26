var gulp      = require('gulp'), // Подключаем Gulp
    less        = require('gulp-less'), //Подключаем less пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify      = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename      = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del         = require('del'), // Подключаем библиотеку для удаления файлов и папок
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    babel = require('gulp-babel'),
    fs = require('fs-extra');

var manifestData =
`CACHE MANIFEST
# v.${+Date.now()}\n`;

gulp.task('less', function(){ // Создаем таск less
    return gulp.src('app/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем less в CSS посредством gulp-less
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
            'app/js/main.js'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('main.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/js')); // Выгружаем в папку dist
});

gulp.task('css-libs', ['less'], function() {
    return gulp.src('app/css/styles.css') // Выбираем файл для минификации
        .pipe(cssnano({
            autoprefixer: {
                browsers:['ios > 8'],
                add: true
            }
        })) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/less/**/*.less', ['less']); // Наблюдение за less файлами в папке less
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('read-dir', function() {
    return new Promise((resolve, reject) => {
        fs.readdir('docs/img', function(err, items) {
            for (let i=0; i<items.length; i++) {
                manifestData += `img/${items[i]} \n`;
                console.log(manifestData);
                if(i == items.length - 1) {
                    resolve();
                }
            }
        });
    }).then(() => {
        fs.readdir('docs/', function(err, items) {
            for (var i=0; i<items.length; i++) {
                if(items[i] !== 'img' && items[i] !== 'cache.manifest') {
                    manifestData += `${items[i]} \n`;
                    if(i == items.length - 1) {
                        gulp.start('update-manifest');
                    }
                }
            }
        });
    });
});

gulp.task('update-manifest', function(){
    fs.writeFile('docs/cache.manifest', manifestData);
});

gulp.task('build', ['less', 'scripts', 'read-dir'], function() {

    gulp.src('app/img/*').pipe(gulp.dest('docs/img'));
});

gulp.task('default', ['watch']);