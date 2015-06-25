# untar.js

Here's a simple pure-javascript implementation of untar (it's mostly taken verbatim from Jeff Schiller's bitjs, but no longer in a webworker— though ironically I'm making this in order to stick it back in a webworker, but I digress). 

Here's a basic usage, it seems to work alright. 

	var untar = require('untar.js');
	var fs = require('fs');

	var file = fs.readFileSync(__dirname + '/' + 'test.tar');
	untar.untar(file).forEach(function(file){
	    console.log(file.filename, file.fileData.length);
	})


It's also possible to combine this with `pako` in order to decode tarballs

	var untar = require('untar.js')
	var pako = require('pako')
	var fs = require('fs')

	var unzipped = pako.inflate(fs.readFileSync(__dirname + '/' + 'with-5.0.0.tgz'));

	untar.untar(unzipped).map(function(file){
		console.log(file.filename)
	})

It's pretty minimal as far as APIs go, it exposes a single method `untar` which can be passed an ArrayBuffer. It returns a list of `TarLocalFile` objects. The important fields are `size`, `filename`, and `fileData`. 

## Changelog

* 0.2.3 — Fixing #2, thanks @jedie!
* 0.2.2 — Fixing more decode bugs
* 0.2.0 — Fixed a pretty major bug which led to decode errors from rounding to the wrong block. 
* 0.1.0 — Initial Release