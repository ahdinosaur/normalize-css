var insert = require('insert-css')
var fs = require('fs')

insert(fs.readFileSync(require.resolve('normalize.css'), 'utf8'))
