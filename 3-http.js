const https = require('https')

const httpRequest = https.request('https://reqres.in/api/users?page=1')

// (request)                                   (response)
// stream write -------> web server --------> stream read

httpRequest.on('connect', () => {
    console.log('- connected')
})

httpRequest.on('error', (err) => {
    console.log('- Error!', err.message)
})

httpRequest.on('response', (response) => {
    // let output = ''
    const buffers = []

    response.on('data', (chunk) => {
        console.log('- chunk')
        // output += chunk.toString()
        buffers.push(chunk)
    })

    response.on('end', () => {
        console.log('- ended')
        // console.log(JSON.parse(output))
        const combinedBuffer = Buffer.concat(buffers)
        console.log(JSON.parse(combinedBuffer.toString()))
    })
})

// จำเป็น
httpRequest.end()
