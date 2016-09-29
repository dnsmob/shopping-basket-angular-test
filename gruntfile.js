module.exports = function (grunt) {

	grunt.initConfig ({

		pkg : grunt.file.readJSON ('package.json'),
		path : 'dev',

		copy : {
			bower : {
				files : [
					{src : 'bower_components/angular/angular.js', dest : 'dev/js/bower/angular.js'},
					{src : 'bower_components/angular-bootstrap/ui-bootstrap.js', dest : 'dev/js/bower/angular-bootstrap.js'},
					{src : 'bower_components/angular-route/angular-route.js', dest : 'dev/js/bower/angular-route.js'},
					{src : 'bower_components/angular-sanitize/angular-sanitize.js', dest : 'dev/js/bower/angular-sanitize.js'},
					{src : 'bower_components/bootstrap/dist/css/bootstrap.css', dest : 'dev/css/bootstrap.css'},
					{src : 'bower_components/normalize-css/normalize.css', dest : 'dev/css/normalize.css'}
				]
			},
			images : {
				files : [
					{expand : true, cwd : 'src/images/', src : '**', dest : '<%= path %>/images/'}
				]
			},
			js : {
				files : [
					{
						expand : true,
						cwd : 'src/js/',
						src : '**',
						dest : 'dev/js/'
					}
				]
			},
			html : {
				files : [
					{ expand : true, cwd : 'src/templates/', src : '**', dest : '<%= path %>/templates/' },
					{ expand : true, cwd : 'src/pages/', src : '**', dest : '<%= path %>/pages/' }
				]
			},
			css : {
				files : [
					{ expand : true, cwd : 'src/css/', src : '**', dest : 'dev/css/' }
				]
			}
		},

		concat : {
			js : {
				src : [
					'bower_components/angular/angular.js',
					'bower_components/angular-bootstrap/ui-bootstrap.js',
					'bower_components/angular-route/angular-route.js',
					'bower_components/angular-sanitize/angular-sanitize.js',
					'src/js/**/*.js'
				],
				dest : 'dist/js/script.js'
			},
			css : {
				src : [ 'bower_components/normalize-css/normalize.css', 'bower_components/bootstrap/dist/css/bootstrap.css', 'src/css/style.css' ],
				dest : 'dist/css/style.css'
			},
			options : {
				separator : grunt.util.linefeed
			}
		},

		preprocess : {
			dev : {
				options : {
					context : {
						dev : true
					}
				},
				src : 'src/index.html',
				dest : 'dev/index.html'
			},
			dist : {
				options : {
					context : {
						dist : true
					},
					expand : true
				},
				src : 'src/index.html',
				dest : 'dist/index.html'
			}
		},

		tags : {
			build : {
				options : {
					scriptTemplate : '<script type="text/javascript" src="{{ path }}"></script>',
					linkTemplate : '<link rel="stylesheet" href="{{path}}"/>',
					openTag : '<!-- start auto template tags -->',
					closeTag : '<!-- end auto template tags -->'
				},
				src : [ 'dev/js/**/*.js', '!dev/js/bower/**' ],
				dest : 'dev/index.html'
			}
		},

		watch : {
			preprocess : {
				files : [ 'src/index.html' ],
				tasks : [ 'preprocess:dev', 'tags' ]
			},
			html : {
				files : [ 'src/templates/**/*.html', 'src/pages/**/*.html' ],
				tasks : [ 'copy:html' ]
			},
			js : {
				files : [ 'src/js/**/*.js' ],
				tasks : [ 'copy:js' ]
			},
			css : {
				files : [ 'src/css/**/*.css' ],
				tasks : [ 'copy:css' ]
			},
			tags : {
				files : [ 'src/js/**/*.js' ],
				tasks : [ 'tags' ]
			}
		},

		connect : {
			dev : {
				options : {
					base : 'dev/',
					open: true
				}
			},
			dist : {
				options : {
					base : 'dist/',
					keepalive : true,
					open: true
				}
			}
		}
	});


	grunt.loadNpmTasks ('grunt-contrib-concat');
	grunt.loadNpmTasks ('grunt-contrib-watch');
	grunt.loadNpmTasks ('grunt-contrib-connect');
	grunt.loadNpmTasks ('grunt-preprocess');
	grunt.loadNpmTasks ('grunt-contrib-copy');
	grunt.loadNpmTasks ('grunt-script-link-tags');


	var devTasks = [ 'preprocess:dev', 'copy:js', 'copy:css', 'copy:html' ];
	grunt.registerTask ('init', function () {
		grunt.task.run ('copy:bower', 'copy:images');
		grunt.task.run (devTasks);
	});
	grunt.registerTask ('dev', function (){
		grunt.task.run ('init');
		grunt.task.run (devTasks);
		grunt.task.run ('tags', 'connect:dev', 'watch');
	});


	// TODO: add uglify, compress, etc
	grunt.registerTask ('default', function () {
		grunt.config ('path', 'dist');
		grunt.task.run ('preprocess:dist', 'copy:html', 'copy:images', 'concat', 'connect:dist');
	});
};