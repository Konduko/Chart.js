// package metadata file for Meteor.js
'use strict';

var packageName = 'konduko:chartjs';  // https://atmospherejs.com/chart/chart
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'Chart.js (konduko) - Responsive, simple, clean and interactive charts using HTML5 <canvas>',
  version: packageJson.version,
  git: 'https://github.com/Konduko/Chart.js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.2.1']);
  api.export('Chart');
  api.addFiles([
    'Chart.js',
    'meteor/export.js'
  ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});
