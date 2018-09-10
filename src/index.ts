import server from './server'

const port = process.env.PORT || 8080

server.listen(port, () => {
    process.stdout.write(`Ready to accept connections on port ${port}\n`)
})
