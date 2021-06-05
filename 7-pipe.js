const fs = require('fs')
const path = require('path')

const sourcePath = path.resolve(__dirname, './_readme.txt')
const destPath = path.resolve(__dirname, './_copy_readme.txt')

const reader = fs.createReadStream(sourcePath)
const writer = fs.createWriteStream(destPath)

reader.pipe(writer)
