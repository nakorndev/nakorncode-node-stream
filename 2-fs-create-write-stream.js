const fs = require('fs')
const path = require('path')

const writeFilePath = path.resolve(__dirname, './_writeme.txt')

const writer = fs.createWriteStream(writeFilePath)

writer.on('open', () => {
    console.log('- open file')
})

writer.on('error', (err) => {
    console.log('- Error!', err.message)
})

writer.on('finish', () => {
    console.log('- finished!')
})

writer.write('Hello!\n', (err) => {
    if (err) {
        console.log('- Error!', err.message)
    } else {
        console.log('- Writing...')
    }
})

// .end()
writer.end()
