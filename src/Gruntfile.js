/*global module:false*/
module.exports = function(grunt) {
  myFile = {
    name: "filename",
    href:"/releases/filename",
    hash: "abcd",
    sizeMb: "100",
    platform: "windows",
    date: new Date().toString(),
  }

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
        files: ['index.jade','downloadPartial.jade'],
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
          "../dist/Cambrian-src/scripts/dist/templates/download-partial.html.tpl": ["downloadPartial.jade"],
          "../dist/Cambrian-src/scripts/dist/templates/index.html.tpl": ["index.jade"],
        }        
      },
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
              'bower_components/roboto/**/*',
              //'bower_components/jquery/dist/jquery.min.js',
            ], 
            dest: '../dist/s3bucket/'
          },

          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],        
      },
      assets: {
        files: [
          {expand: true, src: ['css/**'], dest: '../dist/s3bucket/'},
          {expand: true, src: ['js/**'], dest: '../dist/s3bucket/'},
          {expand: true, src: ['images/**'], dest: '../dist/s3bucket/'},
        ],
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task.
  grunt.registerTask('default', [
    'bower:install',
    'jade:compile',
    'copy:bower',
    'copy:assets',
    'watch:jade',
  ]);
};

