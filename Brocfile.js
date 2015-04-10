/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp(); 

app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');
app.import('vendor/momentjs/moment.js');

var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var extraAssets = pickFiles('vendor/bootstrap/dist/fonts',{
    srcDir: '/', 
    files: ['**/*'],
    destDir: '/fonts'
});

module.exports = mergeTrees([app.toTree(), extraAssets]);
