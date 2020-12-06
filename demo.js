// var _ = require('lodash')
// console.log(_.random(1,10))

var fs = require('fs')
//fs.readFile('./data.json', function(err,data)){}

// var data = require('./data.json')
// console.log(data.name)

// fs.readFile('./data.json', 'utf-8', (err,data) => {
//     var data = JSON.parse(data)
//     console.log(data.name)
// })

var data_1 = {
    name: 'Bob'
}

fs.writeFile('data_1.json', JSON.stringify(data_1), (err) => {
    console.log('write finished', err)
})

fs.writeFile()
