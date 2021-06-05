const fs = require('fs')
const path = require('path')
const https = require('https')

const url = 'https://releases.ubuntu.com/20.04.2.0/ubuntu-20.04.2.0-desktop-amd64.iso'

const req = https.request(url, (res) => {
    if (!res.headers['content-type'].startsWith('application/')) {
        throw new Error('url is not application/*')
    }

    const fileSize = res.headers['content-length']
    console.log(`- download... (total file size: ${(fileSize / 1024 / 1024).toFixed(2)}MB)`)

    const buffers = []
    let progress = 0

    res.on('data', (chunk) => {
        progress += chunk.length / fileSize
        console.log(`- download (${(progress * 100).toFixed(2)}%)`)
        buffers.push(chunk)
    })

    res.on('end', () => {
        const buffer = Buffer.concat(buffers)
        const downloadPath = path.resolve(__dirname, './ubuntu-desktop.iso')
        fs.writeFileSync(downloadPath, buffer)
    })
})

req.end()
