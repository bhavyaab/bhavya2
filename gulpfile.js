var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

const PORT = process.env.PORT || 3000;

gulp.task('default', ['webpack-dev-server']);

gulp.task('webpack-dev-server', function(callback) {
	// Start a webpack-dev-server
  new WebpackDevServer(webpack(webpackConfig), {
    stats: {
      colors: true
    }
  }).listen(PORT, 'localhost', function(err) {
    if(err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:' + PORT + '/webpack-dev-server/index.html');
  });
});
