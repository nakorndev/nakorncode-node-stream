const https = require('https')

const req = https.request('https://reqres.in/api/login', {
    method: 'POST'
}, (res) => {
    const buffers = []

    res.on('data', (chunk) => {
        buffers.push(chunk)
    })

    res.on('end', () => {
        const buffer = Buffer.concat(buffers)
        console.log(buffer.toString())
    })
})

req.setHeader('Content-Type', 'application/json')
req.write(JSON.stringify({ email: 'eve.holt@reqres.in', password: '1234' }))
req.end()
