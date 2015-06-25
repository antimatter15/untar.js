var untar = require('../lib/untar.js')
var pako = require('pako')
var fs = require('fs')

var unzipped = pako.inflate(fs.readFileSync(__dirname + '/' + 'with-5.0.0.tgz'));

untar.untar(unzipped).map(function(file){
	console.log(file.filename)
})