var untar = require('../lib/untar.js')
var gzip = require('gzip-js')
var fs = require('fs')

var unzipped = gzip.unzip(fs.readFileSync(__dirname + '/' + 'test.tgz'));
untar.untar(unzipped).map(function(file){
	console.log(file.filename)
})