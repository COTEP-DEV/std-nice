"use strict";

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		babel: {
			options: {
				sourceMap: true,
			},
			files: {
				expand: true,
				src: ['src/**/*.js', 'tests/**/*.js'],
				ext: '.js',
				dest: './lib/',
			},
		},
	});

	grunt.loadNpmTasks('grunt-newer');
	grunt.registerTask('default', ['newer:babel']);
};
