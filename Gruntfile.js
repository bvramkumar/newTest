module.exports = function (grunt) {

    grunt.initConfig({
        concat: {            
            js: {
                src: ['js/1.js', 'js/2.js'],
                dest: 'Built/script.js',
            },
            css: {
                src: ['css/main.css', 'css/theme.css'],
                dest: 'Built/style.css',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};