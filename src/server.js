// importação por commonjs (type) no package.json
// const http = require('node:http')

// importação por module (type) no package.json 
import http from 'node:http'

const server = http.createServer((req, res) => {
    const {method, url} = req
    console.log(method, url)

    return res.end('Agora sim')
})

server.listen(3333)