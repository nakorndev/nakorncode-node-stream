const fs = require('fs')
const path = require('path')

const readmePath = path.resolve(__dirname, './_readme.txt')

const reader = fs.createReadStream(readmePath)

reader.on('open', () => {
    console.log('- open file')
})

reader.on('data', (chunk) => {
    console.log('- chunk data', chunk.toString())
})

reader.on('end', () => {
    console.log('- close file')
})

reader.on('error', (err) => {
    console.log('- Error!', err.message)
})

// fs.readFile(readmePath, (err, data) => {
//     console.log(err, data ? data.toString() : 'no data')
// })
