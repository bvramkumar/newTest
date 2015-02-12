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
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js'],               
            },
            css: {
                files: ['css**/*.css'],
                tasks: ['concat'],
            },
        },
        clean: ["css/main.css", "js/1.js"]
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
};