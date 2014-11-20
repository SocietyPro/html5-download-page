/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    bower: {
      install: {
        options:{
          targetDir: 'bower_components_2',
          layout: 'byComponent',
          copy: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          verbose: true,
        }
      },
    },
    watch: {
      jade: {
        files: ['index.jade'],
        tasks: ['jade:compile'],
        options: {
          livereload: true,
          spawn: true
        },
      },
    },
    jade: {
      compile: {
        options: {
          cwd: "./",
          client: false, 
          pretty: true,
          runtime: false,
        },
        files: {
          "../app/views/index.html": ["index.jade"]
        }        
      },
    },
    'http-server': {
      'dev': {
        root: "./", 
        port: 8080,
        host: "127.0.0.1",
        cache: 0,
        showDir : true,
        autoIndex: true,
        ext: "html",
        runInBackground: true,
      }
    },
    copy: {
      bower: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true, 
            src: [
              'bower_components/angular/angular.min.js',
              'bower_components/angular-animate/angular-animate.min.js',
              'bower_components/angular-aria/angular-aria.min.js',
              'bower_components/angular-material/angular-material.min.js',
              'bower_components/angular-material/angular-material.min.css',
              'bower_components/angular-material/themes/**/*',
              'bower_components/hammerjs/hammer.min.js',
              //'bower_components/roboto/**/*',
              //'bower_components/jquery/dist/jquery.min.js',
            ], 
            dest: '../app/public'
          },

          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],        
      },
      assets: {
        files: [
          {expand: true, src: ['assets/**'], dest: '../'},
        ],
      },
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-http-server');

  // Default task.
  grunt.registerTask('default', [
    'bower:install',
    'jade:compile',
    'copy:bower',
    //'http-server:dev',
    'watch:jade',
  ]);
};

