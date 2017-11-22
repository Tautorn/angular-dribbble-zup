module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    './*.html'
                    //'app/css/*.css',
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    },

    clean: {
        temp: ['dist/js/libs.js', 'dist/js/libs.min.js', 'dist/js/scripts.js', 'dist/js/scripts.min.js'],
        all: ['dist/']
    },
    jshint: {
        dist: {
            src: ['js/**/*.js']
        }
    },
    concat: {
        scripts: {
            src: [
              'js/**/*.js'
            ],
            dest: 'dist/js/scripts.js'
        },
        css: {
            src: [
              'css/**/*.css',
              'bower_components/bootstrap/dist/css/bootstrap.css'
            ],
            dest: 'dist/css/styles.css'
        },
        libs: {
            src: [
              'bower_components/angular/angular.min.js',
              'bower_components/angular-route/angular-route.min.js',
              'bower_components/angular-messages/angular-messages.min.js'
            ],
            dest: 'dist/js/libs.min.js'
        },
        all: {
            src: ['dist/js/libs.min.js', 'dist/js/scripts.min.js'],
            dest: 'dist/js/all.min.js'
        }
    },
    uglify: {
        scripts: {
            src: ['dist/js/scripts.js'],
            dest: 'dist/js/scripts.min.js'
        }
    },
    cssmin: {
        all: {
            src: [
              'bower_components/bootstrap/dist/css/bootstrap.min.css',
              'css/**/*.css'
            ],
            dest: 'dist/css/styles.min.css'
        }
    },
    htmlmin: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        views: {
            expand: true,
            cwd: 'view/',
            src: ['*.html'],
            dest: 'dist/view'
        }
    },
    copy: {
        all: {
            src: 'index.html',
            dest: 'dist/index.html'
        }
    },
    watch: {

        watch: {
            files: 'app/*.html',
            //tasks: ['sass']
        },
       // sass: {
         //   files: 'resources/assets/sass/**/*.{scss,sass}',
           // tasks: ['sass']
        //},

    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('serve-dev', ['clean:all', 'jshint', 'concat:scripts', 'uglify', 'concat:libs', 'concat:all', 'cssmin', 'htmlmin', 'copy', 'clean:temp','browserSync', 'watch']);
}