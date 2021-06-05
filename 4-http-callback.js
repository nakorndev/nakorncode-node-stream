const https = require('https')

const req = https.request('https://reqres.in/api/users?page=1', (res) => {
    const buffers = []

    res.on('data', (chunk) => {
        console.log('- chunk')
        buffers.push(chunk)
    })

    res.on('end', () => {
        console.log('- ended')
        const combinedBuffer = Buffer.concat(buffers)
        console.log(JSON.parse(combinedBuffer.toString()))
    })

    res.on('error', (err) => {
        console.log('- Error!', err.message)
    })
})

req.end()
