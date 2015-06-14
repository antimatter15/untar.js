var untar = require('../lib/untar.js')
var fs = require('fs')

untar.untar(fs.readFileSync(__dirname + '/' + 'test.tar')).forEach(function(file){
    console.log(file.name)
})
